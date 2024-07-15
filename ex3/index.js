const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;

const extensions = {
  ['.html']: "text/html",
  ['.js']: "text/javascript",
  ['.css']: "text/css",
  ['.png']: "image/png",
  ['.woff2']: "application/font-woff2",
};

const server = http.createServer((req, res) => {
  console.log("Request for " + req.url + " by method " + req.method);
  if (req.method == "GET") {
    const fileUrl = req.url == '/' ? "/index.html" : req.url;

    let filePath = path.resolve("./" + fileUrl);
    const fileExt = path.extname(filePath);
    console.log(filePath);
    const mimetype = extensions[fileExt];
    if (mimetype) {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          filePath = path.resolve("./404.html");
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          fs.createReadStream(filePath).pipe(res);
          return;
        }
      });
      res.statusCode = 200;
      res.setHeader("Content-Type", mimetype);
      fs.createReadStream(filePath).pipe(res);
      return
    } else if (req.url.endsWith('ore-price')) {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      const reponseObj = { price: Math.random() * 100 };
      res.write(JSON.stringify(reponseObj));
      console.log(reponseObj);
      res.end();
      return;
      // fs.createReadStream(filePath).pipe(res);
    } else {
      filePath = path.resolve("./404.html");
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(filePath).pipe(res);
      return
    }
  } else {
    filePath = path.resolve("./404.html");
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(port);
console.log('Listening on http://localhost:' + port);
