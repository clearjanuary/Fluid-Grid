/*
====================================
========== GET MEMBERS IN ==========
====================================
*/

// define object 
this.theGrid = {

	generateGrid : function() {
	
		// remove all images
		this.memberlist = document.getElementById('member-grid');
		if (this.memberlist.hasChildNodes()) while (this.memberlist.childNodes.length >= 1) this.memberlist.removeChild(this.memberlist.firstChild);
	
		// set up grid
		this.numOfRows = Math.round(window.innerHeight/190)-1;
		this.numOfItems = Math.round(window.innerWidth/150)-1;
		this.numToShow = (this.numOfRows)*(this.numOfItems);
		this.memberlist.setAttribute('style','width: '+this.numOfItems*155+'px');
		
		// set variables
		this.numOfPhotos = 12;
		this.imgNum = Math.round(Math.random()*this.numToShow+1);
		this.photo = new Array('','','2','5','2','6','3','4','7','2','4','3','6','1');
		this.memberName = new Array('');
		this.memberAge = new Array('');
		this.memberLoc = new Array('');
			
		// generate images
		for (i=0; i<=this.numToShow-1; i++) {
		
			// create the LI
			this.listItem = document.createElement('li');
			this.listItem.setAttribute('class','member-container');
			
			// set image
			this.theimg = document.createElement('img');
			if (this.imgNum > this.numOfPhotos) this.imgNum = 1;
			if (this.imgNum < 10) this.imgNum = "0"+this.imgNum;
			this.theimg.setAttribute('src','_img/member'+this.imgNum+'.png');
			this.theimg.setAttribute('alt', this.memberName[i]+', '+this.memberAge[i]+' from '+this.memberLoc[i]);
			this.imgNum++;
			
			// set on/offline status
			this.status = document.createElement('div');
			this.rn = Math.round(Math.random()*3);
			if (this.rn != 0) {
				this.status.setAttribute('class','member-online');
				this.status.innerHTML = 'online';
			} else {
				this.status.setAttribute('class','member-offline');
				this.status.innerHTML = 'offline';
			}
			
			// set number of uploaded photos
			this.photoNum = document.createElement('div');
			this.photoNum.setAttribute('class','num-photos');
			this.photoNum.innerHTML = this.photo[this.imgNum]+' photos';
			
			// slap it all together
			this.memberlist.appendChild(this.listItem);
			this.listItem.appendChild(this.theimg);
			this.listItem.appendChild(this.status);
			this.listItem.appendChild(this.photoNum);
			
		}
			
	}
	
}

window.onload = function() theGrid.generateGrid(); 
window.onresize = function() theGrid.generateGrid();