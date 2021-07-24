import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'

import { updateTodo } from '../../helpers/todos'
import { UpdateTodoRequest } from '../../requests/UpdateTodoRequest'
import { getUserId } from '../utils'

import { createLogger } from '../../utils/logger';

const logger = createLogger('updateTodo');

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
    const updatedTodo: UpdateTodoRequest = JSON.parse(event.body)
    // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
    logger.info(`Processing event: ${event}`)
    const userId = getUserId(event)
    const response = await updateTodo(userId, todoId, updatedTodo );

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      // it should return void
      body: JSON.stringify({
        item: response
      })
    }
})

handler
  .use(httpErrorHandler())
  .use(
    cors({
      credentials: true
    })
  )
