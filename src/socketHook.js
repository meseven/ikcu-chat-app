import io from 'socket.io-client';
let socket;

export const initiateSocket = () => {
	socket = io(process.env.REACT_APP_BACKEND_ENDPOINT, {
		upgrade: false,
		transports: ['websocket'],
		pingTimeout: 60000,
	});

	console.log(`Connecting socket...`);

	socket.on('connect', () => console.log('connected'));
};

export const disconnectSocket = () => {
	console.log('Disconnecting socket...');
	if (socket) socket.disconnect();
};

export const subscribeNewUsers = (cb) => {
	if (!socket) return true;
	socket.on('new-user', (msg) => {
		console.log('Websocket new-user event received!');
		return cb(null, msg);
	});
};

export const subscribeToChat = (cb) => {
	if (!socket) return true;
	socket.on('receive-message', (msg) => {
		console.log('Websocket event received!');
		return cb(null, msg);
	});
};

export const sendMessage = (message) => {
	if (socket) socket.emit('new-message', message);
};
