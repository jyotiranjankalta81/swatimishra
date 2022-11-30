import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { serverInstance } from '../../API/ServerInstance'

const initialState = {
    token: null,
    role: null,
    sessionID: null,
    loading: false,
    error: false,
    message: ""
}

export const userLogin = createAsyncThunk('authentication/login', async (data, { rejectWithValue }) => {
    try {
        let response = await serverInstance('user/login', 'POST', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const userRegister = createAsyncThunk('authentication/register', async (data, { rejectWithValue }) => {
    try {
        let response = await serverInstance('user/register', 'POST', data)
        console.log(response, 'this is res');
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        resetAuthNotification: (state) => {
            state.error = false
            state.message = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload.success;
                state.message = action.payload.message
                state.token = action.payload.data.tokens
                state.role = action.payload.data.userrole
                state.sessionID = action.payload.data.sessionid
                localStorage.setItem("token", JSON.stringify(action.payload.data.tokens));
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
            .addCase(userRegister.pending, (state) => {
                state.loading = true;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload.success;
                state.message = action.payload.message
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
    }
})

export const selectAuthErrorStatus = (state) => state.auth.error
export const selectAuthMessage = (state) => state.auth.message
export const { resetAuthNotification } = authenticationSlice.actions;
export default authenticationSlice.reducer;