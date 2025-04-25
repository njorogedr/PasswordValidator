function password(str) {
    // Check for minimum length
    if (str.length < 8) return false;

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(str)) return false;

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(str)) return false;

    // Check for at least one number
    if (!/[0-9]/.test(str)) return false;

    // If all checks pass
    return true;
}

// Test cases (T Case:)
console.log("T Case: 1", password("Abcd1234")); // true
console.log("T Case: 2", password("Abcd123"));  // false
console.log("T Case: 3", password("abcd1234")); // false
console.log("T Case: 4", password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")); // true
console.log("T Case: 5", password("ABCD1234")); // false
console.log("T Case: 6", password("Ab1!@#$%^&*()-_+={}[]|\\:;?/>.<,")); // true
console.log("T Case: 7", password("!@#$%^&*()-_+={}[]|\\:;?/>.<,"));     // false
// To run this code, you can use vscode node cmd terminal (node my_script.js) or any JavaScript environment that supports ES6 syntax.
// also executable in browser console.



