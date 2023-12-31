import axios from 'axios';
let url = import.meta.env.VITE_BASE_URL;

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_USER_PENDING' });
    const result = await axios.get(`${url}/member`);
    dispatch({ payload: result.data.data, type: 'GET_USER_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.response.data, type: 'GET_USER_FAILED' });
    console.log('error get user', error);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_PENDING' });
    const result = await axios.post(`${url}/login`, data);
    localStorage.setItem('id_', result.data.data.id);
    localStorage.setItem('name_', result.data.data.username);
    localStorage.setItem('token_', result.data.data.token);
    localStorage.setItem('photo_', result.data.data.photo);
    localStorage.setItem('roles_', result.data.data.roles);
    dispatch({ payload: result.data, type: 'LOGIN_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.response.data, type: 'LOGIN_FAILED' });
    console.log('error login', error);
  }
};

export const cleanLogin = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({ type: 'LOGIN_CLEAN' });
  } catch (error) {
    console.log('error clean login', error);
  }
};

export const editProfile = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'EDIT_PROFILE_PENDING' });
    const result = await axios.put(`${url}/updateprofile`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_')}`,
      },
    });
    dispatch({ payload: result.data.data, type: 'EDIT_PROFILE_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.response.data, type: 'EDIT_PROFILE_FAILED' });
    console.log('error edit profile', error);
  }
};

export const cleanEditProfile = () => async (dispatch) => {
  try {
    dispatch({ type: 'EDIT_PROFILE_CLEAN' });
  } catch (error) {
    console.log('error clean edit profile', error);
  }
};

export const getUserByToken = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_PROFILE_PENDING' });
    const result = await axios.get(`${url}/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_')}`,
      },
    });
    dispatch({ payload: result.data.data, type: 'GET_PROFILE_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.response.data, type: 'GET_PROFILE_FAILED' });
    console.log('error get profile', error);
  }
};
