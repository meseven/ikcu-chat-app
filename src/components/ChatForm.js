import React, { useState, useContext } from 'react';

import { Input } from 'antd';

import ChatContext from '../contexts/ChatContext';

function ChatForm({ socket }) {
	const { chats, setChats } = useContext(ChatContext);

	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		setMessage('');
		socket.emit('new-message', message);

		setChats([...chats, { message }]);
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
