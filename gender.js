/**
 * added this script so other gender can be entered if "other" is selected
 * otherwise, the input sent will be the same as the selected
 * 
 * @Author: Mohammad Zaid Khan
 */
document.getElementById('gender').addEventListener('change', function () {
    const otherGenderInput = document.getElementById('otherGender');
    const genderSelect = document.getElementById('gender');
    // If "other" is selected, clear and enable the text input
    if (genderSelect.value === 'other') {
        otherGenderInput.value = '';
        otherGenderInput.style.display = '';
    } else {
        // Otherwise, disable and clear the text input
        otherGenderInput.value = genderSelect.value;
        otherGenderInput.style.display = 'none';
    }
});