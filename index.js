'use strict';

function getDogImage(input,breed) {
  console.log(input);
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${input}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('The breed is not found. Try again later'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  
  let imgArr= [];
    responseJson.message.forEach(event=>{
        imgArr.push(`<img src="${event}" class="results-img">`);
  });

  $('.results').html(`${imgArr.join('')}`);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage($('.numuber-dog-entry').val(),$('.breed-dog-entry').val());
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});