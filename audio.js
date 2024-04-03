
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
function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');

    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');

    // Toggle text and icon
    if (document.body.classList.contains('dark-mode')) {
        // Dark mode enabled
        darkModeToggle.innerHTML = "<i class='fas fa-sun text-4xl'>&nbsp;Light Mode</i> ";
    } else {
        // Dark mode disabled
        darkModeToggle.innerHTML = "<i class='fas fa-moon text-4xl'>&nbsp;Dark Mode</i> ";
    }
}

function speakQuestion(button) {
    var questionElement = button.parentNode.querySelector('.details');
    if (!questionElement) {
        console.log("No question element found.");
        return;
    }
    var question = questionElement.innerText.trim();
    console.log("Question:", question); // Check if we're getting the correct question text
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


