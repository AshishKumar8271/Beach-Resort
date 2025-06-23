import { useEffect, useState } from "react";
import {
    Button,
    TextField,
    Alert,
    Avatar,
    Box,
    Typography,
    FormControlLabel,
    Checkbox,
    FormControl,
    RadioGroup,
    FormLabel,
    Radio,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IoAddCircleOutline } from "react-icons/io5";
import { signInUser, signUpUser } from "../Features/AuthSlice";
import { FaLock } from "react-icons/fa6";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const LogIn = ({ type, setOpenModal, handleSignUpClick = () => { } }) => {
    const { user, loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [termsError, setTermsError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === "signUp") {
            if (!acceptTerms) {
                setTermsError("Please accept the terms to sign up.");
                return;
            }
            setTermsError("");
            dispatch(signUpUser({ name, email, password, gender }));
        } else {
            dispatch(signInUser({ email, password }));
        }

        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        setAcceptTerms(false);
    };

    useEffect(() => {
        if (user && !loading && !error) {
            setOpenModal(false);
            if (type === "signIn") {
                toast.success("Signed in successfully!");
            } else if (type === "signUp") {
                toast.success("Account created successfully!");
            }
        }
    }, [user, loading, error, setOpenModal, type]);

    return (
        <form onSubmit={handleSubmit}>
            {error && (
                <Alert severity="error" className="mb-4">
                    {error}
                </Alert>
            )}
            {termsError && (
                <Alert severity="error" className="mb-2">{termsError}</Alert>
            )}
            <Box className="flex flex-col items-center mb-2 gap-2">
                <Avatar sx={{ bgcolor: "primary.main", height: 60, width: 60 }}>
                    {type === "signIn" ? (
                        <FaLock className="text-2xl" />
                    ) : (
                        <IoAddCircleOutline className="text-3xl" />
                    )}
                </Avatar>
                <Typography component="h1" variant="h5">
                    {type === "signIn" ? "Sign In" : "Sign Up"}
                </Typography>
            </Box>
            {type === "signUp" && (
                <TextField
                    value={name}
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
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
                variant="standard"
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
                variant="standard"
                fullWidth
                className="w-full"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {type === "signUp" && (
                <FormControl className="!mt-2">
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                        />
                    </RadioGroup>
                </FormControl>
            )}
            {type === "signIn" ? (
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Me"
                />
            ) : (
                <FormControlLabel
                    control={<Checkbox checked={acceptTerms} onChange={e => setAcceptTerms(e.target.checked)} />}
                    label={<span className="text-sm sm:text-base">I accept the terms and conditions</span>}
                />
            )}
            <Button
                type="submit"
                variant="contained"
                disabled={loading}
                loading={loading}
                loadingPosition="start"
                fullWidth
            >
                {type === "signIn" ? "SIGN IN" : "SIGN UP"}
            </Button>
            {type === "signIn" && (
                <Typography variant="body2" className="text-center">
                    Don&apos;t have an account?
                    <Button
                        variant="text"
                        className="hover:bg-transparent"
                        disableRipple
                        disableFocusRipple
                        disableElevation
                        onClick={() => handleSignUpClick()}
                    >
                        Sign Up
                    </Button>
                </Typography>
            )}
        </form>
    );
};

LogIn.propTypes = {
    type: PropTypes.string.isRequired,
    setOpenModal: PropTypes.func.isRequired,
    handleSignUpClick: PropTypes.func,
};

export default LogIn;
