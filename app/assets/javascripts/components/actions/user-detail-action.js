export const RESET = 'UD_RESET'
export const CHANGE_EDIT_MODE = 'UD_CHANGE_EDIT_MODE'
export const CHANGE_TAB = 'UD_CHANGE_TAB'

export function reset() {
  return {
    type: RESET,
    editMode: false,
    tabKey: 1
  }
}

export function changeEditMode(editMode) {
  return {
    type: CHANGE_EDIT_MODE,
    editMode: editMode
  }
}

export function changeTab(tabKey) {
  return {
    type: CHANGE_TAB,
    tabKey: tabKey
  }
}
