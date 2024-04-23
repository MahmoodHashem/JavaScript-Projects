


document.addEventListener('DOMContentLoaded', function() {
    let checkbox = document.getElementById('mycheckbox');
    let darkModeColor = document.getElementsByTagName('body')[0];
    let footerColor = document.getElementById('copyright'); 

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            darkModeColor.style.backgroundColor = "black"; 
            footerColor.style.color = "white"; 
        } else {
            darkModeColor.style.backgroundColor = "white"; 
            footerColor.style.color = "black"; 
        }
    });
});