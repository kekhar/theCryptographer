// Функция для обновления зашифрованного сообщения при нажатии кнопки "Зашифровать"
function updateEncryptedMessage() {
	let message = document.getElementById('plainMessage').value;
	let shift = parseInt(document.getElementById('shiftEncrypt').value) || 0;
	let result = encrypt(message, shift);
	document.getElementById('encryptedMessage').value = result;
 }
 
 // Функция для обновления расшифрованного сообщения при нажатии кнопки "Расшифровать"
 function updateDecryptedMessage() {
	let message = document.getElementById('cipherMessage').value;
	let shift = parseInt(document.getElementById('shiftDecrypt').value) || 0;
	let result = decrypt(message, shift);
	document.getElementById('decryptedMessage').value = result;
 }
 
 // Функция шифрования с поддержкой русского и английского алфавитов
 function encrypt(message, shift) {
	let result = '';
 
	for (let i = 0; i < message.length; i++) {
	    let char = message[i];
 
	    if (char.match(/[a-z]/i)) {
		   // Шифрование латинских букв
		   let code = message.charCodeAt(i);
 
		   if (code >= 65 && code <= 90) {
			  char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
		   } else if (code >= 97 && code <= 122) {
			  char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
		   }
	    } else if (char.match(/[а-яё]/i)) {
		   // Шифрование русских букв
		   let code = message.charCodeAt(i);
		   let isUpperCase = (code >= 1040 && code <= 1071);

		   if (isUpperCase) {
			  char = String.fromCharCode(((code - 1040 + shift) % 32) + 1040);
		   } else {
			  char = String.fromCharCode(((code - 1072 + shift) % 32) + 1072);
		   }
	    }
 
	    result += char;
	}
 
	return result;
 }
 
 // Функция расшифровки с поддержкой русского и английского алфавитов
 function decrypt(message, shift) {
	let result = '';
 
	for (let i = 0; i < message.length; i++) {
	    let char = message[i];
 
	    if (char.match(/[a-z]/i)) {
		   // Расшифровка латинских букв
		   let code = message.charCodeAt(i);
 
		   if (code >= 65 && code <= 90) {
			  char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
		   } else if (code >= 97 && code <= 122) {
			  char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
		   }
	    } else if (char.match(/[а-яё]/i)) {
		   // Расшифровка русских букв
		   let code = message.charCodeAt(i);
		   let isUpperCase = (code >= 1040 && code <= 1071);
 
		   if (isUpperCase) {
			  char = String.fromCharCode(((code - 1040 - shift + 32) % 32) + 1040);
		   } else {
			  char = String.fromCharCode(((code - 1072 - shift + 32) % 32) + 1072);
		   }
	    }
 
	    result += char;
	}
 
	return result;
 }
 