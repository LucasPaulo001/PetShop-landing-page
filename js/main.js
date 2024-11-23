//Funcionalidade do menu mobile Abertura e fechamento
const menuMob = document.getElementById('menu')
function clickMenu() {
   menuMob.classList.add('ativeMenuMob')
}
menuMob.addEventListener('click', (element) => {
  if(element.target.id === 'closeMenu'){
    menuMob.classList.remove('ativeMenuMob')
  }
})

//Fechamento ao clicar nos links
const closeLinks = document.querySelectorAll('.link')
closeLinks.forEach((element) => {
  element.addEventListener('click', () => {
    menuMob.classList.remove('ativeMenuMob')
  })
})