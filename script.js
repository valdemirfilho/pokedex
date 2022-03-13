const menus = document.querySelectorAll('.menu__pokemon')
const cards = document.querySelectorAll('.cartao-pokemon')
const beep = document.getElementById('beep')

const element = cards[0].firstElementChild
const bgColor = getComputedStyle(element).backgroundColor
menus[0].style.backgroundColor = bgColor

function removeAtivo() {
  menus.forEach(menu => {
    // menu.classList.remove('ativo')
    menu.style.backgroundColor = "#6B727A"
  })
}

function removeCartaoVisivel() {
  cards.forEach(card => {
    card.classList.remove('visivel')
  })
}

menus.forEach((menu, index) => {
  menu.addEventListener('click', () => {
    beep.play()
    removeAtivo()
    const element = cards[index].firstElementChild
    const bgColor = window.getComputedStyle(element).backgroundColor
    menu.style.backgroundColor = bgColor
    removeCartaoVisivel()
    cards[index].classList.add('visivel')
  })
})

