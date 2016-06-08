export const SET_USER = 'SET_USER'
export const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE'

export function setUser(user) {
  return {
    type: SET_USER,
    user: user
  }
}

export function changeEditMode(editMode) {
  return {
    type: CHANGE_EDIT_MODE,
    editMode: editMode
  }
}
