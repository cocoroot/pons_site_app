export const HDR_SHOW_NEW_WORK_MODAL = 'HDR_SHOW_NEW_WORK_MODAL'

export function showNewWorkModal(opened) {
  return {
    type: HDR_SHOW_NEW_WORK_MODAL,
    newWorkModalOpened: opened
  }
}
