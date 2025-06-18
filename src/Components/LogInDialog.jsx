import { useEffect, useState } from "react";
import {
    Dialog,
    Box,
    Tabs,
    Tab,
} from "@mui/material";
import LogIn from "./LogIn";

const TabPanel = ({ children, value, index }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
        >
            {
                value === index && <Box sx={{ p: 4 }}> {children}</Box>
            }
        </div>
    )
}

const LogInDialog = ({ isSignUp, openModal, setOpenModal, setIsSignUp }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleClose = () => {
        setOpenModal(false);
        setIsSignUp(false);
        setValue(0)
    }

    useEffect(() => {
        setValue(isSignUp ? 1 : 0);
    }, [isSignUp])

    const handleSignUpClick = () => {
        setValue(1);
    }
    return (
        <Dialog
            open={openModal}
            onClose={handleClose}
        >
            <Box className='max-w-md'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="SIGN IN" {...a11yProps(0)} sx={{ width: 1 / 2 }} />
                        <Tab label="SIGN UP" {...a11yProps(1)} sx={{ width: 1 / 2 }} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <LogIn type="signIn" setOpenModal={setOpenModal} handleSignUpClick={handleSignUpClick} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <LogIn type="signUp" setOpenModal={setOpenModal} />
                </TabPanel>
            </Box>

        </Dialog>
    );
};

export default LogInDialog;
