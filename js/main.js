// init Isotope
var $container = $('.portfolio-items').isotope('layout');

// filteritems on button click
$('.portfolio-filter').on( 'click', 'button', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue});
});