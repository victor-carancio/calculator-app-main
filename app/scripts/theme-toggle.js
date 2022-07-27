const themeToggle = document.querySelector('.theme-toggle');
const toggleCircle = document.querySelector('.toggle-circle');
const toggleRectangle = document.querySelector('.toggle-rectangle');

toggleRectangle.addEventListener('click', function() {


    switch(true){
        case ThemeToggleClass('dark-theme'): 
            themeToggle.classList.remove('dark-theme');
            themeToggle.classList.add('light-theme');
            toggleCircle.classList.remove('default-theme');
            toggleCircle.classList.remove('on-dark');
            toggleCircle.classList.add('on-light');
        break;

        case ThemeToggleClass('light-theme'): 
            themeToggle.classList.remove('light-theme');
            themeToggle.classList.add('purple-theme');
            toggleCircle.classList.remove('on-light');
            toggleCircle.classList.add('on-purple');
        break;

        case ThemeToggleClass('purple-theme'): 
            themeToggle.classList.remove('purple-theme');
            themeToggle.classList.add('dark-theme');
            toggleCircle.classList.remove('on-purple');
            toggleCircle.classList.add('on-dark');
        break;

    }
} )

function ThemeToggleClass(theme){
    return themeToggle.classList.contains(theme);
}

function CircleToggleClass(theme){
    return toggleCircle.classList.contains(theme);
}