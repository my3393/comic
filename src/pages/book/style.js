
// 这个文件 就只在book 中使用的样式

import styled from 'styled-components'

export const BookWrap = styled.div`
 .top{
  padding:20px
   dispaly:flex;
   height:50px;
   justify-content:space-between;
   align-items:center;

 } 
 .left{
  input{
    width:250px;
    height:35px;
    margin-right:15px;
  }
  button {
    height:35px
  }
 }

`
export const MainWrap = styled.div`
  padding:20px;
  background;
  img {
    width:40px;
    height:50px;
    
  }
`
