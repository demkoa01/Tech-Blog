async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login');
    const password = document.querySelector('#password-login');
  
    fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(function() {
        document.location.replace('/dashboard');
      })
      .catch(err => {
        console.log(err);
      });
    };
  

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);