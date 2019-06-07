
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Data Persistence Weekly Sprint Challenge',
      description:
        'You learned lots this week, now apply it!',
    },
    {
      name: 'add more seeds for the challenge',
      description:
        'so that you can have enough data to test the project!',
    },
    {
      name: 'Complete challenge',
      description:
        'and then pat yourself on the back!!',
    },
  ]);
};
