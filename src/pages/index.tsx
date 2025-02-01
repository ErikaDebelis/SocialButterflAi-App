import * as React from "react"
import type { Link, HeadFC, PageProps } from "gatsby"
import { Server } from "http";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import ChatList from "./ChatList";
import { setUsers } from "../features/chat/chatSlice";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-[280px_1fr] h-screen">
            <Sidebar />
            <main className="h-full">{children}</main>
        </div>
        );
};

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 border-r border-gray-700">
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-xl font-medium text-white">SocialButterflAi</h1>
            <button className="text-gray-400 hover:text-white">≡</button>
        </div>
        <div className="px-4 py-2 flex gap-2">
            <input
            type="search"
            placeholder="Search"
            className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="text-gray-400 hover:text-white px-2">+</button>
        </div>
        <ChatList />
        </aside>
    );
};

const MessageArea: React.FC = () => {
    return (
    <div className="message-area">
        <div className="message-header">
            <h2>Chat with Amy Daniel</h2>
        </div>
    </div>
    );
};

const dispatch = useDispatch();
const activeChat = useSelector((state: RootState) => state.chat.activeChat);

const Home = () => {
    React.useEffect(() => {
        dispatch(setUsers([
            {
                id: '1',
                name: 'Amy Daniel',
                avatar: '/avatars/amy.jpg',
                online: true,
                lastMessage: 'Im a general AI advertiser...'
            },
            // Add more initial users
        ]));
    }, [dispatch]);
};

export default function Index() {
    return (
        <React.Fragment>
        <head>
            <title>SocialButterflAi - AI-Enhanced Social Messaging</title>
            <meta name="description" content="Connect and chat with AI- enhance video content understanding for neurodivergent and audio-impaired individuals by providing deeper context beyond traditional subtitles. " />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </head>
        
        <div className="app-container">
            <ChatLayout>
                {activeChat ? (
                    <MessageArea />
                    ) : (
                    <div className="welcome-screen">
                        <div className="welcome-content">
                        <h1>Welcome to SocialButterflAi</h1>
                        <p>Select a chat to start messaging</p>
                        </div>
                    </div>
                )}
            </ChatLayout>
        </div>
        </React.Fragment>
    );
}