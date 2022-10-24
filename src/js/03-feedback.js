const feedBackForm = document.querySelector('.feedback-form');
const { elements: {
    email,
    message
}} = feedBackForm;

const _ = require('lodash');

const savedUserData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
    email: '',
    message: ''
}

email.value = savedUserData.email;
message.value = savedUserData.message;

feedBackForm.addEventListener('input', _.throttle( () => {
            
    localStorage.setItem('feedback-form-state', 
            JSON.stringify(
                { 
                email: email.value,
                message: message.value
                }
            )
        )
    }, 500)
)

feedBackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(localStorage.getItem('feedback-form-state'))
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
})





