/*
====================================
========== GET MEMBERS IN ==========
====================================
*/

var Grid = {
	statuses: [],
	imgs: ['01','02','03','04','05','06','07','08','09','10','11','12'],
	counts: ['3','2','5','2','6','3','4','7','2','4','3','6'],
	init: function () {
		var self = this;
		// populate statuses with images and counts in random order
		while(this.imgs.length) {
			var rand = Math.floor(this.imgs.length * Math.random());
			this.statuses.push({
				status: Math.random > 0.5 ? 'online' : 'offline', // generate a random status
				count: this.counts[rand],
				src: this.imgs[rand]
			});
			this.imgs.splice(rand, 1);
			this.counts.splice(rand, 1);
		}
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
				s = this.statuses[index],
				htmlTemplate = '<li class="member-container"><img src="_img/members/'+s.src+'.png" /><div class="num-photos">'+s.count+' photos</div><div class="member-'+s.status+'">'+s.status+'</div></li>';
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