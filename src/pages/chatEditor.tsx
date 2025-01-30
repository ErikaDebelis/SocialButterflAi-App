import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../Hooks';
import { updateEditorContent } from '../features/chat/chatSlice';

export default function ChatEditor() {

    const dispatch = useAppDispatch();
    const editorContent = useAppSelector((state) => state.chat.editorContent);

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

    const handleChange = (content: string) => {
        dispatch(updateEditorContent(content));
    };

    return (
    <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={handleChange}
        modules={modules}
        formats={formats}
    />
    );
}