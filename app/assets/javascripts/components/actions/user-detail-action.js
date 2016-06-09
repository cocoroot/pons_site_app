export const SELECT_FILTER = 'SELECT_FILTER'
export const SET_CREATIONS = 'SET_CREATIONS'
export const SET_USER = 'SET_USER'
export const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE'

export function selectFilter(filter = 1) {
  return {
    type: SELECT_FILTER,
    selectFilter: filter
  }
}

export function setCreations(props) {
  return {
    type: SET_CREATIONS,
    originalCreations: props.originalCreations,
    favoriteCreations: props.favoriteCreations
  }
}

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
