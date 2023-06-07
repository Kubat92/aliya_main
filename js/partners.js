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