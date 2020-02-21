const express = require('express');

const Project = require('./project-model.js')

// const Task = require('../task/task-model.js')

const router = express.Router();

router.get('/projects', (req, res) => {
  Project.findProject()
  .then(project => {
    res.json(project);
  })
  .catch(error => {
      console.log(error);
    res.status(500).json({ message: 'Failed to find project' });
  });
});

// router.get('/project/:id', (req, res) => {
//     const { id } = req.params;

//     Project.findProjectById(id)
//     .then(project => {
//         if (project) {
//       res.json(project);
//         } else {
//             res.status(404).json({ message: 'Failed to find project with that ID.'})
//         }
//     })
//     .catch(error => {
//         console.log(error);
//       res.status(500).json({ message: 'Failed to find project' });
//     });
//   });

// router.get('/project/:id/tasks', (req, res) => {
//     const { id } = req.params;

//     Project.findProjectById(id)
//     .then(task => {
//         res.status(200).json(task);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({ message: 'Failed to get project' });
//     });
// });

router.post('/projects', (req, res) => {
    const projectData = req.body;

    Project.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (error => {
        console.log(error);
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });



  router.get('/tasks', (req, res) => {

  Project.findTask()
  .then(task => {
    res.status(200).json(task);
  })
  .catch(error => {
      console.log(error);
    res.status(500).json({ message: 'Failed to get task' });
  });
});

router.post('/projects/:id/tasks', (req, res) => {
    const taskData = req.body;
    const id = req.params.id

    Project.addTask(taskData, id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (error => {
        console.log(error);
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });




  router.get('/resources', (req, res) => {
    Project.findResource()
  .then(resource => {
    res.status(200).json(resource);
  })
  .catch(error => {
      console.log(error);
    res.status(500).json({ message: 'Failed to get resource' });
  });
});

// router.get('/:id', (req, res) => {
//     const id = req.params;

//     Resource.findResourceById(id)
//   .then(resource => {
//     res.status(200).json(resource);
//   })
//   .catch(error => {
//       console.log(error);
//     res.status(500).json({ message: 'Failed to get resource' });
//   });
// });

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    Project.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (error => {
        console.log(error);
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });


module.exports = router;