// import axios from 'axios'


// // Register user
// export const resetpassword = (email) => (dispatch) => {
//   dispatch({ type: "RESET_PASSWORD_REQUEST" });

//   return axios
//   .post("/resetpassword", { email })
//   .then((res) => {
//     dispatch({
//       type: "RESET_PASSWORD_SUCCESS",
//       payload: res.data.message,
//     });
//   })
//   .catch((err) => {
//     dispatch({
//       type: "RESET_PASSWORD_FAILURE",
//       payload: err.response.data.message,
//     });
//   })
// }

