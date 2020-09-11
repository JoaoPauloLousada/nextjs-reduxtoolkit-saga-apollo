import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  ex: 'Example Data'
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    updateExampleData(state, action) {
      state.ex = action.payload
    },
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = exampleSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions
// Export the reducer, either as a default or named export
export default reducer