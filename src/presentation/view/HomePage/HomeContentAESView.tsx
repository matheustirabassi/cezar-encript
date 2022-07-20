import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"
import {
	Alert,
	Button,
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel, InputAdornment,
	InputLabel,
	OutlinedInput,
	Radio,
	RadioGroup,
	Snackbar,
	TextareaAutosize
} from "@mui/material"
import Grid from "@mui/material/Grid/Grid"
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

	return (
		<Grid container direction={"column"} alignContent="center">
			<Grid item mt={2}>
				<Grid container direction="column">
				<Button onClick={() => viewModel.clear()} >
					{t("clear")}
				</Button>
				</Grid>
			</Grid>

			<Grid item mt={2}>
				<FormControl fullWidth sx={{ m: 1 }}>
					<InputLabel htmlFor="input-text">{t("text")}</InputLabel>
					<OutlinedInput
						id="input-text"
						maxRows={5}
						multiline
						label={t("text")}
						autoFocus={true}
						value={viewModel.inputText}
						onChange={(e) => viewModel.setInputText(String(e.target.value))}
						endAdornment={
							<InputAdornment position="end">
								<Button
									onClick={async () => {
										viewModel.setInputText(await navigator.clipboard.readText())
									}}
								>
									<ContentPasteIcon />
								</Button>
							</InputAdornment>
						}
					/>
					<FormHelperText id="input-helper-text">{t("used_text_description")}</FormHelperText>
				</FormControl>
			</Grid>

			<Grid item mt={2}>
				<FormControl fullWidth sx={{ m: 1 }}>
					<InputLabel htmlFor="token">{t("token")}</InputLabel>
					<OutlinedInput
						id="token"
						label={t("token")}
						maxRows={5}
						multiline
						endAdornment={
							<InputAdornment position="end">
								<Button
									onClick={async () => {
										viewModel.setToken(await navigator.clipboard.readText())
									}}
								>
									<ContentPasteIcon />
								</Button>

								<Button
									onClick={() => {
										navigator.clipboard.writeText(viewModel.token as string)
										setButtonCopy(true)
									}}
								>
									<ContentCopyIcon />
								</Button>
							</InputAdornment>
						}
						value={viewModel.token}
						onChange={(e) => viewModel.setToken(String(e.target.value))}
					/>
					<FormHelperText id="input-helper-text">{t("token_description")}</FormHelperText>
				</FormControl>
			</Grid>

			<Grid item mt={6}>
				<FormControl fullWidth sx={{ m: 1 }}>
					<FormLabel htmlFor="kind-of-convert">Tipo</FormLabel>
					<RadioGroup
						id="kind-of-convert"
						row
						aria-labelledby="kind-of-convert"
						name="type-radio-buttons"
						sx={{ justifyContent: "space-between" }}
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
						}}
					>
						{t("transform")}
					</Button>
				</Grid>
			</Grid>

			<Grid item mt={2}>
				<Grid container justifyContent={"center"} direction={"column"}>
					<FormControl fullWidth>
						<TextareaAutosize
							minRows={5}
							placeholder={t("encrypted_text_description")}
							value={viewModel.outputText as string}
							contentEditable={false}
						/>
					</FormControl>

					<Button
						variant="outlined"
						onClick={() => {
							navigator.clipboard.writeText(viewModel.outputText as string)
							setButtonCopy(true)
						}}
					>
						<ContentCopyIcon />
					</Button>
				</Grid>
			</Grid>

			<Snackbar open={buttonCopy} autoHideDuration={2000} onClose={() => setButtonCopy(false)}>
				<Alert severity="info">{t("encrypted_text_copied")}</Alert>
			</Snackbar>

			<Snackbar
				open={viewModel.textWasConverted}
				autoHideDuration={2000}
				onClose={() => viewModel.setTextWasConverted(false)}
			>
				<Alert severity="success">{t("text_converted")}</Alert>
			</Snackbar>
		</Grid>
	)
}
