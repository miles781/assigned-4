class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    toJSON() {
      return JSON.stringify({ name: this.name, email: this.email });
    }
  }
  
  // Create a new user object
  const newUser = new User('Igogo Ebenezer', 'sirigogoebenezer@gmail.com');
  
  // Convert user object to JSON
  const userJSON = newUser.toJSON();
  console.log('User JSON:', userJSON);
  
  // Define a class for form validation
  class FormValidator {
    constructor() {
      this.nameRegex = /^[a-zA-Z\s]+$/;
      this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }
  
    validateName(name) {
      return this.nameRegex.test(name);
    }
  
    validateEmail(email) {
      return this.emailRegex.test(email);
    }
  }
  
  // Create a new form validator
  const validator = new FormValidator();
  
  // Validate user input
  const userName = 'John Doe';
  const userEmail = 'john@example.com';
  
  console.log('Name validation:', validator.validateName(userName));
  console.log('Email validation:', validator.validateEmail(userEmail));
  