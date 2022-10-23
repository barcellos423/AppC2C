import express from "express";
import locais from "./locaisRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    //res.status(200).send({titulo: "Curso de node"})
    res.render("index");
  })

  app.use(
    express.json(),
    locais
  )
}

export default routes