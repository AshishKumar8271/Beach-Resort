import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirebaseErrorMessage } from "../Firebase/firebaseErrorHandler";


export const signUpUser = createAsyncThunk('auth/signUpUser', async ({ name, email, password }, { rejectWithValue }) => {
    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCred.user;

        await updateProfile(user, {
            displayName: name,
        });

        return { name: user.displayName, email: user.email };
    } catch (err) {
        const errMessage = getFirebaseErrorMessage(err.code);
        return rejectWithValue(errMessage);
    }
})

export const signInUser = createAsyncThunk('auth/signInUser', async ({ email, password }, { rejectWithValue }) => {
    try {
        const getUser = await signInWithEmailAndPassword(auth, email, password);
        const user = getUser.user;

        return { name: user.displayName, email: user.email };
    } catch (err) {
        const errMessage = getFirebaseErrorMessage(err.code);
        return rejectWithValue(errMessage);
    }
})


const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: null,
        loading: false,
    },
    extraReducers: (builder) => {
        // Sign Up User
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        builder.addCase(signUpUser.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.user = null;
        }),

            //Sign In User
            builder.addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            }),
            builder.addCase(signInUser.rejected, (state, action) => {
                console.log(action.error);
                state.loading = false;
                state.error = action.payload;
            }),
            builder.addCase(signInUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.user = null;
            })
    }
});

export const { login, logout, loginClick, signUpClick, toggleModal, adminSignClick } = AuthSlice.actions;
export default AuthSlice.reducer;