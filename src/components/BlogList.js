import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../stylesheet/BlogList.css';

export class BlogList extends Component {
    render() {
        const { blogs } = this.props;

        const blogsList = blogs.length ? (
            blogs.map(blog => {
                return (
                    <div className="col s12 m12 l6">
                        <div className="card">
                            <div className="card-image">
                                <img src={blog.imgUrl} />
                            </div>
                            <div className="card-content">
                                <span class="card-title">Tin tức</span>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                            </div>
                            <div className="card-action">
                                <a href="" className="orange-effect orange btn">XEM THÊM</a>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div>Loading blogs...</div>
            )
        return (
            <div class="cards">
                {blogsList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        blogs: state.blog.blogs
    }
}

export default connect(mapStateToProps)(BlogList)
