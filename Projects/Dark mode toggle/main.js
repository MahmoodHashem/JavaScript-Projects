


document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('mycheckbox');
    var darkModeColor = document.getElementsByTagName('body')[0];

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            darkModeColor.style.backgroundColor = "black"; 
        } else {
            darkModeColor.style.backgroundColor = "white"; 
        }
    });
});