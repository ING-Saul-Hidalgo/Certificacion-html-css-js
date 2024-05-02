//proyecto 1
function palindrome(str) {
    // Eliminar caracteres no alfanuméricos y convertir a minúsculas
    var alphanumericStr = str.replace(/[\W_]/g, '').toLowerCase();
    // Comparar la cadena original con su reverso
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
  }
  
  // Ejecutar pruebas
  console.log(palindrome("eye")); // true
  console.log(palindrome("_eye")); // true
  console.log(palindrome("race car")); // true
  console.log(palindrome("not a palindrome")); // false
  console.log(palindrome("A man, a plan, a canal. Panama")); // true
  console.log(palindrome("never odd or even")); // true
  console.log(palindrome("nope")); // false
  console.log(palindrome("almostomla")); // false
  console.log(palindrome("My age is 0, 0 si ega ym.")); // true
  console.log(palindrome("1 eye for of 1 eye.")); // false
  console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
  console.log(palindrome("five|\_/|four")); // false

  //proyecto 2
  function convertToRoman(num) {
    var val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ];
    var syms = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];
    var roman_num = '';
    for (var i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            roman_num += syms[i];
            num -= val[i];
        }
    }
    return roman_num;
}

// Pruebas
console.log(convertToRoman(2));    // Output: II
console.log(convertToRoman(3));    // Output: III
console.log(convertToRoman(4));    // Output: IV
console.log(convertToRoman(5));    // Output: V
console.log(convertToRoman(9));    // Output: IX
console.log(convertToRoman(12));   // Output: XII
console.log(convertToRoman(16));   // Output: XVI
console.log(convertToRoman(29));   // Output: XXIX
console.log(convertToRoman(44));   // Output: XLIV
console.log(convertToRoman(45));   // Output: XLV
console.log(convertToRoman(68));   // Output: LXVIII
console.log(convertToRoman(83));   // Output: LXXXIII
console.log(convertToRoman(97));   // Output: XCVII
console.log(convertToRoman(99));   // Output: XCIX
console.log(convertToRoman(400));  // Output: CD
console.log(convertToRoman(500));  // Output: D
console.log(convertToRoman(501));  // Output: DI
console.log(convertToRoman(649));  // Output: DCXLIX
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(891));  // Output: DCCCXCI
console.log(convertToRoman(1000)); // Output: M
console.log(convertToRoman(1004)); // Output: MIV
console.log(convertToRoman(1006)); // Output: MVI
console.log(convertToRoman(1023)); // Output: MXXIII
console.log(convertToRoman(2014)); // Output: MMXIV
console.log(convertToRoman(3999));// Output: MMMCMXCIX

//proyecto 3 

function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        return String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65);
    });
}

// Pruebas
console.log(rot13("SERR PBQR PNZC"));  // Output: FREE CODE CAMP
console.log(rot13("SERR CVMMN!"));     // Output: FREE PIZZA!
console.log(rot13("SERR YBIR?"));      // Output: FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));  // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// proyecto 4 validacion

function telephoneCheck(str) {
    // Patrón para validar números de teléfono
    var phonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    // Comprobación si el número coincide con el patrón
    return phonePattern.test(str);
  }
  
  // Pruebas
  console.log(telephoneCheck("555-555-5555"));    // true
  console.log(telephoneCheck("1 555-555-5555"));  // true
  console.log(telephoneCheck("1 (555) 555-5555"));// true
  console.log(telephoneCheck("5555555555"));      // true
  console.log(telephoneCheck("555-5555"));        // false
  console.log(telephoneCheck("1 555)555-5555"));  // false
  console.log(telephoneCheck("1 555 555 5555"));  // true
  console.log(telephoneCheck("1 456 789 4444"));  // true

  //proyecto 5

  function checkCashRegister(price, cash, cid) {
    const currencyUnits = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    };
  
    let changeNeeded = cash - price;
    let totalCid = 0;
    for (let i = 0; i < cid.length; i++) {
      totalCid += cid[i][1];
    }
    totalCid = parseFloat(totalCid.toFixed(2));
    
    if (totalCid < changeNeeded) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalCid === changeNeeded) {
      return {status: "CLOSED", change: cid};
    } else {
      let change = [];
      for (let i = cid.length - 1; i >= 0; i--) {
        const coinName = cid[i][0];
        const coinTotal = cid[i][1];
        const coinValue = currencyUnits[coinName];
        let coinCount = Math.floor(coinTotal / coinValue);
        let coinAmountToReturn = 0;
        while (changeNeeded >= coinValue && coinCount > 0) {
          changeNeeded -= coinValue;
          changeNeeded = parseFloat(changeNeeded.toFixed(2));
          coinAmountToReturn += coinValue;
          coinCount--;
        }
        if (coinAmountToReturn > 0) {
          change.push([coinName, coinAmountToReturn]);
        }
      }
      if (changeNeeded > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: change};
    }
  }
  
  // Ejemplos de uso
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  