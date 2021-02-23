const checkbox = document.getElementById('chk');

// document.body = returns body element
// The toggle() method toggles between hide() and show() for the selected elements
checkbox.addEventListener('change', () => document.body.classList.toggle('dark'));