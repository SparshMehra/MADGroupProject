
/*
    This file contains the functionality for a responsive webform for natural burial 
    initiative created for people with accessbility needs.
    Author(s): Mohammed Zaid, Nabila Saimon Bithi, Sparsh Mehra, Tooba Javed
*/
function speakInput(button) {
    var inputBox = button.parentNode;
    var input = inputBox.querySelector('input[type="text"], input[type="date"], input[type="email"], input[type="number"]');
    var inputText = input.value.trim();

    if (inputText === '') {
        speak("You have not entered any input for " + input.previousElementSibling.textContent);
    } else {
        speak(inputText);
    }

    // Check if the input box is part of the gender details section
    if (inputBox.closest('.gender-details')) {
        var genderInput = inputBox.querySelector('input[type="radio"]');
        if (genderInput && genderInput.checked) {
            speakGender(genderInput);
        }
    }
}

function speakQuestion(button) {
    var question = button.parentNode.querySelector('.details').textContent;
    speak(question);
}

function speakOption(select) {
    var selectedOption = select.value;
    speak(selectedOption);
}

function speakSelectedOption(button) {
    var select = button.previousElementSibling;
    var selectedOption = select.options[select.selectedIndex].text;
    if (selectedOption !== "") {
        speak(selectedOption);
    } else {
        speak("Please select your gender.");
    }
}


function speakGender(input) {
    var gender = input.id;
    speak(gender);
}

function showGenderInput(element) {
    if (element.value !== 'other') {
        document.getElementById('otherGenderInput').style.display = 'none';
    } else {
        document.getElementById('otherGenderInput').style.display = 'block';
    }
}

function speakGenderInput() {
    var genderInput = document.getElementById('otherGender');
    var inputText = genderInput.value.trim();
    if (inputText === '') {
        speak("You have not entered any input.");
    } else {
        speak(inputText);
    }
    
}

function speak(text) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
// Function to toggle dark mode
            function toggleDarkMode() {
                const body = document.body;
                body.classList.toggle('dark-mode');
            }

