import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  pt: {
    translation: {
      "caesar_cipher_tab_title": "Cifra de César",
			"clear": "Limpar",
			"text": "Texto",
			"cipher": "Cifra",
			"used_cipher_description": "A cifra usada.",
			"used_text_description": "O texto usado para criptografar ou descriptografar.",
			"encrypt": "Criptografar",
			"decrypt": "Descriptografar",
			"encrypted_text_description": "Texto criptografado",
			"author_description": "feito com ❤️ por Matheus",
			"aes": "AES",
			"token": "Token",
			"token_description": "O token a ser usado para criptografar ou descriptografar o texto.",
			"encrypted_text_copied": "Texto criptografado copiado!",
			"text_converted": "Texto convertido!",
			"transform" : "transformar",
			"token_invalid": "O token inserido é inválido"
    }
  },
  en: {
    translation: {
      "caesar_cipher_tab_title": "Caesar Cipher",
			"clear": "Clear",
			"text": "Text",
			"cipher": "Cipher",
			"used_cipher_description": "The cipher used",
			"used_text_description": "The text used to encrypt or decrypt.",
			"token_description": "The token to use to encrypt or decrypt text.",
			"encrypt": "Encrypt",
			"decrypt": "Decrypt",
			"encrypted_text_description": "Encrypted text",
			"author_description": "made with ❤️ by Matheus",
			"aes": "AES",
			"token": "token",
			"encrypted_text_copied": "Encrypted text copied!",
			"text_converted": "Converted text!",
			"transform" : "transform",
			"token_invalid": "The inserted token is invalid"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pt", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
