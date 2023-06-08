let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let partner1 = document.getElementById('partners_right1');
let partner2 = document.getElementById('partners_right2');

btn1.addEventListener('click', function() {
  partner1.style.display = 'block';
  partner2.style.display = 'none';
});

btn2.addEventListener('click', function() {
  partner1.style.display = 'none';
  partner2.style.display = 'block';
});


// function selectPart(partNumber) {
//   if (partNumber === 1) {
//       document.getElementById("partners_right1").style.display = "block";
//       document.getElementById("partners_right2").style.display = "none";
//   } else if (partNumber === 2) {
//       document.getElementById("partners_right1").style.display = "none";
//       document.getElementById("partners_right2").style.display = "block";
//   }
// }

function selectPart(partNumber) {
  localStorage.setItem('selectedPart', partNumber);
}

window.onload = function() {
  var selectedPart = localStorage.getItem('selectedPart');
  
  if (selectedPart === '1') {
      document.getElementById("partners_right1").style.display = "block";
      document.getElementById("partners_right2").style.display = "none";
  } else if (selectedPart === '2') {
      document.getElementById("partners_right1").style.display = "none";
      document.getElementById("partners_right2").style.display = "block";
  }
};