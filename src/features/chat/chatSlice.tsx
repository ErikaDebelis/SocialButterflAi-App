import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
    id: string;
    senderId: string;
    content: string;
    timestamp: string;
    attachments?: string[];
}

interface ChatUser {
    id: string;
    name: string;
    avatar: string;
    online: boolean;
    lastMessage?: string;
}

interface ChatState {
    users: ChatUser[];
    messages: Record<string, Message[]>;
    activeChat: string | null;
    isTyping: boolean;
}

const initialState: ChatState = {
    users: [],
    messages: {},
    activeChat: null,
    isTyping: false,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<ChatUser[]>) => {
            state.users = action.payload;
        },
        setActiveChat: (state, action: PayloadAction<string>) => {
        state.activeChat = action.payload;
        },
        addMessage: (state, action: PayloadAction<{ chatId: string; message: Message }>) => {
        const { chatId, message } = action.payload;
        if (!state.messages[chatId]) {
            state.messages[chatId] = [];
        }
        state.messages[chatId].push(message);
        },
        setTyping: (state, action: PayloadAction<boolean>) => {
        state.isTyping = action.payload;
        },
    },
});

export const { setUsers, setActiveChat, addMessage, setTyping } = chatSlice.actions;
export default chatSlice.reducer;