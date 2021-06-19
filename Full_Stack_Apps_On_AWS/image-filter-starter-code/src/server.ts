import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
  app.get( "/filteredimage", async ( req, res ) => {
    
    // 1. validate the image_url query
    // Error codes ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // From server.ts of exercise Udacity basic server
    let image_url: string = req.query.image_url;

    if (!image_url) {
      return res.status(422).send("Unprocessable Entity. The server could not understand the request due to invalid syntax. Rewrite the URL.");
    } else {
      return res.status(202).send("Good request.");     
    }

    // 2. call filterImageFromURL(image_url) to filter the image
    // use await for the asynchornous function: https://knowledge.udacity.com/questions/151148
    let filtered_image_url = await filterImageFromURL(image_url);

    // 3. send the resulting file in the response
    // 4. deletes any files on the server on finish of the response
    // ref, from instructor: https://knowledge.udacity.com/questions/151148
    return res.status(200).sendFile(filtered_image_url, () => deleteLocalFiles([filtered_image_url]));

  } );

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();