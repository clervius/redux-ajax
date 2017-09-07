import axios from 'axios';
const server = 'http://localhost:5000/'

export const GET_FRIENDS = 'GET_FRIENDS';
export const getFriends = () => {
	const payload = axios.get(server + 'friends');
	return {
		type: GET_FRIENDS,
		payload,
	}
}

export const ADD_FRIEND = 'ADD_FRIEND';
export const addFriend = (e) => {
	e.preventDefault();
	const options = {
		name: e.target.name.value,
		age: e.target.age.value,
		email: e.target.email.value
	}
	const payload = axios.post(server + 'new-friend', options);
	document.getElementById("newFriend").reset();
	return {
		type: ADD_FRIEND,
		payload,
	}
}

export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const updateFriend = (options) => {
	const payload = axios.put(server + 'update-friend', options);
	return {
		type: UPDATE_FRIEND,
		payload,
	}
}

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const deleteFriend = (i) => {
	const options = {
		index: i
	}

	const payload = axios.delete(server + 'delete-friend', {data: options});
	console.log(options)
	return {
		type: DELETE_FRIEND,
		payload,
	}

}