// Caesar Cipher: Encryption
function caesarEncrypt() {
    let text = document.getElementById('caesar-text').value;
    let shift = parseInt(document.getElementById('caesar-shift').value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let charCode = text.charCodeAt(i);

            // Uppercase letters
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            }
            // Lowercase letters
            else if (charCode >= 97 && charCode <= 122) {
                result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            }
        } else {
            result += char; // Non-alphabetic characters remain unchanged
        }
    }

    document.getElementById('caesar-result').innerText = result;
}

// Caesar Cipher: Decryption
function caesarDecrypt() {
    let text = document.getElementById('caesar-text').value;
    let shift = parseInt(document.getElementById('caesar-shift').value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let charCode = text.charCodeAt(i);

            // Uppercase letters
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
            }
            // Lowercase letters
            else if (charCode >= 97 && charCode <= 122) {
                result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
            }
        } else {
            result += char; // Non-alphabetic characters remain unchanged
        }
    }

    document.getElementById('caesar-result').innerText = result;
}

// Vigenère Cipher: Encryption
function vigenereEncrypt() {
    let text = document.getElementById('vigenere-text').value.toLowerCase();
    let key = document.getElementById('vigenere-key').value.toLowerCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/)) {
            let charCode = text.charCodeAt(i);
            let keyCode = key.charCodeAt(keyIndex % key.length) - 97;

            result += String.fromCharCode(((charCode - 97 + keyCode) % 26) + 97);
            keyIndex++;
        } else {
            result += char; // Non-alphabetic characters remain unchanged
        }
    }

    document.getElementById('vigenere-result').innerText = result;
}

// Vigenère Cipher: Decryption
function vigenereDecrypt() {
    let text = document.getElementById('vigenere-text').value.toLowerCase();
    let key = document.getElementById('vigenere-key').value.toLowerCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/)) {
            let charCode = text.charCodeAt(i);
            let keyCode = key.charCodeAt(keyIndex % key.length) - 97;

            result += String.fromCharCode(((charCode - 97 - keyCode + 26) % 26) + 97);
            keyIndex++;
        } else {
            result += char; // Non-alphabetic characters remain unchanged
        }
    }

    document.getElementById('vigenere-result').innerText = result;
}
