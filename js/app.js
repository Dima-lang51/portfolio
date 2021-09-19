$(function() {


  /* Filter 
  =======================*/
  let filtr = $('[data-filter]');
  filtr.on('click', function(event) {
    event.preventDefault();

    let category = $(this).data('filter');

    if(category == 'all') {
      $('[data-cat]').removeClass('hide');
    } else {
       $('[data-cat]').each(function() {
      let workCat = $(this).data('cat');

      if(workCat != category) {
        $(this).addClass('hide');
      } else {
        $(this).removeClass('hide');
      }
    });
    }
  });


  /* Modal 
  =======================*/
  let modalCall = $('[data-modal]');
  let modalClose = $('[data-close]');

  modalCall.on('click', function(event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $('body').addClass('no-scroll');
  });



  modalClose.on('click', function(event) {
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.removeClass('show');
    $('body').removeClass('no-scroll');
  });


   $('.modal').on('click', function(event) {
    $(this).removeClass('show');
    $('body').removeClass('no-scroll');
  });

   $('.modal__dialog').on('click', function(event) {
     event.stopPropagation();
  });



  /* Mobile nav
    ==================*/

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});