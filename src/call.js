// import fetch from 'node-fetch';
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

// const express = require('express');
// const app = express();
// const cors = require('cors');
// require('dotenv').config();

const search = (title) => {
  const result = getBook(title);
  return result;
};

const createResults = (success) => {
  // console.log(success.items[0]);
  let results = []
  success.items.forEach(element => {
    const result = element.volumeInfo;
    // console.log(result['title']);
    const covers = result.imageLinks;
    let cover = '';
    if (covers !== undefined) {
      cover = covers.thumbnail;
    }
    const resultObj = {
      title: result['title'],
      author: result['authors'],
      pageCount: result['pageCount'],
      publishedDate: result.publishedDate,
      cover: cover,
      // these two for display purposes only
      description: result.description,
      previewLink: result.previewLink
    };
    // console.log(resultObj);
    results.push(resultObj)
    // console.log(results);
  });

  // console.log(results);
  return results
};

const getBook = async (title) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.BOOK_API}&language=en`);
  let data = await response.json();

  return createResults(data);
}

// let pachinko = await search('pachinko');
// console.log(pachinko);
export default search;
