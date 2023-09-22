const TemperatureCalc = () =>
{
    const numberTemp = document.getElementById('tempNum').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel*9/5) + 32);
        return fahrenheit;
    }
    const FahToCel = (feh) => {
        let celsius = Math.round((feh - 32) *5/9);
        return celsius;
    }

    let result;

    if(valueTemp == 'cel')
    {
        result = celToFah(numberTemp);
        document.getElementById('result').innerHTML = `= ${result}°Fahrenheit`;
        
    }
    else{
        result = FahToCel(numberTemp);
        document.getElementById('result').innerHTML= `=${result}°Celsius`;
    }
}