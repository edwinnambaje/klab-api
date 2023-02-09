const swaggerUi=require('swagger-ui-express');
const swaggerJSDocs=require('swagger-jsdoc');
const userRouteDocs=require('./user.docs');
const blogRouteDocs=require('./blogs.docs');
const messageRouteDocs=require('./message.docs');
const estateRouteDocs=require('./estate.docs')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Blog Backend',
      description: 'Post Api',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
      {
        url: 'https://klabapi.onrender.com',
        description: 'Production server',
      },
    ],
    tags: [
      { name: 'User', description: 'User Routes' },
      { name: 'Blog', description: 'Blog Routes' },
      { name: 'Message', description: 'Message Routes' },
      { name: 'Estate', description: 'Estate Routes' },
    ],
    components: {
      securitySchemes: {
        token: {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name:"token",
          in:"header"
        },
      },
    },
    paths: { ...userRouteDocs.userRouteDocs,...blogRouteDocs.blogRouteDocs,...messageRouteDocs.messageRouteDocs,...estateRouteDocs.estateRouteDocs},
  },
  apis: ['../routes/**/*.js'],
};
const swaggerSpec = swaggerJSDocs(options);
const swaggerDocs = (app) => {
  app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/documentation.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports= swaggerDocs;