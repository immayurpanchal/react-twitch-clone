import { combineReducers } from 'redux';

const initialState = {
	profile : {
		email    : '',
		name     : '',
		imageUrl : ''
	}
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SUCCESS':
			const { email, name, imageUrl } = action.payload;
			return { ...state, email, name, imageUrl };
		default:
			return state.profile;
	}
};

export default combineReducers({
	profile : profileReducer
});
