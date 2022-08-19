function palindrome(str) {
    
    let newStr = str.toLowerCase().replace(/[^0-9a-z]/g,'');
    let revStr = newStr.split("").reverse().join("");
    console.log(newStr)
    console.log(revStr)
    if (newStr === revStr) {
      alert("This is palindrome.");
    } else {
      alert("This is not palindrome.");
    }
    ;
  }
  
  