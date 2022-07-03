import { Box, Button, FormControl, Grid, Stack, Switch, TextareaAutosize, TextField, Typography } from "@mui/material"
import HomeViewModel from "./HomeViewModel"

function useViewModel() {
	return HomeViewModel()
}

/** A tela principal do site */
const HomeView = () => {
	const { text, setText, cipher, setCipher, encryptedText, criptographyText} = useViewModel()

	return (
		<Stack>
			<Typography variant="h1" color="primary">
				Cezar Encryption
			</Typography>
			<Grid container textAlign={"center"} direction={"column"} mt={8}>
			<FormControl component="fieldset" variant="standard">

			</FormControl>
				<Grid item>
					<TextField
						label="Cifra"
						helperText="A cifra usada para encriptar o texto"
						sx={{ textDecorationColor: "primary" }}
						type="number"
						name="cifra"
						style={{ width: 300 }}
						value={ cipher }
						onChange={e => setCipher(Number(e.target.value))}
					/>
				</Grid>
				<Grid item mt={6}>
					<Typography variant="h4" color="primary">
						O texto a ser criptografado
					</Typography>
					<Box mt={2}>
						<TextField
							id="standard-multiline-flexible"
							label="texto"
							multiline
							maxRows={5}
							variant="standard"
							style={{ width: 300 }}
							value={ text }
							onChange={ e => setText(e.target.value)}
						/>
					</Box>
				</Grid>
				<Grid item mt={6}>
					<Button variant="contained" onClick={ criptographyText }>CRIPTOGRAFAR</Button>
				</Grid>
				<Grid container mt={6} direction={"column"}>
					<Grid container mt={2} direction={"row"} justifyContent="center">
						<TextareaAutosize
							minRows={5}
							placeholder="Texto criptografado"
							style={{ width: 300 }}
							value={ encryptedText }
						/>
						<Button onClick={ () => {

							   if ('clipboard' in navigator) {
									navigator.clipboard.writeText(encryptedText);
								} else {
									document.execCommand('copy', true, encryptedText);
								}}}>Copiar</Button>
					</Grid>
				</Grid>
			</Grid>
		</Stack>
	)
}

export default HomeView
