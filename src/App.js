import './App.css';

import React from 'react';
import { Layout } from 'antd';

import io from 'socket.io-client';

//contexts
import { ChatProvider } from './contexts/ChatContext';

//components
import ChatList from './components/ChatList';
import ChatForm from './components/ChatForm';

const { Content, Footer } = Layout;

function App() {
	const socket = io('http://localhost:4000', {
		upgrade: false,
		transports: ['websocket'],
		pingTimeout: 60000,
	});

	socket.on('connect', function () {
		console.log('connected');
	});

	return (
		<ChatProvider>
			<Layout className="layout">
				<Content style={{ padding: '20px 50px' }}>
					<div className="site-layout-content">
						<ChatList socket={socket} />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					<ChatForm socket={socket} />
				</Footer>
			</Layout>
		</ChatProvider>
	);
}

export default App;
