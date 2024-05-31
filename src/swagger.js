import swaggerAutogen from 'swagger-autogen'
const doc = {
  openapi: '3.0.3',
  info: {
    version: "1.0.0",
    title: 'REST API',
    description: 'This Documentation is my Learning Purpose'
  },
  host: 'localhost:4000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'X-API-KEY',
      description: 'Some description...'
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    }
  },
  definitions: {}
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc)