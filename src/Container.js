import React, { useContext, useEffect } from 'react';
import { Layout, notification } from 'antd';

import ChatContext from './contexts/ChatContext';

import { initiateSocket, disconnectSocket, subscribeToChat, subscribeNewUsers } from './socketHook';

//components
import ChatList from './components/ChatList';
import ChatForm from './components/ChatForm';

const { Content, Footer } = Layout;

const openNotificationWithIcon = (type) => {
	notification[type]({
		message: 'A user connected!',
	});
};

function Container() {
	const { setChats } = useContext(ChatContext);

	useEffect(() => {
		initiateSocket();

		subscribeToChat((err, message) => {
			if (err) return;
			setChats((oldChats) => [{ message }, ...oldChats]);
		});

		subscribeNewUsers((err, message) => {
			if (err) return;
			// setChats((oldChats) => [{ message, server: true }, ...oldChats]);
			openNotificationWithIcon('success');
			console.log('bir kullanıcı bağlandı');
		});

		return () => {
			disconnectSocket();
		};
	}, [setChats]);

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
