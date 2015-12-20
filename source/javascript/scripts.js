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
  $(this).addClass('is-slid-away');
  $('.contact').addClass('is-visible');
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
				//Alerts are lame - but quick and easy
				alert("Thanks for filling the form!");
			},
			error:function(e) {
				console.dir(e);
			}
		});
	});
});
