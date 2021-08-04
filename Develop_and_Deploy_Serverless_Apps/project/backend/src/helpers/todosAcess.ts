import * as AWS from 'aws-sdk'
// fix source
// import * as AWSXRay from 'aws-xray-sdk'
const AWSXRay = require('aws-xray-sdk')
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import { createLogger } from '../utils/logger'
import { TodoItem } from '../models/TodoItem'
import { TodoUpdate } from '../models/TodoUpdate';


const XAWS = AWSXRay.captureAWS(AWS)

// The mentor help section of the course was very useful 

const logger = createLogger('TodosAccess')

// TODO: Implement the dataLayer logic

export class TodosAccess {
    
    constructor(
        // this line gave me error, with AWs was fine but not with XAWS
        private readonly docClient: DocumentClient = new XAWS.DynamoDB.DocumentClient(),
        private readonly todosTable = process.env.TODOS_TABLE,
        private readonly todosTableIndexName = process.env.TODOS_CREATED_AT_INDEX
        ) {
    }

    // ref https://knowledge.udacity.com/questions/79637 

    async getTodos(userId: string): Promise<TodoItem[]> {

        logger.info(`Get todos request processing for ${userId} in ${this.todosTable}`);
        
        const result = await this.docClient.query({
            TableName: this.todosTable,
            IndexName: this.todosTableIndexName,
            KeyConditionExpression: '#userId = :i',
            ExpressionAttributeNames: {
                '#userId': 'userId'
            },
            ExpressionAttributeValues: {
                ':i': userId
            },
        }).promise();

        return result.Items as TodoItem[]
    }

    async getTodo(todoId: string, userId: string): Promise<TodoItem> {

        logger.info(`Get todo request for ${todoId} from ${this.todosTable}`)
    
        const result = await this.docClient.get({
          TableName: this.todosTable,
          Key: {
            todoId: todoId,
            userId: userId
          }
        }).promise()
        
        return result.Item as TodoItem
      }

    async createTodo(todoItem: TodoItem): Promise<TodoItem>  {

        logger.info(`Create todo request processing for ${todoItem} in ${this.todosTable}`)
    
        await this.docClient.put({
          TableName: this.todosTable,
          Item: todoItem,
        }).promise()
        return Promise.resolve(todoItem)
    }    

    async updateTodo(todoId: string, todoUpdate: TodoUpdate) {

        logger.info(`Update todo request processing for ${todoId} in ${this.todosTable}`)
    
        await this.docClient.update({
            TableName: this.todosTable,
            Key: {
              todoId
            },
            UpdateExpression: 'set #name = :name, dueDate = :dueDate, done = :done',
            ExpressionAttributeNames: {
              "#name": "name"
            },
            ExpressionAttributeValues: {
              ":name": todoUpdate.name,
              ":dueDate": todoUpdate.dueDate,
              ":done": todoUpdate.done
            }
          }).promise()   
            
    }
    
    async deleteTodo(todoId: string, userId: string): Promise<void> {

        logger.info(`Delete todo request processing for ${todoId} in ${this.todosTable}`)
    
        await this.docClient.delete({
          TableName: this.todosTable,
          Key: {
            todoId: todoId,
            userId: userId
          }
        }).promise();
        
        return Promise.resolve()
      }

      async updateUrl(todoId: string, attachmentUrl: string, userId: string) {

        logger.info(`Updating the attachment URL ${attachmentUrl} for todo ${todoId} in ${this.todosTable}`)
    
        await this.docClient.update({
          TableName: this.todosTable,
          Key: {
            todoId: todoId,
            userId: userId
          },
          UpdateExpression: 'set attachmentUrl = :attachmentUrl',
          ExpressionAttributeValues: {
            ':attachmentUrl': attachmentUrl
          }
        }).promise()
      }

}

