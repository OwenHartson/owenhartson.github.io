function FarenheitToCelsius(degree)
{
      return ( (degree - 32) / 1.8 );
}

function CelsiusToFarenheit(degree)
{
      return ( degree * 1.8 + 32 );
}

document.getElementById('cValue').onchange = () =>{
      let cDegree = document.getElementById('cValue').value;
      document.getElementById('fValue').value = CelsiusToFarenheit(cDegree);
};

document.getElementById('fValue').onchange = () =>{
      let fDegree = document.getElementById('fValue').value;
      document.getElementById('cValue').value = FarenheitToCelsius(fDegree);
};
