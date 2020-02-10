console.log('Client-side javascript is loaded')
const weatherForm = document.querySelector('form')
const input = document.querySelector('input')
const displayText1 = document.querySelector('#displayText1')
const displayText2 = document.querySelector('#displayText2')

// displayText1.textContent = 'Load...1'
// displayText2.textContent = 'Load...2'

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = input.value

    displayText1.textContent = 'Loading...'
    // displayText2.textContent = 'Loading...2'

    fetch(`http://localhost:3000/weather?address=${location}`).then( response => {
        response.json().then(data => {
            if(data.error) {
                displayText1.textContent = data.error
            } else {
                displayText1.textContent = data.location  
                displayText2.textContent = data.forecast
            }
        })
    })    
})