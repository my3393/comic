import React from 'react'
import {connect} from 'react-redux';
import BookUI from './ui';
import {inputChagne,searchBookAction
  ,getBookListAction
  ,pageBookAction} from './store/creatActions'

import store from '@/store'


// 返回一个对象 ，返回的内容就是 UI 组件props 的内容
const mapStateToProps = (state) => {
   return {
     inputVal:state.book.inputVal,
     list : state.book.list,
     columns : [{
      title: 'bookId',
      dataIndex: 'bookId',
      key: 'bookId',
      filters:[{
        text:'个人',
        value:'个人'
      }],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    }, {
      title: '图书名',
      dataIndex: 'bookName',
      key: 'bookName',
      sorter: (a, b) => (a.age - b.age),
    }, {
      title: '作者',
      dataIndex: 'author',
      key: 'auther',
    },
    {
      title:'图片',
      dataIndex:'coverurl',
      key:'coverurl',
      render(text, record, index) {
       return <img src={text} alt="" />
      },
    
    }],
    pagination :{
      total:state.book.total,
      pageSize:state.book.pageSize,
      // onChange 不能调用 mapDispatchToProps 里面的方法
      //所以只能使用原始的方法
     onChange: (page) => {
       store. dispatch(pageBookAction(page))
     }
    }
   
    
   }
} 

//返回一个对象 ，返回的内容每个key都是一个方法，UI 组件可以通过props 的内容

const mapDispatchToProps = (dispatch) => {
   return {
     onChange: (e) => {
      let value = e.target.value;
      dispatch(inputChagne(value))
     },
     serchbtnclick: ()=>{
       dispatch(searchBookAction())
      },
      onPageChange : (page,pageSize) =>{
        dispatch(pageBookAction(page))
       
      },
      getBookList: () =>{
        dispatch(getBookListAction())
      }
  
   }
}
// 暴露出去的是一个组件
// 第一个括号里面有两个参数  mapStateToProps mapDispatchToProps
// mapStateToProps 函数， 将redux store state 数据映射到UI组件的props里面去
// mapDispatchToProps 函数 将某些方法 映射到UI 组件的props里面去
// 第二个括号里面接收一个UI组件
export default connect (mapStateToProps,mapDispatchToProps)(BookUI)