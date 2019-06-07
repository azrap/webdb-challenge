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

async function getProjectActions(projectId){
    
    const actions =  await db('actions')
    .join('projects', 'actions.project_id', 'projects.id' )
    .select('actions.id', 'actions.description', 'actions.notes', 'actions.completed')
    .where( {project_id: projectId})

    const projects = await db('projects').where({id:projectId}); 

    projects[0].actions= await actions

    return projects;

}


// function findCohortStudents(id) {
//     return db('students as s')
//       .join('cohorts as c', 's.cohort_id', 'c.id')
//       .select('s.id', 's.name as name', 'c.name as cohort_name', 'c.id as cohortId', 'c.name as cohortName')
//       .where({ cohort_id: id });
//   }



