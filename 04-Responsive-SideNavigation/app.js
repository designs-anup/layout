const toggleButton = document.getElementById('toggle-btn')
const sideNavigation = document.getElementById('sideNavigation')

function toggleSidebar(){
    sideNavigation.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    closeAllSubMenus()
}

function toggleSubMenu(btn){

    if(!btn.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }

    btn.nextElementSibling.classList.toggle('show')
    btn.classList.toggle('rotate')

    if(sideNavigation.classList.contains('close')){
        sideNavigation.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeAllSubMenus(){

    Array.from(sideNavigation.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

