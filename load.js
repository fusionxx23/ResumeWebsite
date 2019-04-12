console.log("worked"); 

class LoadUp {

    constructor()  {
        this.window = $(window); 
        this.aboutTitle = $("#about-title"); 
        this.aboutCounter = 0; 
        this.events(); 
    }

    events() {
        this.window.scroll(() => {
			this.scrollEvent(); 
		}); 
    }
    scrollEvent() {
        if (!this.aboutCounter == 1) {
            if(this.window.scrollTop() > 300) {
                this.aboutTitle.addClass('about-title__animation'); 
                this.aboutTitle.removeClass('unscrolled'); 
                this.aboutCounter++; 
            }
            
        } else {
            return; 
        }
    }
}

var load = new LoadUp(); 
