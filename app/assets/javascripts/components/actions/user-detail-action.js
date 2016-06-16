// export const SELECT_FILTER = 'SELECT_FILTER'
export const RESET = 'UD_RESET'
// export const SET_WORKS = 'SET_WORKS'
// export const SET_USER = 'SET_USER'
export const CHANGE_EDIT_MODE = 'UD_CHANGE_EDIT_MODE'
// export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST'
// export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE'
// export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const CHANGE_TAB = 'UD_CHANGE_TAB'

// export function selectFilter(filter = 1) {
//   return {
//     type: SELECT_FILTER,
//     selectFilter: filter
//   }
// }
export function reset() {
  return {
    type: RESET,
    editMode: false,
    tabKey: 1
  }
}

// export function setWorks(props) {
//   return {
//     type: SET_WORKS,
//     originalWorks: props.originalWorks,
//     favoriteWorks: props.favoriteWorks
//   }
// }

// export function setUser(user) {
//   return {
//     type: SET_USER,
//     user: user
//   }
// }

export function changeEditMode(editMode) {
  console.log("changeEditMode")
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
