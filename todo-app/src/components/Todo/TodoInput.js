import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const StyledInput = styled.input`

`

const StyledTextarea = styled(Textarea)`
    border: none;
`

const TodoInput = ({closeInputAndSubmit, handleChange}) => {
    const ref = useRef()
    const titleRef = useRef()

    useEffect(()=>{
        // 처음 렌더링 시에 제목 input에 focus 된다.
        titleRef.current.focus();
    },[])

    // 해당 컴포넌트에 대하여 focus가 해제되면 콜백 함수가 실행된다.
    useOnClickOutside(ref, closeInputAndSubmit);

    return (
        <div ref={ref}>
            <StyledInput type='text' name='title' ref={titleRef} placeholder='제목' onChange={handleChange}></StyledInput>
            <StyledTextarea name='body' placeholder='내용' onChange={handleChange} ></StyledTextarea>
            <button onClick={closeInputAndSubmit}>작성 완료</button>
        </div>
    );
};

export default TodoInput;