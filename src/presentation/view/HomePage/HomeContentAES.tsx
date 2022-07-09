import {
	Button, FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextareaAutosize
} from "@mui/material"
import Grid from "@mui/material/Grid/Grid"
import TextField from "@mui/material/TextField/TextField"
import { useTranslation } from "react-i18next"

/** A tela principal do site */
export default function HomeContentAESView() {
	const { t } = useTranslation()
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
				/>
			</Grid>

			<Grid item mt={2}>
				<FormControl>
					<FormLabel id="demo-row-radio-buttons-group-label">Tipo</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
					>
						<FormControlLabel value="encrypt" control={<Radio />} label={t("encrypt")} />
						<FormControlLabel value="decrypt" control={<Radio />} label={t("decrypt")} />
					</RadioGroup>
				</FormControl>
			</Grid>

			<Grid item mt={2}>
				<Grid container justifyContent={"center"}>
					<Button variant="contained">TRANSFORMAR</Button>
				</Grid>
			</Grid>

			<Grid item mt={2}>
				<TextareaAutosize
					minRows={5}
					placeholder={t("encrypted_text_description")}
					style={{ width: 300 }}
				/>
			</Grid>
		</Grid>
	)
}
