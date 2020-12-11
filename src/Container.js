import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Layout } from 'antd';

import ChatContext from './contexts/ChatContext';

//components
import ChatList from './components/ChatList';
import ChatForm from './components/ChatForm';

const { Content, Footer } = Layout;

function Container() {
	const { chats, setChats } = useContext(ChatContext);

	const [socketRef, setSocketRef] = useState(null);

	useEffect(() => {
		const socket = io(process.env.REACT_APP_BACKEND_ENDPOINT, {
			upgrade: false,
			transports: ['websocket'],
			pingTimeout: 60000,
		});

		socket.on('connect', function (socket) {
			console.log(socket);
			setSocketRef(socket);
		});

		socket.on('receive-message', (message) => {
			setChats([...chats, { message }]);
		});
	}, []);

	return (
		<div>
			<Layout className="layout">
				<Content style={{ padding: '20px 50px' }}>
					<div className="site-layout-content">
						<ChatList />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>{<ChatForm socket={socketRef} />}</Footer>
			</Layout>
		</div>
	);
}

export default Container;
