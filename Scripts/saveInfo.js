/**
 * Save form data to localStorage
 *
 * @author Mohammad Zaid Khan
 */
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');

    loadData();

    form.addEventListener('submit', function(e) {

        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => formObject[key] = value);

        // Save data to localStorage in JSON format
        localStorage.setItem('formData', JSON.stringify(formObject));
        console.log('Data saved to localStorage');
    });
});

/**
 * Function to Load Json data from local storage, if available
 * 
 * @author Mohammad Zaid Khan
 */
function loadData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const formObject = JSON.parse(savedData);
        const form = document.querySelector('form');
        for (const key in formObject) {
            if (formObject.hasOwnProperty(key)) {
                const inputs = form.querySelectorAll(`[name="${key}"]`);
                inputs.forEach(input => {
                    if (input.type === 'radio') {
                        if (input.value === formObject[key]) {
                            input.checked = true;
                        }
                    } else {
                        input.value = formObject[key];
                    }
                });
            }
        }
    } else {
        console.log('No saved data found');
    }
}

/**
 * Client side Script for the form download and upload
 *
 * @Author: Mohammad Zaid Khan
 */
function downloadData() {
    fetch('http://localhost:3000/download', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            for (const [key, value] of Object.entries(data)) {
                const inputs = document.querySelectorAll(`[name="${key}"]`);

                inputs.forEach(input => {
                    if (input.type === 'radio') {
                        // for radio buttons, check the one that has the matching value
                        input.checked = input.value === value;
                    } else {
                        input.value = value;
                    }
                });
            }
        })
        .catch(error => console.error('Error:', error));
}

function uploadData() {
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);

    console.log(JSON.stringify(formObject)); // Debugging line to inspect the payload

    fetch('http://localhost:3000/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
}

