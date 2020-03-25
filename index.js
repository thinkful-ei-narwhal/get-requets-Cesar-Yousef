'use strict';

function getDogImage(input) {
  console.log(`https://dog.ceo/api/breeds/image/random/${input}`);
  fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  let messageArr= []
  responseJson.message.forEach(event=>{
    messageArr.push(`<img src="${event}" class="results-img">`);
  });
  messageArr= messageArr.join('');
  $('.results').htm(`${messageArr}`);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage($('input').val());
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});