/*
====================================
========== GET MEMBERS IN ==========
====================================
*/

// define object 
this.theGrid = {

	photo: ['','','2','5','2','6','3','4','7','2','4','3','6'],
	images: [],
	
	init : function() {
		for (var i=0; i<this.photo.length; i++) {
			var online = true;
			if (Math.round(Math.random()*3) === 0) online = false;
			this.images.push(new this.Image(this.photo[i], online));
		}
		this.generateGrid();
	},
	
	generateGrid : function() {
	
		// remove all images
		this.memberlist = document.getElementById('member-grid');
		if (this.memberlist.hasChildNodes()) while (this.memberlist.childNodes.length >= 1) this.memberlist.removeChild(this.memberlist.firstChild);
	
		// set up grid
		this.numOfRows = Math.round(window.innerHeight/190)-2;
		this.numOfItems = Math.round(window.innerWidth/150)-1;
		this.numToShow = (this.numOfRows)*(this.numOfItems);
		this.memberlist.setAttribute('style','width: '+this.numOfItems*155+'px;');
		
		// set variables
		this.numOfPhotos = 11;
		this.imgNum = Math.round(Math.random()*this.numToShow+1);
		
		// generate images
		for (var i=0; i<=this.numToShow-1; i++) {
		
			// create the LI
			this.listItem = document.createElement('li');
			this.listItem.setAttribute('class','member-container');
			
			// set image
			this.theimg = document.createElement('img');
			if (this.imgNum > this.numOfPhotos) this.imgNum = 1;
			if (this.imgNum < 10) this.imgNum = "0"+this.imgNum;
			this.theimg.setAttribute('src','_img/members/'+this.imgNum+'.png');
			this.imgNum++;
			
			// set on/offline status
			this.status = document.createElement('div');
			if (this.images[this.imgNum].online) {
				this.status.setAttribute('class','member-online');
				this.status.innerHTML = 'Online';
			} else {
				this.status.setAttribute('class','member-offline');
				this.status.innerHTML = 'Offline';
			}
			
			// set number of uploaded photos
			this.photoNum = document.createElement('div');
			this.photoNum.setAttribute('class','num-photos');
			this.photoNum.innerHTML = this.images[this.imgNum].noOfPhotos+' photos';
			
			// slap it all together
			this.memberlist.appendChild(this.listItem);
			this.listItem.appendChild(this.theimg);
			this.listItem.appendChild(this.status);
			this.listItem.appendChild(this.photoNum);
			
			// set footer width
			document.getElementById('footer').setAttribute('style',this.memberlist.getAttribute('style'));
			
		}
		
	}
};

this.theGrid.Image = function(noOfPhotos, online){
	this.noOfPhotos = noOfPhotos;
	this.online = online;
};

/*
================================================
========== CHANGE REGISTER FORM STATE ==========
================================================
*/
$(document).ready(function() {
	$('#form-continue').click( function() {
		// reveal second half of register form
		$('#form-continue').hide('blind', { direction:'vertical' }, 500);
		$('#form-part2').fadeIn('slow');
		// swap highlighted member
		$("#mh-image1").fadeOut( function() { setTimeout( function() { $("#mh-image2").fadeIn("slow"); }, 0); });
		$("#mh-info1").fadeOut( function() { setTimeout( function() { $("#mh-info2").fadeIn("slow"); }, 0); });
	});
});

/*
=================================
========== MEMBER FEED ==========
=================================
*/
function tick() { $('#member-feed li:first').slideUp(function() { $(this).appendTo($('#member-feed')).slideDown();}); }
setInterval(function(){tick()}, 5000);


/*
=====================================
========== GLOBAL HANDLERS ==========
=====================================
*/
window.onload = function() {
	theGrid.init(); // member grid
	// $.colorbox({href:"#form-container"}); // lightbox
}
window.onresize = function() { theGrid.generateGrid(); } // member grid



