import React from 'react'
import { HubConnection } from '@microsoft/signalr'

let connection: HubConnection | null = null

export const SignalRContext = React.createContext<HubConnection | null>(null) // Create a context for the SignalR connection

interface SignalRProviderProps {
    children: React.ReactNode;
}

export const SignalRProvider: React.FC<SignalRProviderProps> = ({ children }) =>
{
    if (!connection)
    {
        connection = new HubConnection('http://localhost:5000/CueCoach/IncomingMessage') // Create a new connection
        connection.start().catch((err: Error) => console.error(err)) // Start the connection
    }

    return (
        <SignalRContext.Provider value={connection}>
            {children}
        </SignalRContext.Provider>
    )
}