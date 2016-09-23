import { reduxForm } from 'redux-form';
import React,{ Component } from 'react';
//const { handleSubmit } = this.props;

class Form extends Component{

    render() {
        const { fields : { title,categories,content },handleSubmit } = this.prop;
        console.log(title);
        return (
            <div>
                <h2>Create New Post</h2>
                <form>
                <div className="form-group">
                <label for="formGroupExampleInput">Post Title</label>
                <input type="text" name= "title" className="form-control" id="formGroupExampleInput" placeholder="Enter your input" />
                </div>
                <div className="form-group">
                <label for="formGroupExampleInput2">Category</label>
                <input type="text" name="categories" className="form-control" id="formGroupExampleInput2" placeholder="Enter your input" />
                </div>
                <div className="form-group">
                <label for="formGroupExampleInput2">Content</label>
                <input type="textarea" name="content" className="form-control" id="formGroupExampleInput2" placeholder="Enter your input" />
                </div>
                <div className="form-group">
                    <input type="submit" onSubmit={this.handleSubmit} className="btn btn-primary"></input>
                </div>
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form : 'PostsNewForm',
    fields : ['title','categories','content']
})(Form);