import React, { useContext, useEffect } from 'react';
import { Layout } from 'antd';

import ChatContext from './contexts/ChatContext';

import { initiateSocket, disconnectSocket, subscribeToChat } from './socketHook';

//components
import ChatList from './components/ChatList';
import ChatForm from './components/ChatForm';

const { Content, Footer } = Layout;

function Container() {
	const { setChats } = useContext(ChatContext);

	useEffect(() => {
		initiateSocket();

		subscribeToChat((err, message) => {
			if (err) return;
			setChats((oldChats) => [{ message }, ...oldChats]);
		});

		return () => {
			disconnectSocket();
		};
	}, []);

	return (
		<div>
			<Layout className="layout">
				<Content style={{ padding: '20px 50px' }}>
					<div className="site-layout-content">
						<ChatList />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					<ChatForm />
				</Footer>
			</Layout>
		</div>
	);
}

export default Container;
