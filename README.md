icase
=====

*(No dependencies, 0.5kB minified)*  

Case and type insensitive lookups.  

Created for integrating with a host website where JS globals contain inconsistent values and keys.  


Example:  

```javascript

var data = {"Aaa": "Xyz"};

icase.setSrc(data);

var isMatch = icase.match( icase.get("aaa"), "xyz" ); //true

```