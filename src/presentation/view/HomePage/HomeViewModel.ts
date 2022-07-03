import { useState } from "react"

export default function HomeContentViewModel() {

	/** A cifra a ser usada para criptografar o texto */
	const [cipher, setCipher] = useState(0)

	/** O texto a ser criptografado */
	const [text, setText] = useState("")

	/** O texto criptografado */
	const [encryptedText, setEncryptedText] = useState("")

	function criptographyText() {
		let outputText = ""

		for(let character of text) {
			outputText += String.fromCharCode(character.charCodeAt(0) + cipher)
		}

		setEncryptedText(outputText)
	}

	return {
		text, setText,
		cipher, setCipher,
		encryptedText,
		criptographyText
	}
}
