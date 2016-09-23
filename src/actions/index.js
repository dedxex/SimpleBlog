import  axios  from 'axios';
import { getPost } from './type';
const key="sdfjsdkljsdlk";
const RootUrl = `http://reduxblog.herokuapp.com/api/posts/?key=${key}`;
export const GetPost= function () {
    const request = axios.get(RootUrl);
    return { type : getPost,
                 payload : request };
}
export const newPost = () => {
    const url = "";
    const request = axios.get(url);
    return { type : "newPost",payload : request };
}