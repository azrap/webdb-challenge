
exports.up = async function(knex, Promise) {

    await knex.schema.createTable('projects', projectTable => {
        projectTable.increments();
        projectTable.string('name', 128).notNullable();
        projectTable.text('description').notNullable();
        projectTable.boolean('completed').defaultTo(false);
    });

    await knex.schema.createTable('actions', actionTable => {
        actionTable.increments();
        actionTable
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
          actionTable.string('description', 128).notNullable();
          actionTable.text('notes').notNullable();
          actionTable.boolean('completed').defaultTo(false);
    });


  };
  
  exports.down = function(knex, Promise) {
    return  knex.schema
            .dropTableIfExists('projects')
            .dropTableIfExists('actions')
  
  };
