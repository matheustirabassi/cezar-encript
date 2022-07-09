
import { useTranslation } from 'react-i18next';

/** A tela principal do site */
export default function HomeContentAESView() {

	const { t } = useTranslation()

	function test() {
		var CryptoJS = require("crypto-js")
		let encrypted = CryptoJS.AES.encrypt("abacate", "Elle").toString();
		console.info(encrypted)

		let bytes = CryptoJS.AES.decrypt(encrypted, "Elle")
		console.info(bytes.toString(CryptoJS.enc.Utf8))
	}
	test()
	return (<><h1>{t("aes")}</h1></>
	)
}
