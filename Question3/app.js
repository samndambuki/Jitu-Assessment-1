function isArmstrongNumber(num) {
    // convert number to string to count number of digits
    const numStr = num.toString();
    const len = numStr.length;
  
    // initialize sum to 0
    let sum = 0;
  
    // loop through each digit and raise it to the power of the number of digits
    for (let i = 0; i < len; i++) {
      const digit = parseInt(numStr[i]);
      sum += Math.pow(digit, len);
    }
  
    // check if sum equals the original number
    if (sum === num) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isArmstrongNumber(153));