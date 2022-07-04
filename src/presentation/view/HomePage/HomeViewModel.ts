import { useState } from "react"

export default function HomeContentViewModel() {

	const encryptTextValues = {
		encrypt: "Criptografar",
		decrypt: "Descriptografar"
	}
	/** A cifra a ser usada para criptografar o texto */
	const [cipher, setCipher] = useState(0)

	/** O texto a ser criptografado */
	const [text, setText] = useState("")

	/** O texto criptografado */
	const [encryptedText, setEncryptedText] = useState("")

	/** O booleano que representa o estado de criptografar ou descriptografar */
	const [encrypt, setEncrypt] = useState(false)

	/** O texto que representa o estado de criptografia */
	const [encryptText, setEncryptText] = useState(encryptTextValues.encrypt)

	const [openSnackbar, setOpenSnackbar] = useState(false)

	/** Alterna o valor do texto entre criptografar e descriptografar */
	function toogleEncryptOrDecrypt() {
		setEncryptText(encrypt ? encryptTextValues.encrypt : encryptTextValues.decrypt)
	}

	function convertText () {
		if(text === "") {
			return
		}


		criptographyText()
		setOpenSnackbar(true)
	}

	/** Criptografa o texto */
	function criptographyText() {
		let outputText = ""
		let usedCipher = encrypt ? -cipher : cipher

		for(let character of text) {
			outputText += String.fromCharCode(character.charCodeAt(0) + usedCipher)
		}

		setEncryptedText(outputText)
	}

	/** Inverte o texto de entrada com o de saída */
	function inverseTextInputWithOutput() {
		setEncryptedText(text)
		setText(encryptedText)

		setEncrypt(!encrypt)
		toogleEncryptOrDecrypt()
	}

	function cleanTexts() {
		setText("")
		setEncryptedText("")
		setCipher(0)
	}


	return {
		text, setText,
		cipher, setCipher,
		encryptedText,
		criptographyText,
		encrypt, setEncrypt,
		encryptText, toogleEncryptOrDecrypt,
		inverseTextInputWithOutput,
		openSnackbar, setOpenSnackbar,
		convertText, cleanTexts
	}
}
