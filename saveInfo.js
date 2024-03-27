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

function loadData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const formObject = JSON.parse(savedData);
        const form = document.querySelector('form');
        for (const key in formObject) {
            if (formObject.hasOwnProperty(key)) {
                const input = form.querySelector(`[name="${key}"]`);
                if (input) input.value = formObject[key];
            }
        }
    } else {
        console.log('No saved data found');
    }
}