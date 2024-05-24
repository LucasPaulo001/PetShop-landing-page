function clickMenu() {
   var menu = document.querySelector('#menuMobile')
   var menuDesktop = document.querySelector('#menu')
   if(menu.style.display == 'block'){
     menu.style.display = 'none'
   } else{
     menu.style.display = 'block'
   }
}