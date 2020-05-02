const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
  // const { title, owner } = request.query;

  // console.log(title);
  // console.log(owner);
  
  return response.json(projects)
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  
  const project = { id: uuid(), title, owner }

  projects.push(project);

  return response.json(project)
  
});


app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  
  console.log(id)

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ])
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ])
});
app.listen(7777), () => {
  console.log('Back-end started! 🚀');
};
