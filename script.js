const menus = document.querySelectorAll('.menu__pokemon')
const cards = document.querySelectorAll('.cartao-pokemon')

const element = cards[0].firstElementChild
const bgColor = getComputedStyle(element).backgroundColor
menus[0].style.backgroundColor = bgColor

const beep = document.createElement('audio')

function removeMenuAtivo() {
  const menuAtivo = document.querySelector('.ativo')
  menuAtivo.classList.remove('ativo')
  menuAtivo.style.backgroundColor = "#6B727A"
}

function removeCartaoVisivel() {
  const cartaoVisivel = document.querySelector('.visivel')
  cartaoVisivel.classList.remove('visivel')
}

menus.forEach((menu, index) => {
  menu.addEventListener('click', () => {
    if (index === 0) {
      beep.src = "sounds/pikachu.mp3"
    } else {
      beep.src = "sounds/button-31.mp3"
    }
    beep.play()
    removeMenuAtivo()
    menu.classList.add('ativo')
    const element = cards[index].firstElementChild
    const bgColor = window.getComputedStyle(element).backgroundColor
    menu.style.backgroundColor = bgColor
    removeCartaoVisivel()
    cards[index].classList.add('visivel')
  })
})

