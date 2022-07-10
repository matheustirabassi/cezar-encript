import CryptoJS from "crypto-js"
import AES from "crypto-js/aes"
import { useState } from "react"
import { KindOfConvertEnum } from "utils/constants/Constants"

export default function HomeContentAESViewModel() {
	const [inputText, setInputText] = useState<String>()

	const [token, setToken] = useState<String>()

	const [kindOfConvert, setKindOfConvert] = useState<String>()

	const [outputText, setOutputText] = useState<String>()

	function encryptOrDecrypt() {
		if (!validate()) {
			return
		}

		let outputText = ""

		if (kindOfConvert === KindOfConvertEnum.ENCRYPT.toString()) {
			outputText = AES.encrypt(inputText as string, token as string).toString()
		} else if (kindOfConvert === KindOfConvertEnum.DECRYPT.toString()) {
			outputText = AES.decrypt(inputText as string, token as string).toString(CryptoJS.enc.Utf8)
		}

		setOutputText(outputText)
	}

	function validate() {
		if (inputText === undefined) {
			return false
		}

		return true
	}

	return {
		inputText,
		setInputText,
		token,
		setToken,
		kindOfConvert,
		setKindOfConvert,
		outputText,
		setOutputText,
		encryptOrDecrypt,
	}
}
