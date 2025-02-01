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

