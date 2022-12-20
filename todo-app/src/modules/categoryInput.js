import createInputWithNamedType from "./createInput";
import * as createInputAction from "./createInput"

//input name
const CATEGORY = 'CATEGORY';

// actions creator functions
export const focusInput = createInputAction.createFocusInput(CATEGORY);
export const blurInput = createInputAction.createBlurInput(CATEGORY);
export const changeInput = createInputAction.createChangeInput(CATEGORY);
export const resetInput = createInputAction.createResetInput(CATEGORY);

// 초기 상태 선언
const initialState = 
{
  focused: false,
  title: ''
}

const categoryInputReducer = createInputWithNamedType(CATEGORY, initialState)

export default categoryInputReducer