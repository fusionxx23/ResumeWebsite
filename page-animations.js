
class pageAnimation {

    constructor() {
        this.window = $(window); 
        this.aboutCounter = 0; 
        this.workCounter = 0; 
        this.aboutTitle = $("#about-title"); 
        this.aboutBody = $('#about-body'); 
        this.workBody = $('#work-body'); 
        this.workTitle = $('#work-title'); 

        this.aboutContainer = $('#about'); 
        this.workContainer = $('#work'); 
        this.contactContainer = $('#contact'); 
     
        this.events(); 
    }

    events() {
        this.window.scroll(() => {
			this.scrollEvent(); 
        }); 
    }
    scrollEvent() {
        // About Title
        if (!this.aboutCounter == 1) {
            if(this.window.scrollTop() >= this.aboutContainer.position().top - 200) {
                //Title
                this.aboutTitle.addClass('about-title__animation'); 
                this.aboutTitle.removeClass('unscrolled_about_title'); 
                //Body Section
                this.aboutBody.addClass('about-body__animation'); 
                this.aboutBody.removeClass('unscrolled_about_body'); 
                this.aboutCounter++; 
               
            }
        } 

        // Project Section 
        if(!this.workCounter == 1) {
            if(this.window.scrollTop() >= this.workContainer.position().top - 200) {
                   //Title
                   this.workTitle.addClass('about-title__animation'); 
                   this.workTitle.removeClass('unscrolled_about_title'); 
                   //Body Section
                   this.workBody.addClass('about-body__animation'); 
                   this.workBody.removeClass('unscrolled_about_body'); 
                   this.workCounter++; 
            }
        }
    }


}

var pageScroll = new pageAnimation(); 
