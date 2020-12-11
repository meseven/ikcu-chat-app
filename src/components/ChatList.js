import React, { useContext } from 'react';
import { Comment, List } from 'antd';

import ChatContext from '../contexts/ChatContext';

function ChatList({ socket }) {
	const { chats, setChats } = useContext(ChatContext);

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
