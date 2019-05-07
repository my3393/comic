import React, { Component } from 'react'
import {Layout,Menu,Icon} from 'antd'
import store from '../../store'
import {NavLink} from 'react-router-dom'


class Sider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus:store.getState().common.menus
    };

    // store.subscribe = () => {
    //   this.setState({
    //     menus:store.getState().common.menus
    //   });
    // }
  }
   render() {
     return (
     
      
     <Layout.Sider style={{
      overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
    }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {
          this.state.menus.map((item,index)=>{
             return (
               <Menu.Item key={index + 1}>
               <NavLink exact to={item.herf}>
                  <Icon type={item.icon} />
                  <span className="nav-text">
                  {item.name}
                  </span>
                  </NavLink>
                </Menu.Item>
             )
          })
        }
        
       
      </Menu>
   
     </ Layout.Sider >
    
     )

   }
}
export default Sider;