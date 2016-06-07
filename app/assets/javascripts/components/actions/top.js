export const SET_HEAD_MESSAGE = 'SET_HEAD_MESSAGE'

export function setHeadMessage(message) {
  return {
    type: SET_HEAD_MESSAGE,
    headMessage: message
  }
}
