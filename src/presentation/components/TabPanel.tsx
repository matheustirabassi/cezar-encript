import { Box, Typography } from "@mui/material";

export interface TabPanelProps {
  children?: React.ReactNode;

  dir?: string;

  index: Number;

  value: Number;
}

export const TabPanel = ({ children, index, value } : TabPanelProps) => {

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </Typography>
  )
}
