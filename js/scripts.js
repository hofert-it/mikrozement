/* Parsing UTM */

function getURLParameter(name) {return decodeURI((RegExp(name + '=' + '(.*?)(&|$)').exec(location.search)||[,null])[1] || '');}

var utm_source = getURLParameter('utm_source');
var utm_medium = getURLParameter('utm_medium');
var utm_campaign = getURLParameter('utm_campaign');
var utm_content = getURLParameter('utm_content');
var utm_term = getURLParameter('utm_term');

if ($.cookie('utm_source') == undefined) {

  if (utm_source !== '') {

    $.cookie('utm_source', utm_source, { expires: 365 });
    $.cookie('utm_medium', utm_medium, { expires: 365 });
    $.cookie('utm_campaign', utm_campaign, { expires: 365 });
    $.cookie('utm_content', utm_content, { expires: 365 });
    $.cookie('utm_term', utm_term, { expires: 365 });

    $(".utm_source").val($.cookie('utm_source'));
    $(".utm_medium").val($.cookie('utm_medium'));
    $(".utm_campaign").val($.cookie('utm_campaign'));
    $(".utm_content").val($.cookie('utm_content'));
    $(".utm_term").val($.cookie('utm_term'));

  }   

}
else {

  $(".utm_source").val($.cookie('utm_source'));
  $(".utm_medium").val($.cookie('utm_medium'));
  $(".utm_campaign").val($.cookie('utm_campaign'));
  $(".utm_content").val($.cookie('utm_content'));
  $(".utm_term").val($.cookie('utm_term')); 

}

/* Parsing Referrer */

var referrer_f = document.referrer;
if (referrer_f !== '') {
  var referrer_domain = new URL(referrer_f).hostname;
}

if ($.cookie('referrer_domain') == undefined) {
  if (referrer_domain !== '') {
    $.cookie('referrer_domain', referrer_domain, { expires: 365 });
    $(".referrer").val($.cookie('referrer_domain'));
  }
}
else{
  $(".referrer").val($.cookie('referrer_domain'));
}

// Popup Close Consult
$('.popup-head-close-consult, .popup-consult').click(function(e) { 
    e.preventDefault();
    $('.popup-consult').animate({opacity: 0}, 300, "linear", function(){
        $('.popup-consult').css({'display' : 'none'});
    });
});          

$('.popup').click(function (e) {
  e.stopPropagation();
});
          
// Popup Open Consult
$('.first-button').click(function() {
    $('.popup-consult').css({'display' : 'flex'});
    $('.popup-consult').animate({'opacity' : '1'}, 300);
});

// Timer Popup Open Func
// function popupTimerOpen() {
//         $('.popup-consult').css({'display' : 'flex'});
//         $('.popup-consult').animate({'opacity' : '1'}, 300);
// }

// setTimeout(popupTimerOpen, 60000);

const type_slider_mono_p = new Swiper('#mono_p', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

const type_slider_nature_p = new Swiper('#nature_p', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

const type_slider_texture_p = new Swiper('#texture_p', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

const type_slider_art_p = new Swiper('#art_p', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

const type_slider_mono_s = new Swiper('#mono_s', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

const type_slider_classic_s = new Swiper('#classic_s', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

const type_slider_nature_s = new Swiper('#nature_s', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

const type_slider_cover_s = new Swiper('#cover_s', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

const type_slider_storm_s = new Swiper('#storm_s', {
  loop: true,
  wrapperClass: 'type-slider-w',
  slideClass: 'type-slide',
  speed: 600,
  pagination: {
    el: '.type-slider-nav',
    bulletClass: 'type-nav-dot', 
    bulletActiveClass: 'active',
    bulletElement: 'div',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    992: {
      slidesPerView: 'auto',
    }    
  }  
});

//Gallery
Fancybox.bind("[data-fancybox]", {
Toolbar: {
          display: {
            left: [],
            middle: [],
            right: [
              "close",
            ],
          },
          items: {
            close: {
                tpl: '<button class="f-button" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
              },
          }          
        },
Thumbs: {
    type: "classic",
  }
});