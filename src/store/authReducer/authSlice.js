import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null,
    userLoading: true,
    redirect: '/'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        setUserLoading(state, action) {
            state.userLoading = action.payload;
        },
        setRedirect(state, action) {
            state.redirect = action.payload
        }
    }
})

export const { setToken, setUser, setUserLoading, setRedirect } = authSlice.actions;