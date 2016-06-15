export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const SHOW_ERROR = 'SHOW_ERROR'
export const HIDE_ERROR = 'HIDE_ERROR'

export function showError(message) {
  return {
    type: SHOW_ERROR,
    alertVisible: true,
    alertMessage: message
  }
}

export function hideError() {
  return {
    type: HIDE_ERROR,
    alertVisible: false
  }
}

// ダミーメソッド
export function submitLogin ( loginId, password ) {
  console.log('submitLogin', loginId, password)
  return {
    type: 'DUMMY_SUBMIT'
  }
}
