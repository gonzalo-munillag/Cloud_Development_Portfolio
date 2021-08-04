import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'

//import { createAttachmentPresignedUrl } from '../../businessLogic/todos'
// I had to change the next line
import { getUploadUrl, updateUrl } from '../../helpers/todos'
import { getUserId } from '../utils'
import * as uuid from 'uuid'

import { createLogger } from '../../utils/logger';

const logger = createLogger('generateUploadUrl');

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
    // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
    logger.info(`Processing event: ${event}`)

    const userId = getUserId(event)
    const attachmentId = uuid.v4()

    const Url = await getUploadUrl(attachmentId);
    logger.info(`Created upload URL ${Url}`)

    await updateUrl(userId, todoId, attachmentId)
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      // it should return void
      body: JSON.stringify({
        item: Url
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
