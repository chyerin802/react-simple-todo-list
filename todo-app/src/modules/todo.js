import * as WebAPI from '../lib/web-api';

// action types
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const CREATE_TODO = 'CREATE_TODO';
const GET_TODO = 'GET_TODO'

// action creator functions
export const createCategory = (title) => {
  WebAPI.createCategory({title})
  return {
    type: CREATE_CATEGORY,
    payload: {
      title
    }
  }
}

export const createTodo = (title, body) => {
  WebAPI.createTodo({title, body})
  return {
    type: CREATE_TODO,
    payload: {
      title,
      body
    }
  }
}
const initialState = [];
const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    default:
      return state;
  }
}

export default todoReducer;