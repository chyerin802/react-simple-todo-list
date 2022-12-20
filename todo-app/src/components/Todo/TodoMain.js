import React from 'react';
import TodoList from './TodoList';
import { useSelector, useDispatch } from 'react-redux';
import * as inputActions from '../../modules/categoryInput'

import { createCategory } from '../../modules/todo';
import CategoryInput from './CategoryInput';

const TodoMain = () => {
    const { focused, title } = useSelector(state => state.categoryInputReducer);
    const dispatch = useDispatch();

    // Input 창이 화면에 나타나게 함
    const showInput = () => {
        dispatch(inputActions.focusInput())
    }

    const closeInput = () => {
        // Input에 focus 해제
        dispatch(inputActions.blurInput())
        // 카테고리명이 비어있지 않으면 post 진행
        dispatch(inputActions.resetInput())
    }
    
    // Input 창을 닫음 -> Pos
    const closeInputAndUpdate = async () => {
        try{
            if(title !== ''){
                await createCategory(title)
            }  
            closeInput();
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
        <div>
            <div>카테고리명</div>
            <TodoList></TodoList>
            {focused ? <CategoryInput closeInput={closeInput} closeInputAndUpdate={closeInputAndUpdate} handleChange={handleChange}></CategoryInput> : null}
            <button onClick={showInput}>카테고리 추가</button>
        </div>
    );
};

export default TodoMain;