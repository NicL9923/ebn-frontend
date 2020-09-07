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
const createBlogPost = (request, response) => {
  let rb = request.body;
  
  let queryText = 'INSERT INTO blogposts VALUES ($1, $2, $3, $4, $5)';
  let queryValues = [rb.title, rb.author, rb.datecreated, rb.pathtobodyfile, rb.pathtoimagefile];

  //TODO: Create/store body text and image files here

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Create podcast
const createPodcast = (request, response) => {
  let rb = request.body;
  
  let queryText = 'INSERT INTO podcasts VALUES ($1, $2, $3)';
  let queryValues = [rb.title, rb.datecreated, rb.pathtoaudiofile];

  //TODO: Create/store audio file here

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Create contact message
const createContactMsg = (request, response) => {
  let rb = request.body;
  
  let queryText = 'INSERT INTO contactmessages(subject, email, message, datecreated) VALUES ($1, $2, $3, $4)';
  let queryValues = [rb.subject, rb.email, rb.message, rb.datecreated];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Get blog post
const getBlogPost = (request, response) => {
  let rb = request.body;
  
  //TODO: Add parameters (date range, etc.)
  let queryText = 'SELECT * from blogposts';
  //let queryValues = [rb.datecreated];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Get podcast
const getPodcast = (request, response) => {
  let rb = request.body;
  
  //TODO: Add parameters (date range, etc.)
  let queryText = 'SELECT * from podcasts';
  //let queryValues = [rb.datecreated];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Get contact message
const getContactMsg = (request, response) => {
  let rb = request.body;
  
  //TODO: Add parameters (date range, etc.)
  let queryText = 'SELECT * from contactmessages';
  //let queryValues = [rb.datecreated];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Update blog post **TODO**
const updateBlogPost = (request, response) => {
  let rb = request.body;
  
  //TODO: Make query and add necessary parameters (do by ID or?)
  let queryText = 'SELECT * from podcasts';
  //let queryValues = [rb.datecreated];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Delete blog post
const deleteBlogPost = (request, response) => {
  let rb = request.body;
  
  //TODO: Verify parameter usage/functionality
  let queryText = 'DELETE FROM blogposts WHERE id = $1';
  let queryValues = [rb.id];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Delete podcast
const deletePodcast = (request, response) => {
  let rb = request.body;
  
  //TODO: Verify parameter usage/functionality
  let queryText = 'DELETE FROM podcasts WHERE id = $1';
  let queryValues = [rb.id];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
}

//Delete contact message
const deleteContactMsg = (request, response) => {
  let rb = request.body;
  
  //TODO: Verify parameter usage/functionality
  let queryText = 'DELETE FROM contactmessages WHERE id = $1';
  let queryValues = [rb.id];

  pool.query(queryText, queryValues, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
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