import React from 'react';
import { Comment, Tooltip, List } from 'antd';

function ChatList() {
	return (
		<div>
			<List className="comment-list">
				<Comment
					// actions={item.actions}
					author={'Han Solo'}
					avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
					content={
						'We supply a series of design principles, practical patterns and high quality design'
					}
					// datetime={item.datetime}
				/>
			</List>
		</div>
	);
}

export default ChatList;
