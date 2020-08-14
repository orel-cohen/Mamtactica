import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState : { 
        firstName: "first",
        lastName: "last",
        userName: "t@t.com",
    },
    reducers: {
      setUser: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.firstName = action.payload[0],
        state.lastName = action.payload[1],
        state.userName = action.payload[2]
      },
      
    }
  })
export const { setUser } = userSlice.actions
export const userData = state => state.user;


export default userSlice.reducer

