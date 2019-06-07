const express = require('express');
const Projects = require('../models/project-model.js')
const router = express.Router();


//CREATE:

//project: tested
router.post('/projects', async (req, res) => {
  try {
      const project= await Projects.addProject(req.body)
      res.status(201).json(project);
  }
  catch (error){
      console.log(error);
      res.status(500).json({
        message: 'Error creating a new project suckas',
      });

  }
});

//action: tested
router.post('/actions', async (req, res) => {
    try {
        const action= await Projects.addAction(req.body)
        res.status(201).json(action);
    }
    catch (error){
        console.log(error);
        res.status(500).json({
          message: 'Error creating a new action suckas',
        });

    }
});

//READ:

//get all projects: tested
router.get('/projects', async (req, res) => {
    try {
      
      const projects = await Projects.findProjects();
     
      res.status(200).json(projects);
    } catch (error) {
      
      res.status(500).json({
        message: 'Error retrieving the dang projects',
      });
    }
  });

  //get all actions: tested
  router.get('/actions', async (req, res) => {
    try {
      
      const actions = await Projects.findActions();
     
      res.status(200).json(actions);
    } catch (error) {
      
      res.status(500).json({
        message: 'Error retrieving the dang actions',
      });
    }
  });

  //get project actions by project id: 

  router.get('/projects/:id/actions/', async (req, res) => {
    console.log('hello')
    try { 
      const actions = await Projects.getProjectActions(req.params.id)
      console.log(req.params);
      res.status(200).json(actions);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the actions for the project',
      });
    }
});


module.exports = router;
