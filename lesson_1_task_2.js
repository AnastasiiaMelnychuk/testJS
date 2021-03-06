var sideOne = parseFloat(prompt('Enter the length of the first side', 10));
var sideTwo = parseFloat(prompt('Enter the length of the second side', 20));
var angle = parseFloat(prompt('Enter the angel between two sides', 30));

var sideThree = Math.sqrt(Math.pow(sideOne,2) + Math.pow(sideTwo,2) - 2 * sideOne * sideTwo * Math.cos(Math.PI / 180 * angle));
var square = sideOne * sideTwo * Math.sin(Math.PI / 180 * angle) / 2;
var perimeter = sideOne + sideTwo + sideThree;

if (sideOne > 0 && sideTwo > 0 && angle > 0) {
  console.log(`
  Length of the third side: ${parseFloat(sideThree.toFixed(2))} 
  Triangle square: ${parseFloat(square.toFixed(2))}
  Triangle perimeter: ${parseFloat(perimeter.toFixed(2))}`);
} else {
  console.log('Invalid data');
}
