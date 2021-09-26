export const login = (token) => {
  return (dispatch) => {
    dispatch({
      type: 'login',
      payload: {
        token
      }
    })
  }
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: 'logout',
      payload: {}
    })
  }
}
