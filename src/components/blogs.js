import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { GetPost } from '../actions/index';
import { newPost } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
class Blogs extends Component{
    componentWillMount() {
        this.props.getPost();
    }
    newPost() {
        this.props.newPost();
    }
    render() {
        return (
        <div>
            <h2>List of Blogs</h2>
            <Link to="/posts/new" onClick={this.newPost}className="btn btn-primary">Create</Link>
                <table className="table container">
                <thead className="thead-inverse">
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Categories</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.title}</td>
                <td>{this.props.categories}</td>
                </tr>
                </tbody>
                </table>
        </div>
    );
    }
}
function mapStateToProps(state) {
    return { posts : state.post };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ getPost : GetPost, newPost : newPost },dispatch);
}
export default connect(mapStateToProps,mapDispathToProps)(Blogs);