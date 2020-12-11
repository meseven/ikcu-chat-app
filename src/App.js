import './App.css';

import React, { useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import io from 'socket.io-client';

import ChatList from './components/ChatList';

const { Header, Content, Footer } = Layout;

function App() {
	useEffect(() => {
		const socket = io('http://localhost:4000', {
			upgrade: false,
			transports: ['websocket'],
			pingTimeout: 60000,
		});

		socket.on('connect', function () {
			console.log('connected');
		});

		console.log(socket);
	}, []);
	return (
		<Layout className="layout">
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div className="site-layout-content">Content</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
		</Layout>
	);
}

export default App;
