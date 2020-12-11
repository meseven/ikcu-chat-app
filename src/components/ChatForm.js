import React, { useState, useContext } from 'react';

import { Input } from 'antd';

import ChatContext from '../contexts/ChatContext';

import { sendMessage } from '../socketHook';

function ChatForm() {
	const { chats, setChats } = useContext(ChatContext);

	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (message) {
			setMessage('');
			sendMessage(message);
			setChats([{ message }, ...chats]);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input
					placeholder="Basic usage"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default ChatForm;
