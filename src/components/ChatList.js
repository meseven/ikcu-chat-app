import React, { useContext, useEffect } from 'react';
import { Comment, List } from 'antd';

import ChatContext from '../contexts/ChatContext';

function ChatList({ socket }) {
	const { chats, setChats } = useContext(ChatContext);

	socket.on('receive-message', (message) => {
		setChats([...chats, { message }]);
	});

	return (
		<div>
			<List className="comment-list">
				{chats.map((chat, key) => (
					<Comment
						key={key}
						// actions={item.actions}
						// author={'Han Solo'}
						avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
						content={chat.message}
						// datetime={item.datetime}
					/>
				))}
			</List>
		</div>
	);
}

export default ChatList;
