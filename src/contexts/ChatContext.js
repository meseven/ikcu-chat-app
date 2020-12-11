import React, { createContext, useState } from 'react';

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
	const [chats, setChats] = useState([]);

	const values = {
		chats,
		setChats,
	};

	return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatContext;
