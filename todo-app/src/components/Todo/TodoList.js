import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as inputActions from '../../modules/todoInput'
import { createTodo } from '../../modules/todo';

import styled from 'styled-components';
import TodoInput from './TodoInput';

const Wrapper = styled.div`
    background-color: aqua;
`

const NewTodoButton = styled.button`
    background-color: gray;
`

const TodoList = () => {
    const { focused, title, body } = useSelector(state => state.todoInputReducer);
    const dispatch = useDispatch();

    // Input 창이 화면에 나타나게 함
    const showInput = () => {
        dispatch(inputActions.focusInput())
    }

    // Input 창을 닫음 -> Pos
    const closeInputAndSubmit = async () => {
        try{
            // 제목이 비어있지 않으면 post 진행 
            if(title !== ''){
                await createTodo(title, body);
            }
            
            // Input에 focus 해제
            dispatch(inputActions.blurInput());
            // Input reset
            dispatch(inputActions.resetInput());
        }catch(err){
            console.log(err)
        }
    }

    // Input value의 변화를 state에 적용함
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(inputActions.changeInput(name, value))
    }
    

    return (
        <Wrapper>
            {focused ? <TodoInput closeInputAndSubmit={closeInputAndSubmit} handleChange={handleChange}></TodoInput> : null}
            <NewTodoButton onClick={showInput}>추가</NewTodoButton>
        </Wrapper>
    );
};

export default TodoList;