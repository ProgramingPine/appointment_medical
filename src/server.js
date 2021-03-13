import express from "express";

const app = express();

/**
 * GET -> pegar
 * POST -> postar
 * PATCH -> edição do objeto em parte
 * DELETE -> deletar uma informação
 */

app.get("/", (request, response) => {
  return response.send("Olá mundo");
});

const port = 5000;

app.listen(port, () => console.log("Server is running on port " + port));