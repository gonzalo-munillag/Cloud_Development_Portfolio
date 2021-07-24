import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
// I had to change the neext line
import { getTodos as getTodos } from '../../helpers/todos'
import { getUserId } from '../utils'

import { createLogger } from '../../utils/logger';

const logger = createLogger('getTodos');

// TODO: Get all TODO items for a current user
export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Write your code here
    logger.info(`Processing event: ${event}`)
    const userId = getUserId(event)
    const items = await getTodos(userId);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      // it should return void
      body: JSON.stringify({
        item: items
      })
    }
})

handler.use(
  cors({
    credentials: true
  })
)
