
// Burger toggle

var burger = document.querySelector('.navbar__burger')
var burgerClose = document.querySelector('.hidden__close')
var hiddenMenu =  document.querySelector('.hidden')
var hiddenLinks = document.querySelectorAll('.hidden__link')

burger.addEventListener('click', () => {
    hiddenMenu.classList.toggle('active')
})

burgerClose.addEventListener('click', () => {
    hiddenMenu.classList.remove('active')
})

hiddenLinks.forEach(link => {
    link.addEventListener('click', () => {
        hiddenMenu.classList.remove('active')
    })
})


// Filters 
var moreFilter = document.querySelector('.more-filter')
var placesFilters = document.querySelector('.places__filters')
var placesFilterFavorite = document.querySelector('.places__filter_favorite')
var restaurantHeaderFavorite = document.querySelector('.restaurant__header_favorite')

if (moreFilter) {
    moreFilter.addEventListener('click', () => {
        placesFilters.classList.toggle('active')
        moreFilter.classList.toggle('active')
    })
}

if (placesFilterFavorite) {
    placesFilterFavorite.addEventListener('click', () => {
        placesFilterFavorite.classList.toggle('active')
    })
}

if (restaurantHeaderFavorite) {
    restaurantHeaderFavorite.addEventListener('click', () => {
        restaurantHeaderFavorite.classList.toggle('active')
    })
}

// Modal

var navbarBtn = document.querySelector('.add__btn')
var hiddenBtn = document.querySelector('.hidden__btn')
var newLocationModal = document.querySelector('#newLocationModal')
var modalFirst = document.querySelector('#modal1')

document.addEventListener("click", (evt) => {
    let targetEl = evt.target;
    do {
      if(targetEl == modalFirst || targetEl == navbarBtn|| targetEl == hiddenBtn) {
        newLocationModal.classList.add('show')
        // This is a click inside, does nothing, just return.
        console.log('sdf1')
        return;
      }
      // Go up the DOM
      targetEl = targetEl.parentNode;
    } while (targetEl);
        // This is a click outside. 
        console.log('sdf')
        newLocationModal.classList.remove('show')
  });


// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  /**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
    var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
    map.addObject(parisMarker);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: 'm053qkLPVyMSHQTGoWJ8G2OAupJZIvvbNaUTvxI2EQA'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:48.8567, lng:2.3508},
  zoom: 12,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  addMarkersToMap(map);
}