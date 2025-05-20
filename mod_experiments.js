function take_modulo(num1, num2, id){
    var result = num1 % num2;
    document.getElementById(id).innerText = num1 + " % " + num2 + " = " + result;
}

take_modulo(7, 3, "5mod2");
take_modulo(-7, 3, "negative5mod2");
take_modulo(7, -3, "5modnegative2");
take_modulo(-7, -3, "negativeeverything")