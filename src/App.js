import React, { Component } from 'react'
import Sider from './common/componnet/Sider';
import Header from './common/componnet/Header';
import { Layout} from 'antd';

import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

// 引入组件
import Bookpage from './pages/book'
import Userpage from './pages/user'
import Permisspage from './pages/permiss'

// const {
//     Footer
// } = Layout;

class App extends Component {
  
    render(){
      return (
        <BrowserRouter>
        <Layout>
          <Sider />
         <Layout style={{ marginLeft: 200 }}>
       <Header />
      <Layout.Content>
        <Switch>
        {/* 1.图书管理 */}
         <Route path="/" exact component={Bookpage}></Route>
        {/* 2.用户管理 */}
        <Route path="/user" exact component={Userpage}></Route>
        {/* 3.权限管理 */}
        <Route path="/permiss" component={Permisspage}></Route>
        <Redirect  to='/'></Redirect>
        </Switch>

      </Layout.Content>
     
      {/* <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
     </Layout>
    </Layout>
  </BrowserRouter>
      )
    }
  }


  export default App;
