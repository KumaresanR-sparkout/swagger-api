import swaggerAutogen from 'swagger-autogen'
const doc = {
  info: {
    title: 'Node js and express documentation',
    description: 'listing all endpoints description'
  },
  host: 'localhost:4000'
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc)
