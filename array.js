
/*!
 * Event driven arrays : idea
 * by Roman Zhak ( https://github.com/zhak55/Event-driven-arrays )
 * Licensed under MIT ()
 */
 
 function array( arr ) {
    var p = Array.prototype
      , o = {}
      , subs = {};
    
    // check 
    arr || ( arr = [] );
    
    // Add one handler to event type
    //  @param {String} [type] - event type accorting to methods of array 
    //  @param {Function} [callback]
    
    o.on = function( type, callback ) {
      subs[type] = callback;
      return this;
    }
    
    // Remove one handler 
    // @param {String} [type]
    
    o.off = function( type ) {
      if( subs[type] ) delete subs[type];  
    }
    
    o.trigger = function( type, el ) {
        if( subs[type] ) subs[type].call( this, el, type );
    };
    
    // create some methods to test
   
    ["push", "unshift", "shift", "pop"].forEach(function( name ) {
      o[ name ] = function() {
        var args = arguments; 
          p[ name ].apply( this, args );
          this.trigger( name, args );
        return this;
      }
    });
    
    // Return converted object to array;
    
    o.native = function() {
     return p.slice.call(this);   
    }
    
    o.constructor = function() {
      for( var k in arr ) this[k] = arr[k];
       this.length = arr.length;
       return this;
    }
    
    return Object.create(o).constructor(); 
    
};
