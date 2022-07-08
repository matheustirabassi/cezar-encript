import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import KeyIcon from "@mui/icons-material/Key"
import LockIcon from "@mui/icons-material/Lock"
import {
	Alert,
	Box,
	Button,
	FormControlLabel,
	FormGroup,
	Grid,
	Snackbar,
	Switch,
	TextareaAutosize,
	TextField,
	Typography,
} from "@mui/material"
import { useState } from "react"
import HomeContentCaesarCipherViewModel from "./HomeContentCaesarCipherViewModel"
function useViewModel() {
	return HomeContentCaesarCipherViewModel()
}

/** A tela principal do site */
export default function HomeContentCaesarCipherView() {
	const {
		text,
		setText,
		cipher,
		setCipher,
		encryptedText,
		encrypt,
		setEncrypt,
		encryptText,
		toogleEncryptOrDecrypt,
		inverseTextInputWithOutput,
		openSnackbar,
		setOpenSnackbar,
		convertText,
		cleanTexts,
	} = useViewModel()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEncrypt(event.target.checked)
		toogleEncryptOrDecrypt()
	}

	const [buttonCopyClicked, setButtonCopyClicked] = useState(false)

	return (
		<Grid container direction="column">
			<Grid container direction={"column"} alignItems="center">
				<Grid item mt={2}>
					<Button onClick={cleanTexts} sx={{ width: 300 }}>
						Limpar
					</Button>
				</Grid>

				<Grid item mt={2}>
					<TextField
						label="Cifra"
						helperText="A cifra usada."
						sx={{ textDecorationColor: "primary" }}
						type="number"
						name="cifra"
						style={{ width: 300 }}
						value={cipher}
						onChange={(e) => setCipher(Number(e.target.value))}
					/>
				</Grid>

				<Grid item mt={2}>
					<Box mt={2}>
						<TextField
							id="standard-multiline-flexible"
							label="Texto"
							helperText="O texto usado para criptografar ou descriptografar."
							multiline
							maxRows={6}
							variant="outlined"
							sx={{ width: 300 }}
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
					</Box>
				</Grid>

				<Grid container mt={6} direction={"column"} alignItems={"center"}>
					<Grid item>
						<FormGroup>
							<FormControlLabel
								control={<Switch checked={encrypt} onChange={handleChange} />}
								label={encryptText}
							/>
						</FormGroup>
					</Grid>

					<Grid item mt={1}>
						<Button variant="contained" onClick={convertText} sx={{ width: 300, minHeight: 30 }}>
							<LockIcon fontSize="large" sx={{ display: encrypt ? "block" : "none"}} />
							<KeyIcon fontSize="large" sx={{ display: encrypt ? "none" : "block" }} />
						</Button>
					</Grid>

					<Grid item mt={1}>
						<Button
							variant="contained"
							onClick={inverseTextInputWithOutput}
							color="info"
							sx={{ minWidth: 300, minHeight: 30 }}
						>
							<ChangeCircleIcon fontSize="large" />
						</Button>
					</Grid>
				</Grid>

				<Grid container mt={6} direction={"column"}>
					<Grid container mt={2} direction={"row"} justifyContent="center">
						<TextareaAutosize
							minRows={5}
							placeholder="Texto criptografado"
							value={encryptedText}
							style={{ width: 300 }}
						/>
						<Button
							onClick={() => {
								if ("clipboard" in navigator) {
									navigator.clipboard.writeText(encryptedText)
								} else {
									document.execCommand("copy", true, encryptedText)
								}

								setButtonCopyClicked(true)
							}}
						>
							<ContentCopyIcon />
						</Button>
					</Grid>
				</Grid>
			</Grid>

			<Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
				<Alert severity="success">Texto convertido!</Alert>
			</Snackbar>

			<Snackbar
				open={buttonCopyClicked}
				autoHideDuration={2000}
				onClose={() => setButtonCopyClicked(false)}
			>
				<Alert severity="info">Texto criptografado copiado!</Alert>
			</Snackbar>

			<Grid container justifyContent="flex-end" mt={2} pr={4}>
				<Typography variant="h6" color="primary">
					feito com ❤️ por Matheus
				</Typography>
			</Grid>
		</Grid>
	)
}
