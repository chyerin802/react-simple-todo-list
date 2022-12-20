import axios from 'axios'

export const createCategory = ({title}) => axios.post('/category',{title});
export const createTodo = ({title, body}) => axios.post('/todo', {title, body});