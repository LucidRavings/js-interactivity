console.log('hello world')

let message = document.querySelector('#message')

let addMovie = ((event) => {
    event.preventDefault(event)
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let movieList = document.querySelector('ul')

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = ('X')
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    movieList.appendChild(movie)

})

let tempForm = document.querySelector('form')
tempForm.addEventListener('submit', addMovie)

let deleteMovie = ((event) => {
    event.target.parentNode.remove()
    message.textContent = ('Movie deleted!')
})

let crossOffMovie = ((event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = ('Movie watched!')
    } else {
        message.textContent = ('Movie added back!')
    }
})
