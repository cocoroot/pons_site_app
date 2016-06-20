export const USD_RESET = 'USD_RESET'
export function reset() {
  return {
    type: USD_RESET
  }
}
export const USD_CHANGE_EDIT_MODE = 'USD_CHANGE_EDIT_MODE'
export function changeEditMode(editMode) {
  return {
    type: USD_CHANGE_EDIT_MODE,
    editMode: editMode
  }
}

export const USD_CHANGE_TAB = 'USD_CHANGE_TAB'
export function changeTab(tabKey) {
  return {
    type: USD_CHANGE_TAB,
    tabKey: tabKey
  }
}
