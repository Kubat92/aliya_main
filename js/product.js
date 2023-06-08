
// const flourCategory = document.getElementById('flour');
// const aliyaCategory = document.getElementById('aliya');
// const kelinCategory = document.getElementById('kelin');
// const gulazykCategory = document.getElementById('gulazyk');

// let mediaQuery;
// let mediakuery;

// flourCategory.addEventListener('click', () => {
//   document.querySelector('.product_flour').style.display = 'block';
//   document.querySelector('.sort').style.display = 'flex';


//   document.querySelector('.pasta').style.display = 'none';
//   document.querySelector('.softWheat').style.display = 'none';
//   document.querySelector('.softWheat_kitlap').style.display = 'none';
//   document.querySelector('.wheat_img').style.display = 'none';
//   document.querySelector('.gulazyk').style.display = 'none';
//   document.querySelector('.kesme').style.display = 'none';
//   document.querySelector('.hardWheat').style.display = 'none';
//   document.querySelector('.macarons').style.display = 'none';
//   document.querySelector('.spaghetti_wrap').style.display = 'none';
//   document.querySelector('.hardWheat_img_pos').style.display = 'none';



//   const sortItem = document.getElementsByClassName('sort')[0];

//     function checkWidth(){
//     const screenWidth = window.innerWidth;

//     if (screenWidth < 600){
//         sortItem.style.display = 'block';
//     }else{
//         sortItem.style.display = 'flex';
//     }}

//     window.addEventListener('resize', checkWidth);
//      disableMediaQueries();
// });

// aliyaCategory.addEventListener('click', () => {
//   document.querySelector('.hardWheat').style.display = 'block';
//   document.querySelector('.pasta').style.display = 'block';
//   document.querySelector('.macarons').style.display = 'flex';
//   document.querySelector('.spaghetti_wrap').style.display = 'block';
//   document.querySelector('.product_wrapper').style.justifyContent = 'space-between';

//   document.querySelector('.product_flour').style.display = 'none';
//   document.querySelector('.softWheat').style.display = 'none';
//   document.querySelector('.softWheat_kitlap').style.display = 'none';
//   document.querySelector('.wheat_img').style.display = 'none';
//   document.querySelector('.gulazyk').style.display = 'none';
//   document.querySelector('.kesme').style.display = 'none';
//   document.querySelector('.sort').style.display = 'none';
//   document.querySelector('.flour_img').style.display = 'none';

//   disableMediaQueries();

//   mediaQuery = window.matchMedia('(max-width: 1200px)');
//   mediakuery = window.matchMedia('(max-width: 1000px)');

//   mediakuery.addEventListener('change', screenChange);
//   mediaQuery.addEventListener('change', handleScreenChange);

//   screenChange(mediakuery);
//   handleScreenChange(mediaQuery);
// });

// kelinCategory.addEventListener('click', () => {
//   const screenWidth = window.innerWidth;

//   document.querySelector('.softWheat').style.display = 'block';
//   document.querySelector('.pasta').style.display = 'block';
//   document.querySelector('.softWheat_kitlap').style.display = 'block';
//   document.querySelector('.product_wrapper').style.justifyContent = 'space-between';

//   document.querySelector('.macarons').style.display = 'none';
//   document.querySelector('.spaghetti_wrap').style.display = 'none';
//   document.querySelector('.hardWheat').style.display = 'none';
//   document.querySelector('.product_flour').style.display = 'none';
//   document.querySelector('.gulazyk').style.display = 'none';
//   document.querySelector('.kesme').style.display = 'none';
//   document.querySelector('.sort').style.display = 'none';
//   document.querySelector('.flour_img').style.display = 'none';

//   if (screenWidth > 1200) {
//     document.querySelector('.wheat_img').style.display = 'block';
//   } else {
//     document.querySelector('.wheat_img').style.display = 'none';
//   }

//   disableMediaQueries();
// });

// gulazykCategory.addEventListener('click', () => {
//   document.querySelector('.gulazyk').style.display = 'block';
//   document.querySelector('.kesme').style.display = 'flex';
//   document.querySelector('.pasta').style.display = 'block';
//   document.querySelector('.product_wrapper').style.justifyContent = 'space-between';

//   document.querySelector('.softWheat').style.display = 'none';
//   document.querySelector('.softWheat_kitlap').style.display = 'none';
//   document.querySelector('.macarons').style.display = 'none';
//   document.querySelector('.spaghetti_wrap').style.display = 'none';
//   document.querySelector('.hardWheat').style.display = 'none';
//   document.querySelector('.product_flour').style.display = 'none';
//   document.querySelector('.hardWheat_img_pos').style.display = 'none';
//   document.querySelector('.wheat_img').style.display = 'none';
//   document.querySelector('.sort').style.display = 'none';
//   document.querySelector('.flour_img').style.display = 'none';

//   disableMediaQueries();
// });

// function handleScreenChange(event) {
//   if (event.matches) {
//     document.querySelector('.hardWheat_img_pos').style.display = 'none';
//   } else {
//     document.querySelector('.hardWheat_img_pos').style.display = 'block';
//   }
// }

// function screenChange(event) {
//   if (event.matches) {
//     document.querySelector('.macarons').style.display = 'block';
//     document.querySelector('.lasagna').style.textAlign = 'center';
//   } else {
//     document.querySelector('.macarons').style.display = 'flex';
//   }
// }

// function disableMediaQueries() {
//   if (mediakuery) {
//     mediakuery.removeEventListener('change', screenChange);
//   }

//   if (mediaQuery) {
//     mediaQuery.removeEventListener('change', handleScreenChange);
//   }

//   document.querySelector('.hardWheat_img_pos').style.display = 'none';
//   document.querySelector('.macarons').style.display = 'none';
// }

// const wheatImg = document.getElementsByClassName('wheat_img')[0];

// function checkScreenWidth() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 1200) {
//     wheatImg.style.display = 'none';
//   }
// }

// window.addEventListener('load', checkScreenWidth);
// window.addEventListener('resize', checkScreenWidth);



const flourCategory = document.getElementById('flour');
const aliyaCategory = document.getElementById('aliya');
const kelinCategory = document.getElementById('kelin');
const gulazykCategory = document.getElementById('gulazyk');

let mediaQuery;
let mediakuery;

flourCategory.addEventListener('click', () => {
  document.querySelector('.product_flour').style.display = 'block';
  document.querySelector('.sort').style.display = 'flex';

  document.querySelector('.pasta').style.display = 'none';
  document.querySelector('.softWheat').style.display = 'none';
  document.querySelector('.softWheat_kitlap').style.display = 'none';
  document.querySelector('.wheat_img').style.display = 'none';
  document.querySelector('.gulazyk').style.display = 'none';
  document.querySelector('.kesme').style.display = 'none';
  document.querySelector('.hardWheat').style.display = 'none';
  document.querySelector('.macarons').style.display = 'none';
  document.querySelector('.spaghetti_wrap').style.display = 'none';
  document.querySelector('.hardWheat_img_pos').style.display = 'none';

  const sortItem = document.getElementsByClassName('sort')[0];

  function checkWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
      sortItem.style.display = 'block';
    } else {
      sortItem.style.display = 'flex';
    }
  }

  window.addEventListener('resize', checkWidth);
  disableMediaQueries();
});

aliyaCategory.addEventListener('click', () => {
  document.querySelector('.hardWheat').style.display = 'block';
  document.querySelector('.pasta').style.display = 'block';
  document.querySelector('.macarons').style.display = 'flex';
  document.querySelector('.spaghetti_wrap').style.display = 'block';
  document.querySelector('.product_wrapper').style.justifyContent = 'space-between';

  document.querySelector('.product_flour').style.display = 'none';
  document.querySelector('.softWheat').style.display = 'none';
  document.querySelector('.softWheat_kitlap').style.display = 'none';
  document.querySelector('.wheat_img').style.display = 'none';
  document.querySelector('.gulazyk').style.display = 'none';
  document.querySelector('.kesme').style.display = 'none';
  document.querySelector('.sort').style.display = 'none';
  document.querySelector('.flour_img').style.display = 'none';

  disableMediaQueries();

  mediaQuery = window.matchMedia('(max-width: 1200px)');
  mediakuery = window.matchMedia('(max-width: 1000px)');

  mediakuery.addEventListener('change', screenChange);
  mediaQuery.addEventListener('change', handleScreenChange);

  screenChange(mediakuery);
  handleScreenChange(mediaQuery);
});

kelinCategory.addEventListener('click', () => {
  const screenWidth = window.innerWidth;

  document.querySelector('.softWheat').style.display = 'block';
  document.querySelector('.pasta').style.display = 'block';
  document.querySelector('.softWheat_kitlap').style.display = 'block';
  document.querySelector('.product_wrapper').style.justifyContent = 'space-between';

  document.querySelector('.macarons').style.display = 'none';
  document.querySelector('.spaghetti_wrap').style.display = 'none';
  document.querySelector('.hardWheat').style.display = 'none';
  document.querySelector('.product_flour').style.display = 'none';
  document.querySelector('.gulazyk').style.display = 'none';
  document.querySelector('.kesme').style.display = 'none';
  document.querySelector('.sort').style.display = 'none';
  document.querySelector('.flour_img').style.display = 'none';

  if (screenWidth > 1200) {
    document.querySelector('.wheat_img').style.display = 'block';
  } else {
    document.querySelector('.wheat_img').style.display = 'none';
  }

  disableMediaQueries();
});

gulazykCategory.addEventListener('click', () => {
  document.querySelector('.gulazyk').style.display = 'block';
  document.querySelector('.kesme').style.display = 'flex';
  document.querySelector('.pasta').style.display = 'block';
  document.querySelector('.product_wrapper').style.justifyContent = 'space-between';

  document.querySelector('.softWheat').style.display = 'none';
  document.querySelector('.softWheat_kitlap').style.display = 'none';
  document.querySelector('.macarons').style.display = 'none';
  document.querySelector('.spaghetti_wrap').style.display = 'none';
  document.querySelector('.hardWheat').style.display = 'none';
  document.querySelector('.product_flour').style.display = 'none';
  document.querySelector('.hardWheat_img_pos').style.display = 'none';
  document.querySelector('.wheat_img').style.display = 'none';
  document.querySelector('.sort').style.display = 'none';
  document.querySelector('.flour_img').style.display = 'none';

  disableMediaQueries();
});

function handleScreenChange(event) {
  if (event.matches) {
    document.querySelector('.hardWheat_img_pos').style.display = 'none';
  } else {
    document.querySelector('.hardWheat_img_pos').style.display = 'block';
  }
}

function screenChange(event) {
  if (event.matches) {
    document.querySelector('.macarons').style.display = 'block';
    document.querySelector('.lasagna').style.textAlign = 'center';
  } else {
    document.querySelector('.macarons').style.display = 'flex';
  }
}

function disableMediaQueries() {
  if (mediakuery) {
    mediakuery.removeEventListener('change', screenChange);
  }

  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleScreenChange);
  }

  document.querySelector('.hardWheat_img_pos').style.display = 'none';
  document.querySelector('.macarons').style.display = 'none';
}

const wheatImg = document.getElementsByClassName('wheat_img')[0];

function checkScreenWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1200) {
    wheatImg.style.display = 'none';
  }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

const selectedProduct = localStorage.getItem('selectedProduct');

if (selectedProduct === '1') {
  document.querySelector('.product_flour').style.display = 'block';
  document.querySelector('.sort').style.display = 'flex';

  document.querySelector('.pasta').style.display = 'none';
  document.querySelector('.softWheat').style.display = 'none';
  document.querySelector('.softWheat_kitlap').style.display = 'none';
  document.querySelector('.wheat_img').style.display = 'none';
  document.querySelector('.gulazyk').style.display = 'none';
  document.querySelector('.kesme').style.display = 'none';
  document.querySelector('.hardWheat').style.display = 'none';
  document.querySelector('.macarons').style.display = 'none';
  document.querySelector('.spaghetti_wrap').style.display = 'none';
  document.querySelector('.hardWheat_img_pos').style.display = 'none';
  const sortItem = document.getElementsByClassName('sort')[0];

  function checkWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
      sortItem.style.display = 'block';
    } else {
      sortItem.style.display = 'flex';
    }
  }

  window.addEventListener('resize', checkWidth);
  disableMediaQueries();

} else if (selectedProduct === '2') {

  document.querySelector('.hardWheat').style.display = 'block';
  document.querySelector('.pasta').style.display = 'block';
  document.querySelector('.macarons').style.display = 'flex';
  document.querySelector('.spaghetti_wrap').style.display = 'block';
  document.querySelector('.product_wrapper').style.justifyContent = 'space-between';

  document.querySelector('.product_flour').style.display = 'none';
  document.querySelector('.softWheat').style.display = 'none';
  document.querySelector('.softWheat_kitlap').style.display = 'none';
  document.querySelector('.wheat_img').style.display = 'none';
  document.querySelector('.gulazyk').style.display = 'none';
  document.querySelector('.kesme').style.display = 'none';
  document.querySelector('.sort').style.display = 'none';
  document.querySelector('.flour_img').style.display = 'none';

  disableMediaQueries();

  mediaQuery = window.matchMedia('(max-width: 1200px)');
  mediakuery = window.matchMedia('(max-width: 1000px)');

  mediakuery.addEventListener('change', screenChange);
  mediaQuery.addEventListener('change', handleScreenChange);

  screenChange(mediakuery);
  handleScreenChange(mediaQuery);

}else if (selectedProduct === '3'){

  const screenWidth = window.innerWidth;

  document.querySelector('.softWheat').style.display = 'block';
  document.querySelector('.pasta').style.display = 'block';
  document.querySelector('.softWheat_kitlap').style.display = 'block';
  document.querySelector('.product_wrapper').style.justifyContent = 'space-between';

  document.querySelector('.macarons').style.display = 'none';
  document.querySelector('.spaghetti_wrap').style.display = 'none';
  document.querySelector('.hardWheat').style.display = 'none';
  document.querySelector('.product_flour').style.display = 'none';
  document.querySelector('.gulazyk').style.display = 'none';
  document.querySelector('.kesme').style.display = 'none';
  document.querySelector('.sort').style.display = 'none';
  document.querySelector('.flour_img').style.display = 'none';

  if (screenWidth > 1200) {
    document.querySelector('.wheat_img').style.display = 'block';
  } else {
    document.querySelector('.wheat_img').style.display = 'none';
  }

  disableMediaQueries();

}

