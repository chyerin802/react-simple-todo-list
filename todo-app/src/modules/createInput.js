// 액션 생성 함수를 재사용하기 위해
// 액션 생성 함수를 생성하는 함수를 작성함!
export function createFocusInput(inputName = ''){
  return () => {
    return {
      type: `FOCUS_INPUT_${inputName}`
    }
  }
}

export function createBlurInput(inputName = ''){
  return () => {
    return {
      type: `BLUR_INPUT_${inputName}`
    }
  }
}

export function createChangeInput(inputName = ''){
  return (name,value) => {
    // name : "title" or "body"
    return {
        type: `CHANGE_INPUT_${inputName}`,
        payload:{
            name,
            value
        }
    }
  }
}

export function createResetInput(inputName = ''){
  return () => {
    return {
      type: `RESET_INPUT_${inputName}`
    }
  }
}

// input 로직을 재사용하기 위해 고차 리듀서(리듀서 공장) 선언
/**
 * 
 * @param {*} inputName input의 name
 * @param {*} initialState 초기 상태 지정
 * @returns 
 */
export default function createInputWithNamedType(inputName = '', initialState) {
  return (state = initialState, action) => {
      switch (action.type) {
        case `FOCUS_INPUT_${inputName}`:
          return {
            ...state,
            focused: true
          }
  
        case `BLUR_INPUT_${inputName}`:
          return {
            ...state,
            focused: false
          }
  
        case `CHANGE_INPUT_${inputName}`:
          const {name, value} = action.payload;
          // name : "title" or "body"
          return {
            ...state,
            [name]: value
          }
  
        case `RESET_INPUT_${inputName}`:
          return {
            ...initialState
          };
        
        default:
          return state;
      }
  }
}