import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../Hooks';
import { RootState } from '../store';

export default function ChatEditor() {

    const dispatch = useAppDispatch();
    const activeChat = useAppSelector((state: RootState) => state.chat.activeChat);
    const messages = useAppSelector((state: RootState) => state.chat.messages[activeChat ?? ''] ?? [] );
    const isTyping = useAppSelector((state: RootState) => state.chat.isTyping);

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            ['clean']
        ]
    };

    const formats = [
    'bold', 'italic', 'underline',
    'link', 'image'
    ];

    return (
        <ReactQuill
            theme="snow"
            value={ messages.map(m => m.content).join('\n') }
            onChange={ (content) => {
                const lines = content.split('\n');
                const newMessages = lines.map((line, i) => (
                    {
                        id: i.toString(),
                        senderId: 'me', // Assume the user is always the sender
                        content: line,
                        timestamp: new Date().toISOString(),
                    }
                ));
                dispatch({ type: 'chat/addMessage', payload: { chatId: activeChat ?? '', message: newMessages[0] } });
            }}
            modules={modules}
            formats={formats}
        />
    );
}