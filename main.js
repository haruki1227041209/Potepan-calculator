/*global $*/
$(document).ready(function () {
  const showData = document.getElementById('showData');
  const number1 = document.getElementById('number1');
  const number2 = document.getElementById('number2');
  const number3 = document.getElementById('number3');
  const number4 = document.getElementById('number4');
  const number5 = document.getElementById('number5');
  const number6 = document.getElementById('number6');
  const number7 = document.getElementById('number7');
  const number8 = document.getElementById('number8');
  const number9 = document.getElementById('number9');
  const number0 = document.getElementById('number0');
  const number00 = document.getElementById('number00');
  const numberPoint = document.getElementById('numberpoint');
  const numberPlus = document.getElementById('number+');
  const numberMinus = document.getElementById('number-');
  const numberTimes = document.getElementById('number*');
  const numberDivide = document.getElementById('number/');
  const numberAC = document.getElementById('numberAC');
  const numberEqual = document.getElementById('number=');
  
  let data = 0;
  
  number1.addEventListener('click',function() {
    if (data === 0) {
      data = "1";
    } else {
      data = data + "1";
    }
    showData.innerHTML = `${data}`;
  });
  
  number2.addEventListener('click',function() {
    if (data === 0) {
      data = "2";
    } else {
      data = data + "2";
    }
    showData.innerHTML = `${data}`;
  });
  
  number3.addEventListener('click',function() {
    if (data === 0) {
      data = "3";
    } else {
      data = data + "3";
    }
    showData.innerHTML = `${data}`;
  });
  
  number4.addEventListener('click',function() {
    if (data === 0) {
      data = "4";
    } else {
      data = data + "4";
    }
    showData.innerHTML = `${data}`;
  });
  
  number5.addEventListener('click',function() {
    if (data === 0) {
      data = "5";
    } else {
      data = data + "5";
    }
    showData.innerHTML = `${data}`;
  });
  
  number6.addEventListener('click',function() {
    if (data === 0) {
      data = "6";
    } else {
      data = data + "6";
    }
    showData.innerHTML = `${data}`;
  });
  
  number7.addEventListener('click',function() {
    if (data === 0) {
      data = "7";
    } else {
      data = data + "7";
    }
    showData.innerHTML = `${data}`;
  });
  
  number8.addEventListener('click',function() {
    if (data === 0) {
      data = "8";
    } else {
      data = data + "8";
    }
    showData.innerHTML = `${data}`;
  });
  
  number9.addEventListener('click',function() {
    if (data === 0) {
      data = "9";
    } else {
      data = data + "9";
    }
    showData.innerHTML = `${data}`;
  });
  
  number0.addEventListener('click',function() {
    if (data === 0) {
      data = data;
    } else if (data.endsWith('+') == true) {
      return; 
    } else if (data.endsWith('-') == true) {
      return; 
    } else if (data.endsWith('*') == true) {
      return; 
    } else if (data.endsWith('/') == true) {
      return; 
    } else {
      data += "0";
    }
    showData.innerHTML = `${data}`;
  });
  
  number00.addEventListener('click',function() {
    if (data === 0) {
      data = 0;
    } else if (data.endsWith('+') == true) {
      return; 
    } else if (data.endsWith('-') == true) {
      return; 
    } else if (data.endsWith('*') == true) {
      return; 
    } else if (data.endsWith('/') == true) {
      return; 
    } else {
      data = data + "00";
    }
    showData.innerHTML = `${data}`;
  });
  
  numberPoint.addEventListener('click',function() {
    if (data === 0) {
      data = "0.";
    } else if (data.endsWith('.') == true) {
      return; 
    } else if (data.endsWith('+') == true) {
      data += "0."; 
    } else if (data.endsWith('-') == true) {
      data += "0."; 
    } else if (data.endsWith('*') == true) {
      data += "0."; 
    } else if (data.endsWith('/') == true) {
      data += "0."; 
    } else {
      data = data + ".";
    }
    showData.innerHTML = `${data}`;
  });
  
  numberPlus.addEventListener('click',function() {
    if (data === 0) {
      data = 0;
    } else if (data.endsWith('+') == true) {
      return; 
    } else if (data.endsWith('-') == true) {
      return; 
    } else if (data.endsWith('*') == true) {
      return; 
    } else if (data.endsWith('/') == true) {
      return; 
    } else {
      data = data + "+";
    }
    showData.innerHTML = `${data}`;
  });
  
  numberMinus.addEventListener('click',function() {
    if (data === 0) {
      data = "-";
    } else if (data.endsWith('+') == true) {
      return; 
    } else if (data.endsWith('-') == true) {
      return; 
    } else if (data.endsWith('*') == true) {
      return; 
    } else if (data.endsWith('/') == true) {
      return; 
    } else {
      data = data + "-";
    }
    showData.innerHTML = `${data}`;
  });
  
  numberTimes.addEventListener('click',function() {
    if (data === 0) {
      data = 0;
    } else if (data.endsWith('+') == true) {
      return; 
    } else if (data.endsWith('-') == true) {
      return; 
    } else if (data.endsWith('*') == true) {
      return; 
    } else if (data.endsWith('/') == true) {
      return; 
    } else {
      data = data + "*";
    }
    showData.innerHTML = `${data}`;
  });
  
  numberDivide.addEventListener('click',function() {
    if (data === 0) {
      data = 0;
    } else if (data.endsWith('+') == true) {
      return; 
    } else if (data.endsWith('-') == true) {
      return; 
    } else if (data.endsWith('*') == true) {
      return; 
    } else if (data.endsWith('/') == true) {
      return; 
    } else {
      data = data + "/";
    }
    showData.innerHTML = `${data}`;
  });
  
  numberAC.addEventListener('click',function() {
    data = 0;
    showData.innerHTML = `${data}`;
  });
  
  numberEqual.addEventListener('click',function() {
    if (data === 0) {
      data = 0;
    } else {
      data = eval(data);
    }
    showData.innerHTML = `${data}`;
  });
});

