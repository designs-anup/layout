const toggleButton = document.getElementById('toggle-btn')
const sideNavigation = document.getElementById('sideNavigation')

function toggleSidebar(){
    sideNavigation.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sideNavigation.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(btn){
    btn.nextElementSibling.classList.toggle('show')
    btn.classList.toggle('rotate')

    if(sideNavigation.classList.contains('close')){
        sideNavigation.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

