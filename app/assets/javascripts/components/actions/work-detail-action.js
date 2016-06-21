export const WKD_RESET = 'WKD_RESET'
export function reset() {
  return {
    type: WKD_RESET
  }
}

export const WKD_CHANGE_EDIT_MODE = 'WKD_CHANGE_EDIT_MODE'
export function changeEditMode(mode) {
  return {
    type: WKD_CHANGE_EDIT_MODE,
    editMode: mode
  }
}


//
// Comment
//

export const WKD_CHANGE_INPUT_COMMENT = 'WKD_CHANGE_INPUT_COMMENT'
export function changeInputComment(comment) {
  return {
    type: WKD_CHANGE_INPUT_COMMENT,
    comment: comment
  }
}

