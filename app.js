var inputElement = document.getElementById('inputField');
function getValue(display){
    
    inputElement.value += display
}
 function emptyAll(){
    inputElement.value = " ";
 }

function square() {
    inputElement.value = inputElement.value *  inputElement.value; 
        
 }

function deleteSingle(){
     inputElement.value = inputElement.value.slice(0 , -1)
    
 }

 function equal() {
     inputElement.value = eval(inputElement.value);

 }