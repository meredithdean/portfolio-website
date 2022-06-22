const toggleSwitch = document.querySelector('.theme-slider input')

// function to change theme
const switchTheme = (e) => {
    /* Once checkbox is checked default theme change to dark */
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    } 
    /* While page in dark mode and checkbox is
    checked then theme back to change light*/
    else {
        document.documentElement.setAttribute('theme', 'light');
    }

}

toggleSwitch.addEventListener('change', switchTheme, false);