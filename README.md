# Event-driven arrays
 Event-driven arrays in JS: just some ideas 
 
```
var arr = array(["js", "css", "html"]);

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
    console.log( type,  elements )
    // remove handler   
  }
```
