
// // Side menu java script code //

// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

// // Side menu java script code //

// var sidemenu = document.getElementById("sidemenu");

// function openmenu() {
//   sidemenu.style.right = "0";
// }

// function closemenu() {
//   sidemenu.style.right = "-200px";
// }

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");

  // Handle multiple sections for "experience"
  if (tabname === "experience_tab") {
    document.getElementById("experience_tab").classList.add("active-tab");
    document.getElementById("experience_tab_2").classList.add("active-tab");
  } else {
    document.getElementById(tabname).classList.add("active-tab");
  }
}

// Side menu toggle functions
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}


// Script for contact form //

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  fetch("send_message.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Network response was not ok.");
    })
    .then(data => {
      alert(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to send message. Please try again later.");
    });
});

//project//


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}



function toggleMoreText(productNumber) {
  var mainText = document.getElementById("main-text" + productNumber);
  var moreText = document.getElementById("more-text" + productNumber);

  mainText.classList.toggle("collapsed");
  mainText.classList.toggle("expanded");
  moreText.classList.toggle("collapsed");
  moreText.classList.toggle("expanded");
}


/*--------Image Big-------*/


function toggleMoreText(productNumber) {
  var mainText = document.getElementById("main-text" + productNumber);
  var moreText = document.getElementById("more-text" + productNumber);

  mainText.classList.toggle("collapsed");
  mainText.classList.toggle("expanded");
  moreText.classList.toggle("collapsed");
  moreText.classList.toggle("expanded");
}

function toggleImage(imageSrc) {
  var largerImageContainer = document.getElementById('largerImageContainer');
  var largerImage = document.getElementById('largerImage');

  if (largerImageContainer.style.display === 'block') {

    largerImageContainer.style.display = 'none';
  } else {

    largerImage.src = imageSrc;
    largerImageContainer.style.display = 'block';
  }
}

// // Side menu JavaScript code
// var sidemenu = document.getElementById("sidemenu");

// function openmenu() {
//   sidemenu.style.right = "0";
// }

// function closemenu() {
//   sidemenu.style.right = "-200px";
// }

// // Tab switching functionality
// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(event, tabname) {
//   for (let tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (let tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

// // Contact form submission
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   event.preventDefault();
//   var formData = new FormData(this);

//   fetch("send_message.php", {
//       method: "POST",
//       body: formData
//     })
//     .then(response => response.ok ? response.text() : Promise.reject("Network response was not ok."))
//     .then(data => alert(data))
//     .catch(error => {
//       console.error("There was a problem with the fetch operation:", error);
//       alert("Failed to send message. Please try again later.");
//     });
// });

// // Toggle product description
// function toggleMoreText(productNumber) {
//   var mainText = document.getElementById("main-text" + productNumber);
//   var moreText = document.getElementById("more-text" + productNumber);

//   mainText.classList.toggle("collapsed");
//   mainText.classList.toggle("expanded");
//   moreText.classList.toggle("collapsed");
//   moreText.classList.toggle("expanded");
// }

// // Image preview functionality
// function toggleImage(imageSrc) {
//   var largerImageContainer = document.getElementById('largerImageContainer');
//   var largerImage = document.getElementById('largerImage');

//   if (largerImageContainer.style.display === 'block') {
//     largerImageContainer.style.display = 'none';
//   } else {
//     largerImage.src = imageSrc;
//     largerImageContainer.style.display = 'block';
//   }
// }
