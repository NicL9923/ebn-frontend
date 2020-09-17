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
  let queryValues = [rb.title, rb.author, rb.datecreated, bodyTextPath, headerImagePath];

  let result;

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    result = results.rows;
  });
}

//Create podcast
const createPodcast = request => {
  let rb = request.body;
  
  let queryText = 'INSERT INTO podcasts VALUES ($1, $2, $3)';
  let queryValues = [rb.title, rb.datecreated, rb.pathtoaudiofile];

  //TODO: Create/store audio file here

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }
  });
}

//Create contact message
const createContactMsg = request => {
  let rb = request.body;
  
  let queryText = 'INSERT INTO contactmessages(subject, email, message, datecreated) VALUES ($1, $2, $3, $4)';
  let queryValues = [rb.subject, rb.email, rb.message, rb.datecreated];

  pool.query(queryText, queryValues, error => {
    if (error) {
      throw error;
    }
  });
}

//Get blog post
const getBlogPost = request => {
  let rb = request.body;
  
  //TODO: Add parameters (date range, etc.)
  let queryText = 'SELECT * from blogposts';
  //let queryValues = [rb.datecreated];
  let result;

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    result = results.rows;
  });
}

//Get podcast
const getPodcast = request => {
  let rb = request.body;
  
  //TODO: Add parameters (date range, etc.)
  let queryText = 'SELECT * from podcasts';
  //let queryValues = [rb.datecreated];
  let result;

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    result = results.rows;
  });
}

//Get contact message
const getContactMsg = request => {
  let rb = request.body;
  
  //TODO: Add parameters (date range, etc.)
  let queryText = 'SELECT * from contactmessages';
  //let queryValues = [rb.datecreated];
  let result;

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    result = results.rows;
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