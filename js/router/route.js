var AppRoute = Backbone.Router.extend({

    routes: {
        'home': 'home',
        'blog': 'blog',
        'tour': 'tour',
       
    },

    blog: function(){
    	this.loadView(new BlogsView());
    },

    tour: function(){
        
        this.loadView(new TourView());
    },

    home: function(){
    	this.loadView(new HomeView());
    },
    
    loadView: function(view){
		if (this._currentView) {
        
		//	this._currentView.remove();
		}

		//$("#container").html(view.render().$el);
		
		this._currentView = view;
	},

	defaultRoute: function(){
        this.navigate("home", true);
	}
});

var router = new AppRoute();
   Backbone.history.start();
var prev='';
   var NavView = Backbone.View.extend({
      
	events: {
		"click": "onClick"
	},

	onClick: function(e){
        var $li = $(e.target);
        
       if (!prev){
        $('#nav-home').removeClass('show');
        $('#nav-home').css('display','none');
        $('#home').removeClass('show active');
        $('#home').attr('aria-selected','false');
       }
       else{
        var pid ='#nav-'+prev[0].id;
        console.log('id',prev);
        $(pid).removeClass('show');
        $(pid).css('display','none');
        prev.removeClass('show active');
        prev.attr('aria-selected','false');
       }
      
      
       $li.attr('aria-selected','true');
       var id ='#nav-'+$li[0].id;
       $(id).addClass('show');
       $(id).css('display','block');
       prev = $li;
	router.navigate($li.attr("data-url"), { trigger: true });
	}
});

var navView = new NavView({ el: "#nav-tab" });
