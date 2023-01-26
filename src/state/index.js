import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: "light", //mode claire
    user: null,
    token: null, //information auth stocké
    posts: [],
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        //DARK-MODE
        setMode: (state = initialState) => {
        state.mode = state.mode === "light" ? "dark" : "light";
        },

        //action = payload ->recupère l'action effecté ailleur
        //LOGIN
        setLogin: (state= initialState, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        },
        //LOGOUT
        setLogout: (state = initialState) => {
            state.user = null;
            state.token = null;
        },

        //FRIENDS
        setFriends: (state = initialState, action) => {
            if(state.user) {
                //si l'utilisateur existe
                // (friends coté back)
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent : (")
            }
        },

        //POSTS & POST
        setPosts: (state = initialState, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state = initialState, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post_id)

                    //l'id du post[] correspond au post_id (payload)
                    return action.payload.post;
                    //alors je retourne le (post)->qui contient le post_id mis à jour (payload)

                return post;
            });
            state.posts = updatedPosts; //mise à jour du state
        }

    }
})

export const {setMode, setLogin, setLogout, setFriends, setPosts, setPost} = authSlice.actions;
export default authSlice.reducer;