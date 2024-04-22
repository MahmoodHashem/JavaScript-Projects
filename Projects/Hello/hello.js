

document.addEventListener('DOMContentLoaded', function(){

    let input = this.querySelector('input'); 

    input.addEventListener('keyup', function(){
        
        let name = document.querySelector('p'); 

        if(input.value){
            name.innerHTML = `hello, ${input.value}`; 
        }else{
            name.innerHTML = 'hello, whoever you are'
        }

    })


})