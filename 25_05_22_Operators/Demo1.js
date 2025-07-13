//1. Login Validation
function validateLogin(username, password) {
  const validUser = "admin";
  const validPass = "12345";
  return username === validUser && password === validPass;
}

//2. Calculate Discount
console.log(validateLogin("admin", "12345")); // true
console.log(validateLogin("user", "12345"));  // false

function calculateDiscount(price, discountPercent) {
  return price - (price * (discountPercent / 100));
}

console.log(calculateDiscount(1000, 10)); // 900

//3. Check Prime Number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false

//Generate Greeting Based on Time
function greetBasedOnTime(hour) {
  if (hour < 12) return "Good Morning!";
  else if (hour < 18) return "Good Afternoon!";
  else return "Good Evening!";
}

console.log(greetBasedOnTime(9));  // Good Morning!
console.log(greetBasedOnTime(15)); // Good Afternoon!

//7. Check if User is Admin (Access Control)
function isAdmin(user) {
  return user.role === "admin";
}

const user1 = { name: "Ravi", role: "admin" };
const user2 = { name: "Maya", role: "guest" };

console.log(isAdmin(user1)); // true
console.log(isAdmin(user2)); // false

//9. Generate Invoice ID
function generateInvoiceId() {
  return "INV" + Math.floor(Math.random() * 1000000);
}

console.log(generateInvoiceId()); // e.g. INV123456
//10. Check Palindrome (like racecar, madam)
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
