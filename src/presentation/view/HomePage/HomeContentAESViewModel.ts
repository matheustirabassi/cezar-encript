import CryptoJS from "crypto-js"
import AES from "crypto-js/aes"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { KindOfConvertEnum } from "utils/constants/Constants"

export default function HomeContentAESViewModel() {
	const { t } = useTranslation()

	const [inputText, setInputText] = useState<String>("")

	const [token, setToken] = useState<String>("")

	const [kindOfConvert, setKindOfConvert] = useState<String>()

	const [outputText, setOutputText] = useState<String>("")

	const [textWasConverted, setTextWasConverted] = useState(false)

	function encryptOrDecrypt() {
		setTextWasConverted(false)

		if (!validate()) {
			return
		}

		let outputText = ""

		if (kindOfConvert === KindOfConvertEnum.ENCRYPT.toString()) {
			outputText = AES.encrypt(inputText as string, token as string).toString()
		} else if (kindOfConvert === KindOfConvertEnum.DECRYPT.toString()) {
			outputText = AES.decrypt(inputText as string, token as string).toString(CryptoJS.enc.Utf8)
		}

		if (outputText === "") {
			setOutputText(t("token_invalid").toString())
			return
		}

		setOutputText(outputText)
		setTextWasConverted(true)
	}

	function validate() {
		if (inputText === undefined || inputText === "") {
			return false
		}

		if (kindOfConvert === undefined || kindOfConvert === "") {
			return false
		}

		if (token === undefined || token === "") {
			return false
		}

		return true
	}

	function clear() {
		setInputText("")
		setToken("")
		setKindOfConvert(undefined)
		setOutputText("")
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
		clear,
		textWasConverted,
		setTextWasConverted,
	}
}
