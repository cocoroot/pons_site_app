export const SELECT_FILTER = 'SELECT_FILTER'
export const SET_CREATIONS = 'SET_CREATIONS'


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

////////////////////////////////////////////
