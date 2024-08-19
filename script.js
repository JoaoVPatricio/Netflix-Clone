function getButtonAndText() {
  for (let i = 1; i < 7; i++) {
    let button = document.querySelector(`#b${i}`)
    let text = document.querySelector(`#t${i}`)
    let plus = document.querySelector(`#i${i}`)

    button.addEventListener('click', () => {
      // event.stopPropagation()
      text.classList.toggle('show')
      button.classList.toggle('open')

      if (text.classList.contains('show')) {
        plus.style.transform = 'rotate(45deg)'
      } else {
        plus.style.transform = 'rotate(0)'
      }
    })
  }

}

getButtonAndText()

// document.querySelector().style.transform = ''