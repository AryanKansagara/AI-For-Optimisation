// JavaScript to handle button and input selections

// Element references
const optimizeBtn = document.getElementById('optimizeBtn');
const monthInput = document.getElementById('monthInput');
const outputSection = document.querySelector('.output-section');
const outputNumber = document.querySelector('.output-number');

// Event listener for Optimize button
optimizeBtn.addEventListener('click', () => {
    const month = monthInput.value;  // Get the month input value
    let result = 50; // Placeholder value for the result, could be calculated based on month

    // Update the output based on the selected month (for demonstration purposes)
    if (month >= 1 && month <= 12) {
        result = Math.floor(Math.random() * 100); // Generate random number to simulate data
        outputNumber.textContent = result + '%';  // Display the result as percentage
    } else {
        outputNumber.textContent = 'Invalid Month';  // Handle invalid month input
    }

    alert(`Optimizing prediction for Month ${month}`);
});

// Logic for selection button behavior
const buttons = document.querySelectorAll('.select-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        button.style.transform = 'scale(1.1)';
        setTimeout(() => (button.style.transform = 'scale(1)'), 200);
    });
});
