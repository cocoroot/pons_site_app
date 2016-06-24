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
// Title
//
export const WKD_CHANGE_INPUT_TITLE = 'WKD_CHANGE_INPUT_TITLE'
export function changeInputTitle(title) {
  return {
    type: WKD_CHANGE_INPUT_TITLE,
    title: title
  }
}

//
// Control
//
export const WKD_CHANGE_WORK_STATUS = 'WKD_CHANGE_WORK_STATUS'
export function changeWorkStatus(work_status) {
  return {
    type: WKD_CHANGE_WORK_STATUS,
    work_status: work_status
  }
}

//
// Description
//
export const WKD_CHANGE_INPUT_DESCRIPTION = 'WKD_CHANGE_INPUT_DESCRIPTION'
export function changeInputDescription(description) {
  return {
    type: WKD_CHANGE_INPUT_DESCRIPTION,
    description: description
  }
}

//
// Tag
//
export const WKD_CHANGE_INPUT_TAG = 'WKD_CHANGE_INPUT_TAG'
export function changeInputTag(tag) {
  return {
    type: WKD_CHANGE_INPUT_TAG,
    tag: tag
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
