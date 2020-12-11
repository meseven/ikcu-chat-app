import './App.css';

import React from 'react';

//contexts
import { ChatProvider } from './contexts/ChatContext';

import Container from './Container';

function App() {
	return (
		<ChatProvider>
			<Container />
		</ChatProvider>
	);
}

export default App;
