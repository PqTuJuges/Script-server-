const colorInput = document.getElementById('colorPicker');
const applyButton = document.getElementById('applyColor');

applyButton.addEventListener('click', () => {
    document.body.style.backgroundColor = colorInput.value;
});
