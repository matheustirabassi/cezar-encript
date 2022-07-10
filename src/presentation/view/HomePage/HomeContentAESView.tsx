import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import {
	Alert,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Snackbar,
	TextareaAutosize,
} from "@mui/material"
import Grid from "@mui/material/Grid/Grid"
import TextField from "@mui/material/TextField/TextField"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { KindOfConvertEnum } from "utils/constants/Constants"
import HomeContentAESViewModel from "./HomeContentAESViewModel"

function useViewModel() {
	return HomeContentAESViewModel()
}

/** A aba AES do site */
export default function HomeContentAESView() {
	const { t } = useTranslation()

	const viewModel = useViewModel()

	const [buttonCopy, setButtonCopy] = useState(false)

	const [buttonTransform, setButtonTransform] = useState(false)

	return (
		<Grid container direction={"column"} alignContent="space-around">
			<Grid item mt={2}>
				<TextField
					variant="filled"
					label={t("text")}
					helperText={t("used_text_description")}
					maxRows={5}
					multiline
					sx={{ maxWidth: "300px" }}
					value={viewModel.inputText}
					onChange={(e) => viewModel.setInputText(String(e.target.value))}
				/>
			</Grid>

			<Grid item mt={2}>
				<TextField
					variant="filled"
					label={t("token")}
					helperText={t("token_description")}
					maxRows={5}
					multiline
					sx={{ maxWidth: "300px" }}
					value={viewModel.token}
					onChange={(e) => viewModel.setToken(String(e.target.value))}
				/>
			</Grid>

			<Grid item mt={2}>
				<FormControl>
					<FormLabel id="demo-row-radio-buttons-group-label">Tipo</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="type-radio-buttons"
						value={viewModel.kindOfConvert ?? null}
						onChange={(e) => viewModel.setKindOfConvert(e.target.value)}
					>
						<FormControlLabel
							value={KindOfConvertEnum.ENCRYPT}
							control={<Radio />}
							label={t("encrypt")}
						/>
						<FormControlLabel
							value={KindOfConvertEnum.DECRYPT}
							control={<Radio />}
							label={t("decrypt")}
						/>
					</RadioGroup>
				</FormControl>
			</Grid>

			<Grid item mt={2}>
				<Grid container justifyContent={"center"}>
					<Button
						variant="contained"
						onClick={() => {
							viewModel.encryptOrDecrypt()
							setButtonTransform(true)
						}}
					>
						TRANSFORMAR
					</Button>
				</Grid>
			</Grid>

			<Grid item mt={2}>
				<Grid container justifyContent={"center"}>
					<TextareaAutosize
						minRows={5}
						placeholder={t("encrypted_text_description")}
						value={viewModel.outputText as string}
						style={{ maxWidth: "300", width: "250px" }}
					/>

					<Button
						onClick={(e) => {
							navigator.clipboard.writeText(viewModel.outputText as string)
							setButtonCopy(true)
						}}
					>
						<ContentCopyIcon />
					</Button>
				</Grid>
			</Grid>

			<Snackbar open={buttonCopy} autoHideDuration={2000} onClose={() => setButtonCopy(false)}>
				<Alert severity="info">Texto criptografado copiado!</Alert>
			</Snackbar>

			<Snackbar
				open={buttonTransform}
				autoHideDuration={2000}
				onClose={() => setButtonTransform(false)}
			>
				<Alert severity="success">Texto convertido!</Alert>
			</Snackbar>
		</Grid>
	)
}
