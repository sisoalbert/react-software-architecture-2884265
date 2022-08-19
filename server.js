import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Home } from "./src/pages/Home";
import App from "./src/App";
import path from "path";
import fs from "fs";

const app = express();

//app to look in the build folder for the index.html file
app.use(express.static("./ build ", { index: false })); //index: false to prevent the index.html file from being served

app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <Home />
    </StaticRouter>
  );

  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(
      data.replace('<div id="root"></div> ', `<div id="root">${reactApp}</div>`)
    );
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
