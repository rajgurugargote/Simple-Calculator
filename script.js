let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');


let expression = "";


let buttonArray = Array.from(buttons);


buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

    switch (value) {
        case '=':
        try {
                  
            expression = new Function('return ' + expression)();
        } catch (error) {
            expression = "Error";
        }
         input.value = expression;
        break;

case 'AC':
            
    expression = "";
    input.value = expression;
    break;

case 'DEL':
            
    expression = expression.slice(0, -1);
    input.value = expression;
    break;

default:
              
     expression += value;
    input.value = expression;
    break;

    }
});
});
