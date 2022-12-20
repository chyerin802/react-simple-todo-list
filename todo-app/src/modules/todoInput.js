import createInputWithNamedType from "./createInput";
import * as createInputAction from "./createInput"

//input name
const TODO = 'TODO';

// actions creator functions
export const focusInput = createInputAction.createFocusInput(TODO);
export const blurInput = createInputAction.createBlurInput(TODO);
export const changeInput = createInputAction.createChangeInput(TODO);
export const resetInput = createInputAction.createResetInput(TODO);

// 초기 상태 선언
const initialState = 
{
  focused: false,
  title: '',
  body: ''
}

const todoInputReducer = createInputWithNamedType(TODO, initialState)

export default todoInputReducer