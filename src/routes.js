import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './components/app';
import Blogs from './components/blogs';
import Form from './components/form';
export default ( 
    <Route path="/" component={App} >
    <IndexRoute component = {Blogs} />
    <Route path="/posts/new" component={Form} />
    </Route>
     );
