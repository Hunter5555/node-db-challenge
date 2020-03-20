const db = require('../data/dbConfig.js');

module.exports = {
    findProject,
    findProjectById,
    // findTasks,
    addProject,
    findTask,
    // findTaskById,
    addTask,
    findResource,
    addResource
};

function findProject() {
    return db('projects')
}

function findProjectById(id) {
    return db('projects')
      .where({ id })
      .first();
  }

//   function findTasks(id) {
//     return db('projects')
//       .select(
//         'task.id',
//         'project.name',
//         'task.description',
//         'task.notes'
//       )
//       .join('task', 'task.project_id', 'project.id')
//       .where({ project_id: id })
//       .orderBy('task_id');
//   }

  function addProject(projects) {
    return db('projects')
      .insert(projects)
    //   .then(id => {
    //     return findById(id);
    //   });
  }

//   function findTask(project_id) {
//     return db('task')
//     .select('task.task_description',
//       'task.task_notes',
//       'task.completed',
//       'project.project_name'
//       )
//       .join('projects', 'project.id', 'task.project_id')
//       .where({ project_id });
// }

// function findTaskById(id) {
//     return db('task')
//     .where({id})

//   }

function findTask() {
    return db('task')
    .join('projects', 'project.id', 'task.project_id')
    .select('task.task_name',
          'task.task_description',
          'task.task_notes',
          'task.completed',
          'project.project_name',
          'project.project_description'
          )

  }

  function addTask(task, id) {
    return db.insert({ ...task, project_id: id }).into('task');
  }

  function findResource() {
    return db('resources')
}

function addResource(resource) {
    return db('resources').insert(resource)
  };