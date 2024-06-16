
        const text = document.querySelector('.typing-demo');
        const root = document.querySelector('html');
        const btn = document.querySelector('button');
        const input = document.querySelector('input');
        const characters = document.querySelector('.chars'); 
        



        input.addEventListener('keyup', function(){
            characters.innerHTML = `${input.value.length} / 20`; 
        })


        btn.addEventListener('click', function () {
            text.innerHTML = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase(); 
            const width = text.innerHTML.trim().length;
            let s = width * 12 / 17;
            root.style.setProperty('--width', `${width}ch`)
            root.style.setProperty('--steps', width);
            root.style.setProperty('--s', `${s}s`);
            console.log(s);
            input.value = '';
            characters.innerHTML = '0 / 20'
        })
