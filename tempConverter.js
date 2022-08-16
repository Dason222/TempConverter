//convert celsius to fahrenheit

function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius*9) / 5+32;
    console.log(celsius + " Celsius is equal to " + fahrenheit + " Fahrenheit");

}
//convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 0.5556;
    console.log(fahrenheit + " Fahrenheit is equal to " + celsius + " Celsius" )
}

celsiusToFahrenheit(22);
celsiusToFahrenheit(5);
celsiusToFahrenheit(18);
celsiusToFahrenheit(-22);

fahrenheitToCelsius(10);
fahrenheitToCelsius(22);


