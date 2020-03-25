'use strict';

function getDogImage(input,breed) {
  console.log(input);
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/image/random/${input}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.log('Something went wrong. Try again later',error));
}


function displayResults(responseJson) {
  console.log(responseJson);
  
  let imgArr= [];
  //console.log(responseJson.status);
    responseJson.message.forEach(event=>{
        imgArr.push(`<img src="${event}" class="results-img">`);
  });

//   let statusArr= [];
//   responseJson.status.forEach(event=>{
//     console.log(event);
//     statusArr.push(`<p>${event}</p>`);
// });

// let messageArr=statusArr.join('');

//     let messageArr= [];
//     for(i=0;i<statusArr.length;i++){
//     messageArr.push(imgArr[i]);
//     messageArr.push(statusArr[i]);
// }
    let messageArr= imgArr.join('');


  $('.results').html(`${messageArr}`);

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