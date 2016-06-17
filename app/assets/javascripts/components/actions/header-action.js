export const SHOW_CREATE_FORM = 'HD_SHOW_CREATE_FORM'

export function openModal() {
  return {
    type: SHOW_CREATE_FORM,
    showModal: true
  }
}

export function closeModal() {
  return {
    type: SHOW_CREATE_FORM,
    showModal: false
  }
}
