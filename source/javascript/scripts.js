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
  pixelFlower.css('opacity', 1 - scrollTop / 500);
  pixelFlower.css('bottom', 0 - scrollTop / 5);
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
});
