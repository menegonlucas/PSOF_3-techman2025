// src/assets/js/auth.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            authenticateUser(username, password);
        });
    }
});

function authenticateUser(username, password) {
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        sessionStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = 'equipments.html';
    })
    .catch(error => {
        alert(error.message);
    });
}

function logout() {
    sessionStorage.removeItem('user');
    window.location.href = 'login.html';
}