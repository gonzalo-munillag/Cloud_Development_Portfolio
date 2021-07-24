import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'
// HAD TO CHANGE THE NEXT LINE
import { deleteTodo } from '../../helpers/todos'
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger';

const logger = createLogger('deleteTodo');


export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
    // TODO: Remove a TODO item by id
    logger.info(`Processing event: ${event}`)

    const userId = getUserId(event)
    const newItem = await deleteTodo(userId, todoId);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      // it should return void
      body: JSON.stringify({
        item: newItem
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
