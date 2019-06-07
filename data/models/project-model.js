const knex = require('knex');
const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    findProjects,
    findActions,
    addAction,
    addProject,
    getProjectActions
  
  }

  function findProjects(){
      return db('projects') 

  } 

  function findActions(){
    return db('actions') 

} 

function addProject(project){
    return db('projects').insert(project)
}

function addAction(action){
    return db('actions').insert(action)
}

 function getProjectActions(projectId){
     db('actions')
    .join('projects', 'actions.project_id', 'projects.id' )
    .select('actions.*')
    .where( {project_id: projectId})
  
}




