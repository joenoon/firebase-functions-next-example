const functions = require("firebase-functions")
const nextApp = require("next")
const path = require('path')

const distDir = path.relative(process.cwd(), path.resolve(__dirname, ".next"));
const app = nextApp({ dev: false, conf: { distDir } })
const handle = app.getRequestHandler()


exports.next = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl) // log the page.js file that is being requested
  return handle(req, res);
})
