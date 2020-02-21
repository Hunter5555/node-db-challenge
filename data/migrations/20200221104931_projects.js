
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
    tbl.increments();
    tbl.text('project_name')
    .notNullable();
    tbl.text('project_description');
    tbl.boolean('completed', false)
    .notNullable();


 })
 .createTable('task', tbl => {
    tbl.increments();
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('project')
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
    .inTable('project')
    .onUpdate('CASCADE');
    tbl.text('resource_name')
    .notNullable();
    tbl.text('resource_description');
 })
};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists('resources')
    .dropTableIfExists('task')
    .dropTableIfExists('project');
};
