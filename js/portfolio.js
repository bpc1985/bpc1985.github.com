$(document).ready(function(){
  // filter
  $('nav a').on('click', function(event){
      event.preventDefault();
      // current class
      $('nav li.current').removeClass('current');
      $(this).parent().addClass('current');

      // set new heading
      $('h1.heading').text($(this).text());
      // filter link text
      var category = $(this).text().toLowerCase().replace(' ', '-');
      // remove hidden class if "all" is selected
      if(category == 'all-projects'){
          $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
      } else {
          $('ul#gallery li').each(function(){
             if(!$(this).hasClass(category)){
                 $(this).hide().addClass('hidden');
             } else {
                 $(this).fadeIn('slow').removeClass('hidden');
             }
          });
      }
      return false;
  });
  // lightbox
  $('ul#gallery a').on('click', function(event){
      event.preventDefault();
      var link = $(this).find('img').attr('src');
      var demoLink = $(this).find('.demoLink').text();
      var sourceCode = $(this).find('.sourceCode').text();

      $('.gallery img').attr('src', '');
      $('.gallery img').attr('src', link);

      if (demoLink !== '' && sourceCode !== '') {
        $('.gallery div.description').css('visibility', 'visible');
        $('.gallery a.demoLink').attr('href', '');
        $('.gallery a.demoLink').attr('href', demoLink);
        $('.gallery a.sourceCode').attr('href', '');
        $('.gallery a.sourceCode').attr('href', sourceCode);
      } else {
        $('.gallery div.description').css('visibility', 'hidden');
      }

      $('.gallery').fadeIn('slow');
  });
  // close lightbox
  $('.gallery a.close').on('click', function(event){
    event.preventDefault();
    $('.gallery').fadeOut('slow');
  });
  $('.gallery img').on('click', function(event){
      event.preventDefault();
      $('.gallery').fadeOut('slow');
  });
});