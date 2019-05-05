
import React, {Component} from 'react';
import { Input,Table, Button} from 'antd';
import {BookWrap,MainWrap} from './style';
import http from '@/utils/http.js';

import store from '@/store'
import {inputChagne,getBookListAction} from './store/creatActions'



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


    this.getBookList = this.getBookList.bind(this);
    this.onChange = this.onChange.bind(this);
  
  }
  render() {
    return (
      <BookWrap>
     
         <div className="top">
           <div className="left">
             <Input 
             //ref={(el) =>{this.inputEl = el}}
             value={this.state.inputVal}
             onChange={this.onChange}
             placeholder="请输入"/>
             <Button  type="primary" onClick={this.getBookList.bind(null,true)}>搜索</Button>
           </div>
         </div>
        <MainWrap>
        <Table
        rowKey = "bookId"
        pagination = {this.state.pagination}
        dataSource={this.state.list} columns={columns} />
        </MainWrap>
       
       </BookWrap>
    )
  }
  componentDidMount() {
    this.getBookList();
  }

  onChange (e) {
    let value = e.target.value;
    // this.setState(() =>({
    //   inputVal: value
    // }))
    store.dispatch(inputChagne(value))
   
  }
 
  onPageChange (page,pageSize) {
    this.setState(()=>({
      pageNum:page,
      pageSize:pageSize
    }), ()=>{
      this.getBookList();
    })
   
  }

  async getBookList (isSearch) {
    if (isSearch) {
   await  this.setState(()=>({pageNum : 1})) 
    }
       
    let {pageNum,pageSize,inputVal} = this.state;
    http.get('/api/book',{
      params:{
        bookName:inputVal,
        pageNum:pageNum,
        pageSize:pageSize,
        
      }
    })
    .then(res =>{
       if (res.code === 0) {
         this.setState((prev)=>({
           list:res.data.list,
          pagination: {
            ...prev.pagination,
            total:res.data.total
          }
        }))
       }
    })
  }
}

export default Book;