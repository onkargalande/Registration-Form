// Form validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const country = document.getElementById('country').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
  
    // Client-side validation
    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }
  
    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    if (country === '') {
      alert('Please select your country.');
      return;
    }
  
    if (!agreeTerms) {
      alert('Please agree to the terms and conditions.');
      return;
    }
  
    // If all validations pass, submit the form
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Country:', country);
    console.log('Terms agreed:', agreeTerms);
    alert('Registration successful!');
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  