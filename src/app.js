const express = require('express');
const cors = require('cors');
const notasRoutes = require('./routes/notas.route');

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

app.use(cors());
app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Notas",
      version: "1.0.0",
      description: "Microservicio de notas"
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:4001"
      }
    ]
  },
  apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(options);


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(notasRoutes);

module.exports = app;