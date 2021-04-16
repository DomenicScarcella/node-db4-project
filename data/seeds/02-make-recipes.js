const recipes = [
    { recipe_name: 'Pizza' },
    { recipe_name: 'Doughnuts' },
    { recipe_name: 'Big Sandwich' },
];

const ingredients = [
    { ingredient_name: 'Pizza', ingredient_unit: '' },
    { ingredient_name: 'Doughnut', ingredient_unit: '' },
    { ingredient_name: 'Big Sandwich', ingredient_unit: '' },
    { ingredient_name: 'Beer', ingredient_unit: 'pint' },
    { ingredient_name: 'Coffee', ingredient_unit: 'pint' },
];

const step_ingredients = [
    { step_id: 1, ingredient_id: 1, quantity: 1 },
    { step_id: 2, ingredient_id: 4, quantity: 1 },

    { step_id: 3, ingredient_id: 2, quantity: 2 },
    { step_id: 4, ingredient_id: 5, quantity: 1 },

    { step_id: 5, ingredient_id: 3, quantity: 1 },
    { step_id: 6, ingredient_id: 4, quantity: 1 },
];

const steps = [
    { step_text: 'Buy pizza', step_number: 1, recipe_id: 1 },
    { step_text: 'Buy beer', step_number: 2, recipe_id: 1 },

    { step_text: 'Buy doughnuts', step_number: 1, recipe_id: 2 },
    { step_text: 'Buy coffee', step_number: 2, recipe_id: 2 },

    { step_text: 'Buy big sandwich', step_number: 1, recipe_id: 3 },
    { step_text: 'Buy beer', step_number: 2, recipe_id: 3 },
];

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes);
    await knex('ingredients').insert(ingredients);
    await knex('steps').insert(steps);
    await knex('step_ingredients').insert(step_ingredients);
};
