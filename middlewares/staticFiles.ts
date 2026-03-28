import { Middleware } from "../core/router";

const MIME_TYPES : Record<string , string> = {
    '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.svg': 'image/svg+xml',
}




export const staticFiles = (rootPath : string , prefix : string = '/static') : Middleware => {
    return (req,res,next) =>{}
};
