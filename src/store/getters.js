//
// /**
//  * @description 所有浏览历史
//  */
//
// export const history = function (state) {
//   return state.app.history || [];
// };
//
//
// /**
//  * @description 应用当前所处stage
//  */
//
// export const appStage = (state) => {
//   return state.app.stage;
// };
//
//
// /**
//  * @description 应用当前各项准备信息
//  */
//
// export const appState = (state) => {
//   return state.app.state;
// };
//
//
// export const bar = (state) => {
//   var data = {};
//   data.token = state.app.token;
//   data.username = state.user.nickname;
//
//   return data;
// }
//
// export const geneticDetail = (state) => (interpId) => {
//   return state.report.genetic.keyList.find(todo => todo.id === interpId)
// }
