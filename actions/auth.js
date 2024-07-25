"use server";

function handleError(message) {
    const errors = [];
    Object.keys(message).map(key => {
        message[key].map(error => {
            errors.push(error)
        })
    })

    return errors.join();
}

async function register(state, formData) {

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (email === '' || password === '' || name === '') {
        return {
            error: "name, email and password is required"
        }
    }

    if (password !== confirmPassword) {
        return {
            error: "Passwords do not match!"
        }
    }

    const res = await fetch("http://localhost:8000/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            c_password: confirmPassword
        })
    })

    const data = await res.json();

    if (res.ok) {
        return {
            success: "You are registered"
        }
    } else {
        return {
            error: handleError(data)
        }
    }

}

export { register }