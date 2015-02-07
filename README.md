# Event-driven arrays
 Event-driven arrays in JS: just some ideas 
 
```
var arr = array(["js", "css", "html"]);
 // you can watch any changes with your array 
       arr 
        .on("push", handler )
        .on("unshift", handler )
        .on("pop", handler )
        .on("shift", handler );

    arr
     .pop()
     .shift()
     .unshift( "html" )
     .push( "js" )

 function handler( elements, type ) {
    console.log.apply( console, arguments );
  }
```
