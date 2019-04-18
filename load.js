console.log("worked"); 

class LoadUp {

    constructor()  {
        this.window = $(window); 
        this.aboutTitle = $("#about-title"); 
        this.aboutCounter = 0; 
        this.aboutContainer = $('#about'); 
        this.workContainer = $('#work'); 
        this.contactContainer = $('#contact'); 
        this.events(); 
       

        this.homeNav = $('#home-nav'); 
        this.aboutNav = $('#about-nav'); 
        this.workNav = $('#work-nav'); 
        this.contactNav = $('#contact-nav'); 
        this.lastPosition = this.homeNav; 
    }

    events() {
        this.window.scroll(() => {
			this.scrollEvent(); 
		}); 
    }
    scrollEvent() {
        // About Animation Scroll
        if (!this.aboutCounter == 1) {
            if(this.window.scrollTop() >= this.aboutContainer.position().top) {
                this.aboutTitle.addClass('about-title__animation'); 
                this.aboutTitle.removeClass('unscrolled'); 
                this.aboutCounter++; 
            }
        } 

        //Home Nav Scroll  
        if (this.window.scrollTop() < this.aboutContainer.position().top 
           && this.lastPosition != this.homeNav) {
            this.homeNav.removeClass('inactive'); 
            this.homeNav.addClass('active'); 
           
            this.lastPosition.removeClass('active'); 
            this.lastPosition.addClass('inactive'); 

            this.lastPosition = this.homeNav; 
        }

      //About Nav Scroll  
        if (this.window.scrollTop() >= this.aboutContainer.position().top 
           && this.lastPosition != this.aboutNav) {
            this.aboutNav.removeClass('inactive'); 
            this.aboutNav.addClass('active'); 
           
            this.lastPosition.removeClass('active'); 
            this.lastPosition.addClass('inactive'); 

            this.lastPosition = this.aboutNav; 
        }

        //About Nav Scroll  
        if (this.window.scrollTop() >= this.aboutContainer.position().top 
           && this.lastPosition != this.aboutNav) {
            this.aboutNav.removeClass('inactive'); 
            this.aboutNav.addClass('active'); 
           
            this.lastPosition.removeClass('active'); 
            this.lastPosition.addClass('inactive'); 

            this.lastPosition = this.aboutNav; 
        }
        //Work Nav Scroll 
        if (this.window.scrollTop() >= this.workContainer.position().top 
           && this.lastPosition != this.workNav) {
            this.workNav.removeClass('inactive'); 
            this.workNav.addClass('active'); 
           
            this.lastPosition.removeClass('active'); 
            this.lastPosition.addClass('inactive'); 

            this.lastPosition = this.workNav; 
        }

        if (this.window.scrollTop() >= this.contactContainer.position().top - 50 
           && this.lastPosition != this.contactNav) {
            this.contactNav.removeClass('inactive'); 
            this.contactNav.addClass('active'); 
           
            this.lastPosition.removeClass('active'); 
            this.lastPosition.addClass('inactive'); 

            this.lastPosition = this.contactNav; 
        }
    }
}

var load = new LoadUp(); 
