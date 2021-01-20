// write your code here

// ****************** GRAB elements  ***************

const detailCard = document.querySelector('#spice-blend-detail')



// ****************** FETCH requests ***************

function initialize() { 
   fetch('http://localhost:3000/spiceblends')
      .then(response => response.json())
      .then(allSpiceBlends => {
         allSpiceBlends.forEach(singleObj => renderSpiceBlend(singleObj))
      })
}

initialize()

// ****************** RENDERING functions ***************

function renderSpiceBlend(singleObj) {
   const spiceBlendContainer = document.createElement('div')
   spiceBlendContainer.classList.add('spice-container')
   const spiceBlendDetail = document.querySelector('#spice-blend-detail')
   spiceBlendContainer.append(spiceBlendDetail)
   spiceBlendContainer.innerHTML +=
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


