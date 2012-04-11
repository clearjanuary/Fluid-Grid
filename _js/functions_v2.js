/*
====================================
========== GET MEMBERS IN ==========
====================================
*/

this.theGrid = {
	
	// set up the grid
	getGridSize: function() {		
		this.numOfRows = Math.round(window.innerHeight/190)-2;
		this.numOfItems = Math.round(window.innerWidth/150)-1;
		this.numToShow = (this.numOfRows)*(this.numOfItems);
		document.getElementById('member-grid').setAttribute('style','width: '+this.numOfItems*155+'px; overflow: hidden;');
	},
	
	// declare variables
	memberEntry: [],
	memberPhotoNum: ['3','2','5','2','6','3','4','7','2','4','3','6'],
	numOfPhotos: 12,
	pic: Math.round(Math.random()*this.numToShow+1),
	
	// create the member info array
	getImagesIn: function() {
		for (var i=this.pic; i<=200; i++) {
		
			//set image
			if (this.pic > this.numOfPhotos-1) this.pic = 1;
			if (this.pic < 10) this.pic = "0"+this.pic;
			this.pic++;
			
			// set on/offline status
			
			
			// insert new data into array
			this.memberEntry.push({memImage: this.pic, memPhotos: this.memberPhotoNum[i], memStatus: "On/Offline"});
			this.htmlTemplate = "<li class='member-container'><img src='_img/members/"+this.pic+".png' /><div class='num-photos'>"+this.memberPhotoNum[i]+" photos</div><div class='member-"+this.status+">"+this.status+"</div></li>";
			$(this.htmlTemplate).appendTo('#member-grid');
		}
	}
}

// $(html).tmpl(memberEntry).appendTo("#member-grid");

/*
=====================================
========== GLOBAL HANDLERS ==========
=====================================
*/
window.onload = function() {
	theGrid.getGridSize();
	theGrid.getImagesIn();
	// $.colorbox({href:"#form-container"}); // lightbox
}
window.onresize = function() { theGrid.getGridSize(); } // member grid

$(document).ready(function() {
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
	setInterval(function(){tick()}, 5000);
});