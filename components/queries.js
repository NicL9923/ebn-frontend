/* queries.js - handles queries to PostgresSQL database */
require('dotenv').config();
const Pool = require('pg').Pool;

// TODO: For production, move sensitive info to .env file
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});


//Create blog post
const createBlogPost = (request, bodyTextPath, headerImagePath = null) => {
  let rb = request.body;
  
  let queryText = 'INSERT INTO blogposts VALUES ($1, $2, $3, $4, $5)';
  let queryValues = [rb.title, rb.author, rb.dateCreated, bodyTextPath, headerImagePath];

  let result;

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    result = results.rows;
  });
}

//Create podcast
const createPodcast = (title, dateCreated, audioFilePath) => {
  let queryText = 'INSERT INTO podcasts VALUES ($1, $2, $3)';
  let queryValues = [title, new Date(dateCreated), audioFilePath];

  let result;

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    result = results.rows;
  });
}

//Create contact message
const createContactMsg = request => {
  let rb = request.body;
  
  let queryText = 'INSERT INTO contactmessages(subject, email, message, datecreated) VALUES ($1, $2, $3, $4)';
  let queryValues = [rb.subject, rb.email, rb.message, rb.dateCreated];

  pool.query(queryText, queryValues, error => {
    if (error) {
      throw error;
    }
  });
}

//Get blog post
const getBlogPost = queryParams => {
  return new Promise((resolve, reject) => {
    let queryText, queryValues;

    if (queryParams.id) {
      //Return a single post by ID
      queryText = 'SELECT * FROM blogposts WHERE id = $1 ORDER BY datecreated DESC';
      queryValues = [queryParams.id];
    }
    else if (queryParams.startDate) {
      //Return posts between startDate and endDate
      if (!queryParams.endDate) reject("Error: " + error);
      queryText = 'SELECT * FROM blogposts WHERE datecreated >= $1 AND datecreated <= $2 ORDER BY datecreated DESC';
      queryValues = [queryParams.startDate, queryParams.endDate];
    }
    else {
      //Return all posts, ordered by date (soonest to oldest)
      queryText = 'SELECT * FROM blogposts ORDER BY datecreated DESC';
    }

    pool.query(queryText, queryValues, (error, results) => {
      if (error) reject("Error: " + error);

      resolve(results.rows);
    });
  });
}

//Get podcast
const getPodcast = queryParams => {
  return new Promise((resolve, reject) => {
    let queryText, queryValues;

    if (queryParams.id) {
      //Return a single podcast by ID
      queryText = 'SELECT * FROM podcasts WHERE id = $1 ORDER BY datecreated DESC';
      queryValues = [queryParams.id];
    }
    else if (queryParams.startDate) {
      //Return podcasts between startDate and endDate
      if (!queryParams.endDate) reject("Error: " + error);
      queryText = 'SELECT * FROM podcasts WHERE datecreated >= $1 AND datecreated <= $2 ORDER BY datecreated DESC';
      queryValues = [queryParams.startDate, queryParams.endDate];
    }
    else {
      //Return all podcasts, ordered by date (soonest to oldest)
      queryText = 'SELECT * FROM podcasts ORDER BY datecreated DESC';
    }

    pool.query(queryText, queryValues, (error, results) => {
      if (error) reject("Error: " + error);

      resolve(results.rows);
    });
  });
}

//Get contact message
const getContactMsg = queryParams => {
  return new Promise((resolve, reject) => {
    let queryText, queryValues;

    if (queryParams.id) {
      //Return a single podcast by ID
      queryText = 'SELECT * FROM contactmessages WHERE id = $1 ORDER BY datecreated DESC';
      queryValues = [queryParams.id];
    }
    else if (queryParams.startDate) {
      //Return podcasts between startDate and endDate
      if (!queryParams.endDate) reject("Error: " + error);
      queryText = 'SELECT * FROM contactmessages WHERE datecreated >= $1 AND datecreated <= $2 ORDER BY datecreated DESC';
      queryValues = [queryParams.startDate, queryParams.endDate];
    }
    else {
      //Return all podcasts, ordered by date (soonest to oldest)
      queryText = 'SELECT * FROM contactmessages ORDER BY datecreated DESC';
    }

    pool.query(queryText, queryValues, (error, results) => {
      if (error) reject("Error: " + error);
  
      resolve(results.rows);
    });
  });
}

//Update blog post
const updateBlogPost = request => {
  let rb = request.body;
  
  //TODO: Make query and add necessary parameters (do by ID or?)
  let queryText = 'SELECT * from podcasts';
  //let queryValues = [rb.datecreated];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }
  });
}

//Delete blog post
const deleteBlogPost = request => {
  let rb = request.body;
  
  //TODO: Verify parameter usage/functionality
  let queryText = 'DELETE FROM blogposts WHERE id = $1';
  let queryValues = [rb.id];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }
  });
}

//Delete podcast
const deletePodcast = request => {
  let rb = request.body;
  
  //TODO: Verify parameter usage/functionality
  let queryText = 'DELETE FROM podcasts WHERE id = $1';
  let queryValues = [rb.id];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }
  });
}

//Delete contact message
const deleteContactMsg = request => {
  let rb = request.body;
  
  //TODO: Verify parameter usage/functionality
  let queryText = 'DELETE FROM contactmessages WHERE id = $1';
  let queryValues = [rb.id];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }
  });
}

module.exports = {
    createBlogPost,
    createPodcast,
    createContactMsg,
    getBlogPost,
    getPodcast,
    getContactMsg,
    updateBlogPost,
    deleteBlogPost,
    deletePodcast,
    deleteContactMsg
}