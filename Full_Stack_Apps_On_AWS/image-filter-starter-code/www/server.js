"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const util_1 = require("./util/util");
(() => __awaiter(this, void 0, void 0, function* () {
    // Init the Express application
    const app = express_1.default();
    // Set the network port
    const port = process.env.PORT || 8082;
    // Use the body parser middleware for post requests
    app.use(body_parser_1.default.json());
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
    app.get("/filteredimage", (req, res) => __awaiter(this, void 0, void 0, function* () {
        // 1. validate the image_url query
        // Error codes ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        // From server.ts of exercise Udacity basic server
        let { image_URL } = req.query;
        if (!image_URL) {
            return res.status(400).send("Bad request. The server could not understand the request due to invalid syntax. Rewrite the URL.");
        }
        else {
            return res.status(202).send("Good request.");
        }
        // 2. call filterImageFromURL(image_url) to filter the image
        // use await for the asynchornous function: https://knowledge.udacity.com/questions/151148
        let filtered_image_URL = yield util_1.filterImageFromURL(image_URL);
        // 3. send the resulting file in the response
        // 4. deletes any files on the server on finish of the response
        // ref, from instructor: https://knowledge.udacity.com/questions/151148
        return res.status(200).sendFile(filtered_image_URL, () => util_1.deleteLocalFiles([filtered_image_URL]));
    }));
    //! END @TODO1
    // Root Endpoint
    // Displays a simple message to the user
    app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        res.send("try GET /filteredimage?image_url={{}}");
    }));
    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
}))();
//# sourceMappingURL=server.js.map