// Gallery Name
const galleryName_input = document.querySelector('.body-gallery-name-input');
galleryName_input.addEventListener("focusin", function(){
    galleryName_input.style.setProperty('border-color', 'rgb(15, 129, 199)');
});
galleryName_input.addEventListener("focusout", function(){
    galleryName_input.style.setProperty('border-color', 'rgba(154, 170, 184, 1)');
});

// Paintings Section
const paintings_Section = document.getElementById('paintings-data-section');
// Floor Plan

const floor_plan = document.getElementById('dropdown');
const dropdown_items = document.getElementById('dropdown-item');
const icon_dropdown = document.querySelector('.body-chevron-down11');
const preview = document.getElementById('preview')

dropdown_items.style.display = 'none';
floor_plan.addEventListener('click',function(){
    if(dropdown_items.style.display === 'none'){
      // how to add settimeout?
      setTimeout(() => {
        dropdown_items.style.display = 'block';
      },110)

        icon_dropdown.src = "up-arrow-svgrepo-com.svg";
        paintings_Section.style.top = "85px";
        preview.style.height = '100px';
        preview.style.top = "270px";
        
    }else{
        dropdown_items.style.display = 'none';
        icon_dropdown.src = "public/external/arrow-down.svg"
        paintings_Section.style.top = "0px";
        preview.style.height = '200px';
        preview.style.top = "180px";
    }
    dropdown_items.classList.add('container-dropdown');

})

// Upload file section
const upload_file = document.querySelector('.body-frame135');
const file = document.getElementById('file');
const file_content = document.getElementById('file-content');

upload_file.style.cursor = "pointer";

upload_file.addEventListener('click', function() {
  file.click();
});

// Position ( Width & Height )

// For length and Width
const element = document.getElementById("myElement");
const elementLength = document.getElementById("myElementLength");
let isResizing = false;
let isResizingLength = false;
let startPosX, startWidth;
let startPosY, startHeight;
const inputWidth = document.getElementById("input-width");
const inputLength = document.getElementById("input-length");
element.addEventListener("mouseover", function () {
  element.style.cursor = "ns-resize"; 
  element.addEventListener("mousedown", function (e) {
    isResizing = true;
    startPosX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
    if (inputWidth.value !== "") {
      startWidth = parseInt(inputWidth.value, 10);
    } else {
      startWidth = 0;
    }
    element.style.cursor = "ns-resize"; 
  });
  
})

elementLength.addEventListener('mouseover',function(){
  elementLength.style.cursor = "ew-resize"; 
  elementLength.addEventListener("mousedown", function (e) {
    isResizingLength = true;
    startPosY = e.clientY;
    startHeight = parseInt(document.defaultView.getComputedStyle(elementLength).height, 10);
    if (inputLength.value !== "") {
      startHeight = parseInt(inputLength.value, 10);
    } else {
      startHeight = 0;
    }
    elementLength.style.cursor = "ew-resize"; 
  });  
  
})

document.addEventListener("mousemove", function (e) {
  if (isResizing) {
    let width = startWidth  + (e.clientX - startPosX);
    if (width >= 0) {
      inputWidth.value = width;
    }
  }

  if (isResizingLength) {
    let height = startHeight + ( startPosY - e.clientY );
    if (height >= 0) {
      inputLength.value = height;
    }
  }
});

document.addEventListener("mouseup", function () {
  isResizing = false;
  isResizingLength = false;
  element.style.cursor = "auto"; 
  elementLength.style.cursor = "auto";
});

const image = document.getElementById("myElement");
const imageLength = document.getElementById("myElementLength");

image.addEventListener("click", function () {
  let currentValue = parseInt(inputWidth.value, 10);
  inputWidth.value = currentValue + 1;
});

imageLength.addEventListener("click", function () {
  const currentValue = parseInt(inputLength.value, 10);
  inputLength.value = currentValue + 1;
});

image.addEventListener("wheel", function (e) {
  e.preventDefault();
  const delta = e.deltaY; 
  const currentValue = parseInt(inputWidth.value, 10);
  
  if (delta > 0) {
    // Scroll down, decrease width and Scroll up, increase width
    if (currentValue > 0) {
      inputWidth.value = currentValue - 1;
    }
  } else {
    inputWidth.value = currentValue + 1;
  }
});

imageLength.addEventListener("wheel", function (e) {
  e.preventDefault();
  const delta = e.deltaY; 
  const currentValue = parseInt(inputLength.value, 10);
     // Scroll down, decrease length and Scroll up, increase length
  if (delta > 0) {
    if (currentValue > 0) {
      inputLength.value = currentValue - 1;
    }
  } else {
    inputLength.value = currentValue + 1;
  }
});

// cm image to not be dragable 
  
const image1 = document.querySelector('.body-svg')
const image2 = document.querySelector('.body-svg1')
image1.style.pointerEvents = "none";
image1.style.userSelect = 'none';
image2.style.pointerEvents = "none";
image2.style.userSelect = 'none';



// Arrow for Wall

const walls = document.querySelectorAll('.walls');
const currentWall = document.querySelector('.body-text16');

const arrow_down_wall = document.querySelector('.arrow-container');
const test_Wall = document.querySelector('.test-wall')
arrow_down_wall.addEventListener('click', function(){
  if(test_Wall.style.display === "none"){
    test_Wall.style.display = "block"
    test_Wall.style.cursor = "pointer"
  }else{
    test_Wall.style.display = "none"
  }
})

 // Walls 

 for(let wall of walls){
   wall.addEventListener('click', () => {
    //  wall.style.cursor = "pointer";
     currentWall.textContent = wall.textContent
     test_Wall.style.display = "none";
   })
 }

// -------- Upload Images Section
let files;
let reader;
let fileSaved;
function handleFileSelect(event) {
  files = event.target.files;
  let file;


  for (let i = 0; i < files.length; i++) {
    file = files[i];
    fileSaved = file
    reader = new FileReader();
    // console.log(reader)
    

    reader.onload = function(e) {
      let container = document.createElement('div');
      container.classList.add('container-images');
      container.innerHTML = `
        <div style="position: relative;">
          <img src="${e.target.result}" class="uploaded-images" width="80" height="80" onclick="toggleCheckbox(this)"/>
          <input type="checkbox" style="position: absolute; bottom: 5px; right: 5px;" />
        </div>
      `;
      document.getElementById("preview").appendChild(container);
    };

    reader.readAsDataURL(file);
  }
}


function toggleCheckbox(image) {
  let checkbox = image.parentNode.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
}






  // ------------------
  

// Save Button

// function saveDatahere() {
//   let checkboxes = document.querySelectorAll('.container-images input[type="checkbox"]');
  
//   for (let i = 0; i < checkboxes.length; i++) {
//     let checkbox = checkboxes[i];
//     if (checkbox.checked) {
//       let imageContainer = checkbox.parentNode.parentNode;
//       let imgElement = imageContainer.querySelector('img');
//       imgElement.style.maxWidth = "100%";
//       imgElement.classList.add('images-rendered2');
//       document.getElementById("one").appendChild(imgElement.cloneNode());
//     }
//   }
// }




  // function saveDatahere() {
  //   let fileInput = document.getElementById("file");
  //   let file = fileInput.files[0];

  //   if (file) {
  //     let reader = new FileReader();

  //     reader.onload = function(e) {
  //       let imgElement = document.createElement("img");
  //       imgElement.src = e.target.result;
  //       imgElement.style.maxWidth = "100%";
  //       imgElement.classList.add('images-rendered2')
  //       document.getElementById("one").appendChild(imgElement);
  //     };

  //     reader.readAsDataURL(file);
  //     console.log(reader.readAsDataURL(file));
  //   }
  // }

  // Zoom in and Zoom out

  window.addEventListener("load", function() {
    let currentScale = 1;
    let imageElement = document.querySelector('#imageContainer img');
    let zoomInButton = document.getElementById("zoomInButton");
    let zoomOutButton = document.getElementById("zoomOutButton");

    zoomInButton.addEventListener("click", function() {
      currentScale += 0.1;
      updateImageScale();
    });

    zoomOutButton.addEventListener("click", function() {
      currentScale -= 0.1;
      updateImageScale();s
    });

    function updateImageScale() {
      if (imageElement) {
        imageElement.style.transform = `scale(${currentScale})`;
      }
    }
  });


  // Next and Previous function
  const WallTitle = document.querySelector('.body-text29');
  const wall_a1 = document.getElementById('wall-a1');
  const wall_1 = document.getElementById('wall-1');
  const body_wall1 = document.querySelector('.body-wall1');
  const wall_a2 = document.getElementById('wall-a2');
  const wall_2 = document.getElementById('wall-2');
  const wall_3 = document.getElementById('wall-3');
  const wall_a3 = document.getElementById('wall-a3');
  const wall_4 = document.getElementById('wall-4');
  const wall_a4 = document.getElementById('wall-a4');
  const wall_5 = document.getElementById('wall-5');
  const wall_a5 = document.getElementById('wall-a5');


  function next() {
    
    if(WallTitle.textContent.toLowerCase() === wall_a1.textContent.toLowerCase()){
      WallTitle.textContent = wall_a2.textContent;
      wall_a2.style.color = 'rgba(0, 0, 0, 1)';
      wall_2.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_1.style.backgroundColor = 'transparent';
      wall_1.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a1.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }else if(WallTitle.textContent.toLowerCase() === wall_a2.textContent.toLowerCase()){
      WallTitle.textContent = wall_a3.textContent;
      wall_a3.style.color = 'rgba(0, 0, 0, 1)';
      wall_3.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_2.style.backgroundColor = 'transparent';
      wall_2.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a2.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }else if(WallTitle.textContent.toLowerCase() === wall_a3.textContent.toLowerCase()){
      WallTitle.textContent = wall_a4.textContent;
      wall_a4.style.color = 'rgba(0, 0, 0, 1)';
      wall_4.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_3.style.backgroundColor = 'transparent';
      wall_3.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a3.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }else if(WallTitle.textContent.toLowerCase() === wall_a4.textContent.toLowerCase()){
      WallTitle.textContent = wall_a5.textContent;
      wall_a5.style.color = 'rgba(0, 0, 0, 1)';
      wall_5.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_4.style.backgroundColor = 'transparent';
      wall_4.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a4.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }else if(WallTitle.textContent.toLowerCase() === wall_a5.textContent.toLowerCase()){
      WallTitle.textContent = wall_a1.textContent;
      wall_a1.style.color = 'rgba(0, 0, 0, 1)';
      wall_1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_5.style.backgroundColor = 'transparent';
      wall_5.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a5.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }

  }


  function previous() {
    if(WallTitle.textContent.toLowerCase() === wall_a1.textContent.toLowerCase()){
      WallTitle.textContent = wall_a5.textContent;
      wall_a5.style.color = 'rgba(0, 0, 0, 1)';
      wall_5.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_1.style.backgroundColor = 'transparent';
      wall_1.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a1.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }else if(WallTitle.textContent.toLowerCase() === wall_a5.textContent.toLowerCase()){
      WallTitle.textContent = wall_a4.textContent;
      wall_a4.style.color = 'rgba(0, 0, 0, 1)';
      wall_4.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_5.style.backgroundColor = 'transparent';
      wall_5.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a5.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }else if(WallTitle.textContent.toLowerCase() === wall_a4.textContent.toLowerCase()){
      WallTitle.textContent = wall_a3.textContent;
      wall_a3.style.color = 'rgba(0, 0, 0, 1)';
      wall_3.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_4.style.backgroundColor = 'transparent';
      wall_4.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a4.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }else if(WallTitle.textContent.toLowerCase() === wall_a3.textContent.toLowerCase()){
      WallTitle.textContent = wall_a2.textContent;
      wall_a2.style.color = 'rgba(0, 0, 0, 1)';
      wall_2.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_3.style.backgroundColor = 'transparent';
      wall_3.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a3.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }else if(WallTitle.textContent.toLowerCase() === wall_a2.textContent.toLowerCase()){
      WallTitle.textContent = wall_a1.textContent;
      wall_a1.style.color = 'rgba(0, 0, 0, 1)';
      wall_1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      wall_2.style.backgroundColor = 'transparent';
      wall_2.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)';
      wall_a2.style.color = 'rgba(255, 255, 255, 0.4000000059604645)';
    }
  }

  const bodyWall = document.querySelectorAll('.bodyWall')
  for(let b of bodyWall){
    b.style.cursor = 'pointer'
  }
  const wallNumber = document.querySelectorAll('.wallNumber')



   function Walls(e) {
    WallTitle.textContent = e;
    for(let wall of bodyWall){
      wall.style.backgroundColor = 'transparent';
      wall.style.borderColor = 'rgba(255, 255, 255, 0.4000000059604645)'
      for(let i of wallNumber){
        i.style.color = 'rgba(255, 255, 255, 0.4000000059604645)'
      }
      // wallNumber.style.color = 'rgba(255, 255, 255, 0.4000000059604645)'
      // for(let wallText of wallNumber){
      //   wallText.style.color = 'rgba(255, 255, 255, 0.4000000059604645)'
      //   console.log(wallText)
      // }
  
      if(WallTitle.textContent === 'WALL 1'){
        wall_a1.style.color = 'rgba(0, 0, 0, 1)';
        wall_1.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      }else if(WallTitle.textContent === 'WALL 2'){
        wall_a2.style.color = 'rgba(0, 0, 0, 1)';
        wall_2.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      }else if(WallTitle.textContent === 'WALL 3') {
        wall_a3.style.color = 'rgba(0, 0, 0, 1)';
        wall_3.style.backgroundColor = 'rgba(255, 255, 255, 1)';

      }else if(WallTitle.textContent  === 'WALL 4') {
        wall_a4.style.color = 'rgba(0, 0, 0, 1)';
        wall_4.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      }else if(WallTitle.textContent === 'WALL 5') {
        wall_a5.style.color = 'rgba(0, 0, 0, 1)';
        wall_5.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      }
    }
    
    }



  // var currentIndex = 0;
  // var items = document.getElementsByClassName('item');

  // function previous() {
  //   if (currentIndex === 0) {
  //     currentIndex = items.length - 1;
  //   } else {
  //     currentIndex--;
  //   }
  //   updateDisplay();
  // }

  // function next() {
  //   if (currentIndex === items.length - 1) {
  //     currentIndex = 0;
  //   } else {
  //     currentIndex++;
  //   }
  //   updateDisplay();
  // }

  // function updateDisplay() {
  //   for (var i = 0; i < items.length; i++) {
  //     items[i].style.display = 'none';
  //   }
  //   items[currentIndex].style.display = 'block';
  // }


  // Wall next and prev buttons


  // const bodyWall = document.querySelectorAll('.bodyWall');
  // const wall_1 = document.getElementById('wall-1');
  // const wall_a1 = document.getElementById('wall-a1');
  // const wall_2 = document.getElementById('wall-2');
  // const wall_a2 = document.getElementById('wall-a2');
  // const wall_3 = document.getElementById('wall-3');
  // const wall_a3 = document.getElementById('wall-a3');
  // const wall_4 = document.getElementById('wall-4');
  // const wall_a4 = document.getElementById('wall-a4');
  // const wall_5 = document.getElementById('wall-5');
  // const wall_a5 = document.getElementById('wall-a5');
  // let bwall;
  // for(bwall of bodyWall){
  //   bwall.style.cursor = 'pointer';
  // }


  // }  

  // // wall_1.addEventListener('click',function(){
  // //   Walls('Wall 1');
  // // })


  function saveData() {
    let width = inputWidth.value;
    let length = inputLength.value;

    alert(`
    Name of Painting: ${galleryName_input.value}\n
    Height: ${length}cm\n
    Width : ${width}cm\n
    Wall: ${currentWall.textContent}
    Photo: ${fileSaved}`);

  }







  







