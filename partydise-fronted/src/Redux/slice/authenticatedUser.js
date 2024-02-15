import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '', 
  };
    
  
export const authenticatedUser=createSlice({
    name:'authenticatedUser',
    initialState,
    reducers:{
        saveauthenticatedUser:(state,action)=>{
            state.userName = action.payload;
        }
    }
})
export const { saveauthenticatedUser} = authenticatedUser.actions;
export default authenticatedUser.reducer