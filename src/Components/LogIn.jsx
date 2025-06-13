import React, { useEffect, useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    CircularProgress,
    Alert,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { signInUser, signUpUser } from "../Features/AuthSlice";

const LogIn = ({ isSignUp, openModal, setOpenModal, toggleSignUp }) => {
    const { user, loading, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);


    const toggleAdmin = () => {
        setIsAdmin(!isAdmin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isAdmin) {
            console.log('Admin Sign In');
        }
        else if (!isAdmin && isSignUp) {
            dispatch(signUpUser({ name, email, password }));
        }
        else {
            dispatch(signInUser({ email, password }));
        }

        setName('');
        setEmail('');
        setPassword('');
    };


    useEffect(() => {
        if (user) {
            setOpenModal(false);
        }
    }, [user, setOpenModal])

    return (
        <>
            <Dialog
                open={openModal}
                onClose={!loading && (() => setOpenModal(false))}
                className="transition-transform transform-gpu duration-300 ease-in-out"
                style={{
                    transform: openModal ? "scale(1)" : "scale(0.9)",
                    opacity: openModal ? 1 : 0,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle className="text-2xl font-bold text-center">
                        {
                            isAdmin ? 'Admin Sign In' : isSignUp ? 'User Sign Up' : 'User Sign In'
                        }
                    </DialogTitle>
                    <DialogContent className="p-4">
                        {error && <Alert severity="error" className="mb-4">{error}</Alert>}
                        {isSignUp && (
                            <TextField
                                value={name}
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                className="w-full"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        )}
                        <TextField
                            value={email}
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            className="w-full"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            value={password}
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            className="w-full"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </DialogContent>
                    <DialogActions className=" -mt-6 mb-2 p-4">
                        {loading && <CircularProgress size={30} className="block my-4" />}
                        <Button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </Button>
                    </DialogActions>
                    <hr className="border-gray-300" />
                    <DialogActions className="flex justify-between p-4">
                        <Button
                            onClick={toggleSignUp}
                            className="text-blue-500 flex-1"
                        >
                            {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
                        </Button>
                        <Button onClick={toggleAdmin} className="text-blue-500 flex-1">
                            {isAdmin ? "Switch to User Sign In" : "Switch to Admin Sign In"}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default LogIn;
