export const USER_REGIST  = "USER_REGIST"

export function register( userData ){
  return {
    type: USER_REGIST,
    userData: userData
  }
}
