import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`

`

const CategoryInput = ({closeInput, closeInputAndUpdate, handleChange}) => {
    const ref = useRef();
    const categoryRef = useRef();

    useEffect(()=>{
        // 처음 렌더링 시에 제목 input에 focus 된다.
        categoryRef.current.focus();
    },[])

    return (
        <div ref={ref}>
            <StyledInput type='text' name='title' ref={categoryRef} placeholder='카테고리명' onChange={handleChange}></StyledInput>
            <button onClick={closeInput}>취소</button>
            <button onClick={closeInputAndUpdate}>작성완료</button>
        </div>
    );
};

export default CategoryInput;