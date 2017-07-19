var pointsArray = document.getElementsByClassName('point'); 
//checkpoint 9 Assignment forEach:
//forEach will use the array named pointsArray, but what will the callback function be?
// what do I want to happen with each element in the array? Answer - revealPoint! So revealPoint will be
//the callback function.
//Pull revealPoint out of animatePoints function, add the forEach function to the body of animate points
 var revealPoint = function(point) {
        point.style.opacity = 1;
        point.style.transform = "scaleX(1) translateY(0)";
        point.style.msTransform = "scaleX(1) translateY(0)";
        point.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function(points) {
    forEach(points, revealPoint); //points, in this case is a parameter of the animatePoints function
    //when animatePoints is called, the array pointsArray is passed in, which will be passed in the forEach function

     };
             

window.onload = function() {
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
     window.addEventListener('scroll', function(event) {
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
};