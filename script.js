const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle("active")
    input.focus()
})

// Using toggle so we can add and remove the active class on .search with one click