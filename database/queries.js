var knex = require('./knex');

function getVisits(id) {
  return knex('visits').where({user_id: id});
}

function postVisit(body) {
  return knex('visits').insert({user_id: body.user_id, restaurant_id: body.restaurant_id });
}

// deleteVisit not in use because unsafe
function deleteVisit(body) {
  return knex('visits').where({id: id}).del();
}

module.exports = {
  getVisits,
  postVisit,
  deleteVisit
}
