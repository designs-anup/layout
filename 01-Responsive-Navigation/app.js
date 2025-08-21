const navbar = document.getElementById('navbar')
const openButton = document.getElementById('open-sidebar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches

  if(isMobile){
    navbar.setAttribute('inert','')
  }else{
    navbar.removeAttribute('inert')
  }
}

function openSidebar(x){
  console.log("open sidebar")
  navbar.classList.add('show')
  x.classList.toggle("change")
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  console.log("close sidebar")
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

updateNavbar(media)