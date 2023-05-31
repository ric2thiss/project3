// Gallery Name
const galleryName_input = document.querySelector('.body-gallery-name-input');
galleryName_input.addEventListener("focusin", function(){
    galleryName_input.style.setProperty('border-color', 'rgb(15, 129, 199)');
});
galleryName_input.addEventListener("focusout", function(){
    galleryName_input.style.setProperty('border-color', 'rgba(154, 170, 184, 1)');
});

// Floor Plan
const floor_plan = document.getElementById('dropdown');
const dropdown_items = document.getElementById('dropdown-item');
const icon_dropdown = document.querySelector('.body-chevron-down11');

dropdown_items.style.display = 'none';
floor_plan.addEventListener('click',function(){
    if(dropdown_items.style.display === 'none'){
        dropdown_items.style.display = 'block';
        icon_dropdown.src = "up-arrow-svgrepo-com.svg";
    }else{
        dropdown_items.style.display = 'none';
        icon_dropdown.src = "public/external/arrow-down.svg"
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

file.addEventListener('change', function() {
  file_content.textContent = file.value.split('\\').pop(); // Extract the filename from the full file path
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
  
const image1 = document.querySelector('.body-svg1')
const image2 = document.querySelector('.body-svg')
image1.style.pointerEvents = "none";
image2.style.pointerEvents = "none";
// const height_container = document.querySelector('.body-text06');
// height_container.style.pointerEvents = "none";



// Arrow for Wall

const arrow_down_wall = document.querySelector('.arrow-container');
const test_Wall = document.querySelector('.test-wall')
arrow_down_wall.addEventListener('click', function(){
  if(test_Wall.style.display === "none"){
    test_Wall.style.display = "block"
  }else{
    test_Wall.style.display = "none"
  }
})

//  The Data that Saved 

// function saveData() {
//     let width = inputWidth.value;
//     let length = inputLength.value;
//     // let nameofPaint = input_text.value;
//     // let description = input_description.value;
//     alert(`Name of Painting: ${galleryName_input.value}\n Height: ${length}cm\n Width : ${width}cm\n Photo: ${file_content.value}`);

//   }

  // function deleteData() {
  //   const confirmDelete = confirm("Are you sure you want to delete?");
  //   if (confirmDelete) {
  //     alert("Deleted");
  //   }
  // }


  // Render Image upon selecting in my computer
  function handleFileSelect(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
  
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
  
  function toggleCheckbox(image) {
    let checkbox = image.parentNode.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
  }
  

// Save Button
  function saveDatahere() {
    let fileInput = document.getElementById("file");
    let file = fileInput.files[0];

    if (file) {
      let reader = new FileReader();

      reader.onload = function(e) {
        let imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        imgElement.style.maxWidth = "100%";
        imgElement.classList.add('images-rendered2')
        document.getElementById("one").appendChild(imgElement);
      };

      reader.readAsDataURL(file);
      console.log(reader.readAsDataURL(file));
    }
  }

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
      updateImageScale();
    });

    function updateImageScale() {
      if (imageElement) {
        imageElement.style.transform = `scale(${currentScale})`;
      }
    }
  });


  // Next and Previous function

  var currentIndex = 0;
  var items = document.getElementsByClassName('item');

  function previous() {
    if (currentIndex === 0) {
      currentIndex = items.length - 1;
    } else {
      currentIndex--;
    }
    updateDisplay();
  }

  function next() {
    if (currentIndex === items.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateDisplay();
  }

  function updateDisplay() {
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
    items[currentIndex].style.display = 'block';
  }


  // Walls 

  const walls = document.querySelectorAll('.walls');
  const currentWall = document.querySelector('.body-text16');
  console.log(currentWall)

  for(let wall of walls){
    wall.addEventListener('click', () => {
      wall.style.cursor = "pointer";
      currentWall.textContent = wall.textContent
    })
  }




  







