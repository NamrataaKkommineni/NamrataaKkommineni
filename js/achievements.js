  // Want to show a particular category on page load (not all the images)? Add this code to the top of the javascript file


  // Hide all the images
  $('.all').addClass('hide');

  // Show only the Projects category. Change to the category you want to show on page load
  $('.Projects').removeClass('hide');

  // Remove active class from all filter buttons
  $('.filter').removeClass('active');

  // Apply active class to the filter button matching the filter you want to be shown on page load
  $('.filter-Projects').addClass('active');


  //---------------------------------------------------------
  //---------------------------------------------------------


  // Show all
  $('.filter-all').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.all').removeClass('hide');
  });

  $('.filter-Marksheets').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.Marksheets').removeClass('hide');
      $('.training, .appt, .conf, .awards, .talks, .experience, .membership').addClass('hide');
  });

  $('.filter-training').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.training').removeClass('hide');
      $('.Marksheets, .appt, .conf, .awards, .talks, .experience, .membership').addClass('hide');
  });


  $('.filter-appt').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.appt').removeClass('hide');
      $('.training, .Marksheets, .conf, .awards, .talks, .experience, .membership').addClass('hide');
  });

  $('.filter-conf').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.conf').removeClass('hide');
      $('.training, .appt, .Marksheets, .awards, .talks, .experience, .membership').addClass('hide');
  });

  $('.filter-awards').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.awards').removeClass('hide');
      $('.training, .appt, .Marksheets, .conf, .talks, .experience, .membership').addClass('hide');
  });

  $('.filter-talks').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.talks').removeClass('hide');
      $('.training, .appt, .conf, .awards, .Marksheets, .experience, .membership').addClass('hide');
  });

  $('.filter-experience').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.experience').removeClass('hide');
      $('.training, .appt, .conf, .awards, .talks, .Marksheets, .membership').addClass('hide');
  });

  $('.filter-membership').on('click', function() {
      var $this = $(this);
      $('.filter').removeClass('active');
      $this.addClass('active');
      $('.membership').removeClass('hide');
      $('.training, .appt, .conf, .awards, .talks, .experience, .Marksheets').addClass('hide');
  });