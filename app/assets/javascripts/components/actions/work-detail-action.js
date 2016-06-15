export const CHANGE_EDIT_MODE = 'WD_CHANGE_EDIT_MODE'

export function changeEditMode(mode) {
  return {
    type: CHANGE_EDIT_MODE,
    editMode: mode
  }
}
