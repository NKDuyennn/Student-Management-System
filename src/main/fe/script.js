// JavaScript to handle form submission and display an alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert (this is where you can send the data to a server or perform any other action)
    alert(`Form Submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear the form after submission
    document.getElementById('contact-form').reset();
});
