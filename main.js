const button = document.querySelector('#button')

button.addEventListener('click', checkInputs)

function checkInputs(){
    const email = document.querySelector('#email')
    const emailValue = email.value.trim()
    
    if(emailValue === ''){
        showError(email)
    }
}

function showError(input){
    const errorMsg = document.querySelector('#errorMsg')
    const errorImg = document.querySelector('#errorImg')

    errorMsg.style.display = 'block'
    errorImg.style.display = 'flex'
}