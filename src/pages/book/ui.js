
import React from 'react';
import { Input,Table, Button} from 'antd';
import {BookWrap,MainWrap} from './style';




class BookUI extends React.Component {
  render () {
    const {inputVal,onChange,
            serchbtnclick,
            list,
            pagination,
            columns
           } = this.props;
    return (
      <BookWrap>
      <div className="top">
        <div className="left">
          <Input 
          //ref={(el) =>{this.inputEl = el}}
          value={inputVal}
          onChange={onChange}
          placeholder="请输入"/>
          <Button  type="primary" onClick={serchbtnclick}>搜索</Button>
        </div>
      </div>
     <MainWrap>
     <Table
     rowKey = "bookId"
     pagination = {pagination}
     dataSource={list}
      columns={columns} />
     </MainWrap>
    
    </BookWrap>
    )
  }
  
  componentDidMount () {
    this.props.getBookList();
  }
}


export default BookUI;