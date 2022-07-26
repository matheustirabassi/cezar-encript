import { AppBar, Box, Grid, Tab, Tabs, Typography } from "@mui/material"
import { TabPanel } from "presentation/components/TabPanel"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import SwipeableViews from "react-swipeable-views"
import HomeContentAESView from "./HomeContentAESView"
import HomeContentCaesarCipherView from "./HomeContentCaesarCipherView"

/** A tela principal do site */
export default function HomeView() {
	const { t } = useTranslation()

	const [value, setValue] = useState(0)

	const handleChange = (_event: unknown, newValue: number) => {
		setValue(newValue)
	}

	const handleChangeIndex = (index: number) => {
		setValue(index)
	}

	return (
		<>
			<Box>
				<AppBar position="static">
					<Tabs value={value} onChange={handleChange} variant="fullWidth" textColor="secondary">
						<Tab icon="🔐" label={t("aes")} {...a11yProps(0)} />

						<Tab
							icon={"🪙"}
							iconPosition="top"
							label={t("caesar_cipher_tab_title")}
							{...a11yProps(1)}
						></Tab>
					</Tabs>
				</AppBar>

				<SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
					<TabPanel value={value} index={0}>
						<HomeContentAESView />
					</TabPanel>

					<TabPanel value={value} index={1}>
						<HomeContentCaesarCipherView />
					</TabPanel>
				</SwipeableViews>

				<Grid container justifyContent="flex-end" mt={8} pr={4}>
					<Typography variant="h6" color="primary">
						{t("author_description")}
					</Typography>
				</Grid>
			</Box>
		</>
	)
	function a11yProps(index: any) {
		return {
			id: `action-tab-${index}`,
			"aria-controls": `action-tabpanel-${index}`,
		}
	}
}
