import {
	Box,
	Button,
	FormControlLabel,
	FormGroup,
	Grid,
	Stack,
	Switch,
	TextareaAutosize,
	TextField,
	Typography,
} from "@mui/material"
import HomeViewModel from "./HomeViewModel"

function useViewModel() {
	return HomeViewModel()
}

/** A tela principal do site */
const HomeView = () => {
	const {
		text,
		setText,
		cipher,
		setCipher,
		encryptedText,
		criptographyText,
		encrypt,
		setEncrypt,
		encryptText,
		toogleEncryptOrDecrypt,
		inverseTextInputWithOutput,
	} = useViewModel()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEncrypt(event.target.checked)
		toogleEncryptOrDecrypt()
	}

	return (
		<Stack>
			<Typography variant="h1" color="primary">
				Cezar Encryption
			</Typography>
			<Grid
				container
				textAlign={"center"}
				direction={"column"}
				mt={8}
				justifyContent="center"
				alignItems={"center"}
			>
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
							label={"Texto"}
							helperText="O texto usado para criptografar ou descriptografar."
							multiline
							maxRows={5}
							variant="outlined"
							style={{ width: 300 }}
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
						<Button variant="contained" onClick={criptographyText}>
							CONVERTER
						</Button>
					</Grid>
					<Grid item mt={1}>
						<Button variant="contained" onClick={inverseTextInputWithOutput} color="info">
							INVERTER TEXTO
						</Button>
					</Grid>
				</Grid>
				<Grid container mt={6} direction={"column"}>
					<Grid container mt={2} direction={"row"} justifyContent="center">
						<TextareaAutosize
							minRows={5}
							placeholder="Texto criptografado"
							style={{ width: 300 }}
							value={encryptedText}
						/>
						<Button
							onClick={() => {
								if ("clipboard" in navigator) {
									navigator.clipboard.writeText(encryptedText)
								} else {
									document.execCommand("copy", true, encryptedText)
								}
							}}
						>
							Copiar
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Stack>
	)
}

export default HomeView
