$(document).ready(() => {

 

$('#get-data').click((e)=>{

getAllDatabyTitle(e); 

})

 

});

 

let getAllDatabyTitle = (e) => {

 e.preventDefault();

    let movieTitle = $('#title').val();

 
 
$.ajax({

type: 'GET',

dataType: 'json',

async: true,

url: `https://www.omdbapi.com/?t=${movieTitle}&apikey=63baa213`,

success: (data) => {
if(data.Response == 'True') {
console.log(data)

            

            let tempRow = 

 

                            `<div class="container">

                             <div class="row">

                             <div class="card" style="width: 18rem;">

                             <img class="card-img-top" src="${data.Poster}" alt="Image not found" onerror="this.src='img/noImage.jpg';">

                             <div class="card-body">

                             <h5 class="card-title">${data.Title}</h5>

                             <p class="card-text">Plot - ${data.Plot}</p>

                             </div>

                             <ul class="list-group list-group-flush">

                             <li class="list-group-item">Released On - ${data.Released}</li>

                             <li class="list-group-item">Genre - ${data.Genre}</li>

                             <li class="list-group-item">Rating - ${data.imdbRating}</li>

                             </ul>

                             </div>

                             </div>

                             </div> `

 

             $("#showData").html(tempRow);
         } else {
         	let temp1 = `<div class="alert alert-danger"><strong>No Movie Found with Title: ${movieTitle}</div>`
			$("#showData").html(temp1);
         }

},

})

}
