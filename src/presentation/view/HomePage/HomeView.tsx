import { AppBar, Box, Tab, Tabs } from "@mui/material"
import TabPanel from "presentation/components/TabPanel"
import { useState } from "react"
import SwipeableViews from "react-swipeable-views"
import HomeContentCaesarCipherView from "./HomeContentCaesarCipherView"

/** A tela principal do site */
export default function HomeView() {
	const [value, setValue] = useState(0)

	const handleChange = (_event: unknown, newValue: number) => {
		setValue(newValue)
	}

	const handleChangeIndex = (index: number) => {
		setValue(index)
	}

	return (
		<Box>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} variant="fullWidth" textColor="secondary">
					<Tab label="Caesar Cipher" {...a11yProps(0)} />

					<Tab label="👀" {...a11yProps(1)} />
				</Tabs>
			</AppBar>

			<SwipeableViews index={value} onChangeIndex={handleChangeIndex} >
				<TabPanel value={value} index={0} >
					<HomeContentCaesarCipherView />
				</TabPanel>

				<TabPanel value={value} index={1} >
					Item Two
				</TabPanel>
			</SwipeableViews>
		</Box>
	)
	function a11yProps(index: any) {
		return {
			id: `action-tab-${index}`,
			"aria-controls": `action-tabpanel-${index}`,
		}
	}
}
