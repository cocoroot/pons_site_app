export const WKD_CHANGE_EDIT_MODE = 'WKD_CHANGE_EDIT_MODE'

export function changeEditMode(mode) {
  return {
    type: WKD_CHANGE_EDIT_MODE,
    editMode: mode
  }
}

export const WKD_RESET = 'WKD_RESET'

export function reset() {
  return {
    type: WKD_RESET
  }
}
