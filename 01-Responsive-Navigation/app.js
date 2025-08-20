const navbar = document.getElementById('navbar')

function openSidebar(x){
  console.log("open sidebar")
  navbar.classList.add('show')
  x.classList.toggle("change")
}

function closeSidebar(){
  console.log("close sidebar")
  navbar.classList.remove('show')
}