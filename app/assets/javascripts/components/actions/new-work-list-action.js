export const SET_NEWWORKLIST = 'SET_NEWWORKLIST'

export function setNewWorkList(props) {
  return {
    type: SET_NEWWORKLIST,
    newWorkList: props.newWorkList
  }
}
