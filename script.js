    function validateForm() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return false;
      }
      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
      }
      return true;
    }