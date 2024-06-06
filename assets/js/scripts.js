document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Función para animar el header

$(document).ready(function () {
  // Manejar el scroll para desvanecer el navbar
  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > previousScroll) {
      $('header').css('opacity', '0.5');
    } else {
      $('header').css('opacity', '1');
    }
    previousScroll = currentScroll;
  });

  // Manejar los clics en los botones
  $('#githubBtn').on('click', function (event) {
    event.preventDefault();
    window.open($(this).attr('href'), '_blank');
  });

  $('#linkedinBtn').on('click', function (event) {
    event.preventDefault();
    window.open($(this).attr('href'), '_blank');
  });

  $('#cvBtn').on('click', function (event) {
    event.preventDefault();
    window.open($(this).attr('href'), '_blank');
  });
});
