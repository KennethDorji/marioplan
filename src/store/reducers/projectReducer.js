const initState = {
	project: [
		{ id: '1', title: 'help me find a peach', content: 'blah blah blah' },
		{ id: '2', title: 'help me find a apple', content: 'blah blah blah' },
		{ id: '3', title: 'help me find a banana', content: 'blah blah blah' }
	]
};

const projectReducer = (state = initState, action) => {
	return state;
};

export default projectReducer;
