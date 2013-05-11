// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '!/:trollName': 'showTroll',      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showTroll', function(trollName){
      console.log("show troll :"+trollName);
    });

    app_router.on('route:defaultAction', function (actions) {
     console.log("default action");

    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
