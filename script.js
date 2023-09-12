const formContainer = document.querySelector(`[data-formContainer]`)
const resultContainer = document.querySelector('[data-resultContainer]')
const numberBtns = document.querySelectorAll('div.button-row-container > button')
const submitBtn = document.querySelector('[type="submit"]')
const selectionSpan = document.querySelector('span')

submitBtn.addEventListener('click', () => {
    formContainer.setAttribute('hidden', '')
    resultContainer.removeAttribute('hidden')
})

numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        selectionSpan.innerText = button.innerText
    })
})