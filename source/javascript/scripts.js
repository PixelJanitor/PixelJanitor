var resizeHeroContent = function() {
  var windowHeight = $(window).height();
  var headerHeight = $('.primary-header').height();

  $('.hero-content').height(windowHeight - headerHeight);
};

$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  var pixelFlower = $('.pixel-flower');
  var logo = $('.logo');

  logo.css('opacity', 1 - scrollTop / 350);
  logo.css('bottom', 40 + scrollTop / 4);
  // pixelFlower.css('opacity', 1 - scrollTop / 500);
  // pixelFlower.css('bottom', 0 - scrollTop / 5);
});

$(window).on('load resize', function() {
  resizeHeroContent();
});

$(document).on('click', '.contact-form-show', function() {
  $(this).toggleClass('is-slid-away');
  $('.contact').toggleClass('is-visible');
});

$(document).ready(function() {
  // Parse stuff
	var parseAPPID = "hFHtJHk0CMabZ6hB7CNsgIrRHruVrIqjGtM5hyk0";
	var parseJSID = "4rq1hgkrJCknB6INrCyLZznNwzizgPErMziPvkcS";

	Parse.initialize(parseAPPID, parseJSID);
	var CommentObject = Parse.Object.extend("CommentObject");

	$("#contact-form").on("submit", function(e) {
    e.preventDefault();

		console.log("Handling the submit");

    $('.contact-form-submit').addClass('is-submitting');
		//add error handling here
		//gather the form data

		var data = {};
		data.name = $("#contact-name").val();
		data.email = $("#contact-email").val();
		data.message = $("#contact-message").val();

		var comment = new CommentObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
        $('.contact-form-submit').removeClass('is-submitting');
        $('.contact-form-submit').addClass('has-submitted');
        $('.contact-form-submit').text('GOT IT!');
        $('.contact').removeClass('is-visible');
			},
			error:function(e) {
				console.dir(e);
        $('.contact-form-submit').removeClass('is-submitting');
        $('.contact-form-submit').addClass('has-errored');
        $('.contact-form-submit').text('ERROR :(');
			}
		});
	});

  $.jribbble.setToken('d6f7b6484e94bb9ef7a9e8eb051e88b0a4d00ad2d11138ad1cf1b1857f9c6876');
  $.jribbble.users('pixeljanitor').shots({per_page: 36}).then(function(shots) {
    var html = [];

    shots.forEach(function(shot) {
      var image = shot.images.hidpi;
      if (image === null) {
        image = shot.images.normal
      };
      console.log(image);
      html.push('<li class="shots-shot">');
      html.push('<a href="' + shot.html_url + '" target="_blank">');
      html.push('<img src="' + image + '">');
      html.push('</a></li>');
    });

    $('.shots').html(html.join(''));
  });
});
