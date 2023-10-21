import axios from 'axios';
let url = import.meta.env.VITE_BASE_URL;

export const getUserPost = (sortby, sort, page, limit) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_USERPOST_PENDING' });
    const result = await axios.get(
      `${url}/userpost?sortby=${sortby}&sort=${sort}&page=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_')}`,
        },
      }
    );
    dispatch({ payload: result.data.data, type: 'GET_USERPOST_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.response.data, type: 'GET_USERPOST_FAILED' });
    console.log('error get user post', error);
  }
};
export const getDetailArticle = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DETAIL_ARTICLE_PENDING' });
    const result = await axios.get(`${url}/post/${id}`);
    dispatch({ payload: result.data.data, type: 'DETAIL_ARTICLE_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.response.data, type: 'DETAIL_ARTICLE_FAILED' });
    console.log('error get detail article', error);
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_ARTICLE_PENDING' });
    const result = await axios.delete(`${url}/deletepost/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_')}`,
      },
    });
    dispatch({ payload: result.data.data, type: 'DELETE_ARTICLE_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.response.data, type: 'DELETE_ARTICLE_FAILED' });
    console.log('error delete article', error);
  }
};
