import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
import { getUserId } from '../utils';
// HAD TO CHANGE THE NEXT LINE
import { createTodo } from '../../helpers/todos' 
import { createLogger } from '../../utils/logger';

const logger = createLogger('createTodo');

// lesson 6 lambdas were very useful for the http .ts files

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const newTodo: CreateTodoRequest = JSON.parse(event.body)
    // TODO: Implement creating a new TODO item
    logger.info(`Processing event: ${event}`)

    const userId = getUserId(event)
    const newItem = await createTodo(newTodo, userId);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      item: newItem
    })
  }
})

// Line 26 implements this though
handler.use(
  cors({
    credentials: true
  })
)
