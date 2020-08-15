import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
// import postsReducer from '../features/posts/postsSlice'
// import commentsReducer from '../features/comments/commentsSlice'
import mainStateReducer from './mainReducer';


export default configureStore({
    reducer: {
        // mainState: mainStateReducer,
        user: userReducer,
        // posts: postsReducer,
        // comments: commentsReducer
    }
})
