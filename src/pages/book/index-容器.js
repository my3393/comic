
// book 组件 的 容器组件
import React, {Component} from 'react';

import BookUI from './ui'
import store from '@/store'
import {inputChagne,getBookListAction,searchBookAction,pageBookAction} from './store/creatActions'



const columns = [{
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

}];
class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: store.getState().book.list,
      inputVal: store.getState().book.inputVal,
      pageNum: store.getState().book.pageNum,
      pageSize: store.getState().book.pageSize,
   
      pagination :{
        total:store.getState().book.total,
        pageSize:store.getState().book.pageSize,
        onChange:this.onPageChange.bind(this)}
     
    }
    store.subscribe(() =>{
      this.setState(() =>({
        list: store.getState().book.list,
        inputVal: store.getState().book.inputVal,
        pageNum: store.getState().book.pageNum,
        pageSize: store.getState().book.pageSize,
     
        pagination :{
          total:store.getState().book.total,
          PageSize:store.getState().book.pageSize,
          onChange:this.onPageChange.bind(this)}
       
      }))
    })


   // this.getBookList = this.getBookList.bind(this);
   // this.onChange = this.onChange.bind(this);
  
  }
  render() {
    return (
     < BookUI
     inputVal = {this.state.inputVal}
     onChange = {this.onChange}
     serchbtnclick ={()=>{store.dispatch(searchBookAction())}}
     list = {this.state.list}
     pagination ={this.state.pagination}
     columns={columns}
     /> 
    )
  }
  componentDidMount() {
    store.dispatch(getBookListAction())
  }

  onChange (e) {
    let value = e.target.value;
    // this.setState(() =>({
    //   inputVal: value
    // }))
    store.dispatch(inputChagne(value))
   
  }
 
  onPageChange (page,pageSize) {
    store.dispatch(pageBookAction(page))
   
  }

  // async getBookList (isSearch) {
  //   if (isSearch) {
  //  await  this.setState(()=>({pageNum : 1})) 
  //   }
       
  //   //var bookName = this.inputEl.state.value;
    
  // }
}

export default Book;