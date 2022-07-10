import HomeContentAESViewModel from "presentation/view/HomePage/HomeContentAESViewModel"
import { act } from "react-dom/test-utils"
import React from "react"

export {}

let viewModel = HomeContentAESViewModel()

beforeEach(() => {
	viewModel = HomeContentAESViewModel()
})

// region encryptOrDecrypt tests

test("encrypt Or Decrypt tests", () => {
	const text = "Gabrielle Borges"
	const token = "Matheus"

	act(() => {
		viewModel.setInputText(text)
		viewModel.setToken(token)
	})

	act(() => {
		viewModel.encryptOrDecrypt()
	})

	const expectedOutputText = "abacate"

	expect(viewModel.outputText).not.toEqual(expectedOutputText)
})

// endregion
