// write your code here

// ****************** GRAB elements  ***************

const detailCard = document.querySelector('#spice-blend-detail')



// ****************** FETCH requests ***************

function initialize() { 
   fetch('http://localhost:3000/spiceblends')
      .then(response => response.json())
      .then(getAllSpiceBlends)
}

initialize()

// ****************** RENDERING functions ***************

function renderAllSpiceBlends(singleObj) {
   // console.log(singleObj)
   const detailContainer = document.createElement('div')
   detailContainer.classList.add('all-spice-blends')
   
   detailContainer.innerHTML += 
      `<div id="spice-blend-detail" data-id='${singleObj.id}'>
         <img class="detail-image" src="${singleObj.image}" alt="${singleObj.title}" />
         <h2 class="title">${singleObj.title}</h2>

         <div class="ingredients-container">
         <h4>Ingredients:</h4>
         <ul class="ingredients-list">
            <!-- Add Spice Blend Ingredients Here -->
         </ul>
         </div>
      </div>`
}


function getAllSpiceBlends(spiceBlendObjects) {
   spiceBlendObjects.forEach(function(singleObj){
      renderAllSpiceBlends(singleObj)
   })
}


