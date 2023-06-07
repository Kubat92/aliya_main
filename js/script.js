var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        970: {
            slidesPerView: 3,
        },
    },
});

ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [42.875969, 74.603701],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), { 
            balloonContent: `
                <div class='balloon'>
                    <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                    <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                    <span class='balloon_text_under'>город адрес</span>
                    <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
                </div>
            `,
        }, {
            iconLayout: 'default#image',
            iconImageSize: [40, 42],
            iconImageOffset: [-5, -38]
        }),
        myPlacemark2 = new ymaps.Placemark([42.520755, 72.250591], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        
        myPlacemark3 = new ymaps.Placemark([40.517525, 72.805570], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        
        myPlacemark4 = new ymaps.Placemark([42.819791, 73.844014], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark5 = new ymaps.Placemark([42.837485, 75.295116], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark6 = new ymaps.Placemark([42.460002, 76.174585], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark7 = new ymaps.Placemark([42.491144, 78.399568], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark8 = new ymaps.Placemark([42.649742, 77.085755], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark9 = new ymaps.Placemark([42.215922, 75.755377], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark10 = new ymaps.Placemark([41.428296, 75.997626], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark11 = new ymaps.Placemark([41.871844, 72.937748], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark12 = new ymaps.Placemark([41.631317, 72.671784], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark13 = new ymaps.Placemark([41.489582, 71.753993], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark14 = new ymaps.Placemark([40.938049, 72.993309], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark15 = new ymaps.Placemark([40.770311, 73.299320], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark16 = new ymaps.Placemark([40.258358, 72.122303], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark17 = new ymaps.Placemark([43.273564, 76.914851], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark18 = new ymaps.Placemark([51.128201, 71.430429], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark19 = new ymaps.Placemark([42.315521, 69.586942], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark20 = new ymaps.Placemark([50.300377, 57.154555], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark21 = new ymaps.Placemark([49.807760, 73.088504], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark22 = new ymaps.Placemark([42.899664, 71.392727], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark23 = new ymaps.Placemark([50.404976, 80.249235], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark24 = new ymaps.Placemark([41.311151, 69.279737], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark25 = new ymaps.Placemark([53.346785, 83.776856], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark26 = new ymaps.Placemark([55.755864, 37.617698], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myPlacemark27 = new ymaps.Placemark([40.783388, 72.350672], {
            balloonContent: `
            <div class='balloon'>
                <span class='balloon_text'>Название субъекта: <b>wawdawd</b></span>
                <span class='balloon_text'>Название объекта: <b>wadwadwa</b></span>
                <span class='balloon_text_under'>город адрес</span>
                <a href='#' class='balloon_link'>Перейти на страницу объекта</a>
            </div>
        `
        }, {
            iconLayout: 'default#image',
        })
        myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8)
        .add(myPlacemark9)
        .add(myPlacemark10) 
        .add(myPlacemark11)      
        .add(myPlacemark12)
        .add(myPlacemark13)
        .add(myPlacemark14)
        .add(myPlacemark15)
        .add(myPlacemark16)
        .add(myPlacemark17)
        .add(myPlacemark18)
        .add(myPlacemark19)
        .add(myPlacemark20)
        .add(myPlacemark21)
        .add(myPlacemark22)
        .add(myPlacemark23)
        .add(myPlacemark24)
        .add(myPlacemark25)
        .add(myPlacemark26)
        .add(myPlacemark27)
});


