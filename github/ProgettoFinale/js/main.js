/**
 * @file: main.js
 * @author: Francesco Panetta
 *
 * Purpose of file:
 * ...
 */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
 
$('.googleMap').ready(function() {
    // Handler for .load() called.
    
});