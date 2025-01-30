import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
    editorContent: string;
}

    const initialState: ChatState = {
    editorContent: '',
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        updateEditorContent: (state, action: PayloadAction<string>) => {
        state.editorContent = action.payload;
        },
    },
});

export const { updateEditorContent } = chatSlice.actions;
export default chatSlice.reducer;