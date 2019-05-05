// book 创建动作的文件
import http from '@/utils/http.js';
import {INPUTVALCHANGE,SETBOOKDATA} from './actionTypes';

//  创建 inputval 修改的动作
// @param {String} value 输入的内容

export const inputChagne = (value) => {
  return {
    type:INPUTVALCHANGE,
    value
  }
}

export const getBookListAction = () =>{
  return (dispatch,getState) => {
    
    let {pageNum,pageSize,inputVal} = getState().book;
    http.get('/api/book',{
      params:{
        bookName:inputVal,
        pageNum:pageNum,
        pageSize:pageSize,
        
      }
    })
    .then(res =>{
       if (res.code === 0) {
        
         dispatch({
           type:SETBOOKDATA,
           data:res.data
         })
        //  this.setState((prev)=>({
        //    list:res.data.list,
        //   pagination: {
        //     ...prev.pagination,
        //     total:res.data.total
        //   }
        // }))
       }
    })
  }
}
