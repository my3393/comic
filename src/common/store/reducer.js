
// common 整体上的仓库 reducer
const defaultState = {
  menus:[
    {id:1, name:'图书管理', icon:'book',herf:'/'},
    {id:2, name:'用户管理', icon:'user',herf:'/user'},
    {id:3, name:'权限管理', icon:'setting',herf:'/permiss'},
  ],
  defaultmenus:['1']
}
export default (state=defaultState,action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
   
    default:
      break;
  }
  return newState
}