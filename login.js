// Simulated user data (replace this with an actual authentication system)
const users = [
    { username: "user1", password: "pass123" },
    { username: "user2", password: "secure456" }
  ];
  
  // Function to check login credentials
  function checkLogin(username, password) {
    for (const user of users) {
      if (user.username === username && user.password === password) {
        return true; // Valid credentials
      }
    }
    return false; // Invalid credentials
  }
  
  // Example usage
  const inputUsername = prompt("Enter your username:");
  const inputPassword = prompt("Enter your password:");
  
  if (checkLogin(inputUsername, inputPassword)) {
    console.log("Login successful!");
  } else {
    console.log("Invalid credentials. Please try again.");
  }