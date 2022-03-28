/*
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var box5 = document.getElementById('box5')
var box6 = document.getElementById('box6')

box1.addEventListener("mouseenter", enter);
box1.addEventListener("mouseleave",leave);
function enter(){
    box1.style.backgroundColor="#2db6fa";
    box1.style.color="white";
}
function leave(){
    box1.style.backgroundColor="white";
    box1.style.color="black";
}


function toggleHide1(){
    let flush = document.getElementById('flush');
    if(flush.style.display === 'none'){
        flush.style.display = 'block';
    }
    else{
        flush.style.display='none';
    }    
    }

    var content1 = document.getElementById("app");
var content2 = document.getElementById("card");
var content3 = document.getElementById("web");

content1.addEventListener("click", showApp);
function showApp(){
    if(content1.style.display === 'none'){
        content1.style.display = 'block'
    }
    else{
        content1.style.display = 'none';
    }
}





function showApp(){
    let card= document.getElementById('card','web');
    if(card.style.display === 'none'){
        card.style.display = 'block'

    if(web.style.display === 'none'){
        web.style.display = 'block'
    }
    }
    else{
        card.style.display = 'none';
        web.style.display = 'none'
    }
}

function showCard(){
    let app= document.getElementById('app','web');
    if(app.style.display === 'none'){
        app.style.display = 'block'

    if(web.style.display === 'none'){
        web.style.display = 'block'
    }
    }
    else{
        app.style.display = 'none';
        web.style.display = 'none'
    }
}
*/
var item = document.getElementById("item");
item.addEventListener("click", onClick);
function onClick(){
item.style.backgroundColor="white";
}

// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });


  //logo slider//
  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});

//FAQ Dropdown

