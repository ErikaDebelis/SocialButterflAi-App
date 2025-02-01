import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setActiveChat } from '../features/chat/chatSlice';
import React from 'react';

export default function ChatList () {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.chat.users);
    const activeChat = useSelector((state: RootState) => state.chat.activeChat);

    const handleChatSelect = (userId: string) => {
    dispatch(setActiveChat(userId));
    };

    return (
    <div className="chat-list">
        { users.map(user => (
            <div
                key={user.id}
                className={`chat-item ${activeChat === user.id ? 'active' : ''}`}
                onClick={() => handleChatSelect(user.id)}
            >
                <div className="avatar">
                    <img src={user.avatar} alt={user.name} />
                    { user.online && <span className="online-status" /> }
                </div>

                <div className="user-info">
                    <h3>{user.name}</h3>
                    <p>{user.lastMessage}</p>
                </div>
            </div>
        ))}
    </div>
    );
};