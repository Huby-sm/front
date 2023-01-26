import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: "light", //mode sombre
    user: null,
    token: null, //information auth stocké
    posts: [],
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
})