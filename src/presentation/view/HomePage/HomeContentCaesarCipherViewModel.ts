import { useState } from "react"
import "crypto-js/aes"
import { useTranslation } from 'react-i18next';

export default function HomeContentCaesarCipherViewModel() {
	const { t } = useTranslation()

	const encryptTextValues = {
		encrypt: t("encrypt"),
		decrypt: t("decrypt")
	}

	/** A cifra a ser usada para criptografar o texto */
	const [cipher, setCipher] = useState<Number>(0)

	/** O texto a ser criptografado */
	const [text, setText] = useState("")

	/** O texto criptografado */
	const [encryptedText, setEncryptedText] = useState("")

	/** O booleano que representa o estado de criptografar */
	const [encrypt, setEncrypt] = useState(true)

	/** O texto que representa o estado de criptografia */
	const [encryptText, setEncryptText] = useState(encryptTextValues.encrypt)

	const [openSnackbar, setOpenSnackbar] = useState(false)

	/** Alterna o valor do texto entre criptografar e descriptografar
	 * Caso criptografar seja verdadeiro, muda o texto pra Descriptografar
	 * Caso criptografar seja falso, muda o texto pra Criptografar
	 */
	function toogleEncryptOrDecrypt() {
		setEncryptText(encrypt ? encryptTextValues.decrypt: encryptTextValues.encrypt)
	}

	function convertText () {
		if(text === "") {
			return
		}

		if (cipher === 0) {
			return
		}

		criptographyText()
		setOpenSnackbar(true)
	}

	/** Criptografa o texto */
	function criptographyText() {

		if (cipher === undefined) {
			return
		}

		let outputText = ""
		let usedCipher: Number = encrypt ? cipher : -cipher

		for(let character of String(text)) {
			outputText += String.fromCharCode(character.charCodeAt(0) + Number(usedCipher))
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
		setEncrypt(true)
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
