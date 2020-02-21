
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
    tbl.increments();
    tbl.integer('project_id')
    tbl.text('project_name')
    .notNullable();
    tbl.text('project_description');
    tbl.boolean('completed', false)
    .notNullable();


 })
 .createTable('tasks', tbl => {
    tbl.increments();
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE');
    tbl.text('task_name');
    tbl.text('task_description')
    .notNullable();
    tbl.text('task_notes');
    tbl.boolean('completed', false)
    .notNullable();
 })

 .createTable('resources', tbl => {
    tbl.increments();
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE');
    tbl.text('resource_name')
    .notNullable();
    tbl.text('resource_description');
 })
};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
