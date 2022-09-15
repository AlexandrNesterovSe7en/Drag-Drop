const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')

placeHolders.forEach((placeHolder) => {
  placeHolder.addEventListener('dragover', (event) => {
    event.preventDefault()
  })
  placeHolder.addEventListener('dragenter', (event) => {
    if (event.target == event.target.closest('.placeholder')){
      event.target.classList.add('hovered')
    }
  })
  placeHolder.addEventListener('dragleave', (event) => {
    event.target.classList.remove('hovered')
  })
  placeHolder.addEventListener('drop', (event) => {
    event.target.append(item)
    event.target.classList.remove('hovered')
  })
})

item.addEventListener('dragstart', (event) => {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
})
item.addEventListener('dragend', (event) => {
  event.target.classList.remove('hide', 'hold')  
})

