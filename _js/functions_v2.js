/*
====================================
========== GET MEMBERS IN ==========
====================================
*/

var Grid = {
	photos: ['3','2','5','2','6','3','4','7','2','4','3','6'],
	init: function () {
		var self = this;
		$(window).on('resize', function () {
			self.getImagesIn()
		});
		this.getImagesIn();
	},
	// set up the grid
	getGridSize: function() {		
		var rows = Math.floor($(window).height()/195)-2,
			columns = Math.floor($(window).width()/155);
		$('#member-grid').height(rows * 195);
		return rows*columns;
	},
	// create the member info array
	getImagesIn: function() {
		$('#member-grid').empty();
		var num = this.getGridSize();
		for (var i=0; i<num; i++) {
			
			// set on/offline status
			var index = i%12,
				src = index < 9 ? '0' + (index + 1) : index + 1,
				status = i%2 ? 'online' : 'offline', // 
				htmlTemplate = '<li class="member-container"><img src="_img/members/'+src+'.png" /><div class="num-photos">'+this.photos[index]+' photos</div><div class="member-'+status+'">'+status+'</div></li>';
			$(htmlTemplate).appendTo('#member-grid');
		}
	}
}

$(document).ready(function() {
	Grid.init();
	$('#form-continue').click( function() {
		// reveal second half of register form
		$('#form-continue').hide('blind', { direction:'vertical' }, 500);
		$('#form-part2').fadeIn('slow');
		// swap highlighted member
		$("#mh-image1").fadeOut( function() { setTimeout( function() { $("#mh-image2").fadeIn("slow"); }, 0); });
		$("#mh-info1").fadeOut( function() { setTimeout( function() { $("#mh-info2").fadeIn("slow"); }, 0); });
	});
	// member info feed
	function tick() { $('#member-feed li:first').slideUp(function() { $(this).appendTo($('#member-feed')).slideDown();}); }
	setInterval(tick, 5000);
});