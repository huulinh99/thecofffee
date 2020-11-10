import React from 'react'
import Navbar from '../components/Navbar';
import '../stylesheet/News.css'
import { connect } from 'react-redux';
import BlogList from '../components/BlogList'


class News extends React.Component {
    render() {
        const { blogs } = this.props;
        // console.log(blogs)
        return (
            <div>
                <Navbar />
                {/* Page banner */}
                <div class="page-banner">
                    <div class="banner-title">
                        <div className="container">
                            <div className="row">
                                <div className="col s12 m12 l12">
                                    <h1>TIN TỨC</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header */}
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <h2 class="header-page">Blog</h2>
                        </div>
                        <div className="col s12 m12 l8">
                            <div className="row">
                                <div class="blog-list" >
                                    <div className="blog-home col s12 m12">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src="http://file.hstatic.net/1000075078/article/kv_new_sori_web__8ba795388fb2451d8891cb649a33fa16_1024x1024.jpg" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <span class="card-title">Tin tức</span>
                                                <h3>BỘ ĐÔI "CRUSH QUỐC DÂN" TRỞ LẠI</h3>
                                                <p>Bộ đôi “Crush quốc dân" năm ấy chúng ta từng yêu thích đã quay trở lại tại The Coffee House: Trà Sơ Ri Thanh Long và Yakult Sơ Ri Thanh Long -...</p>
                                            </div>
                                            <div className="card-action">
                                                <a href="" className="orange-effect orange btn">XEM THÊM</a>
                                            </div>
                                        </div>
                                    </div>
                                    <BlogList />
                                </div>
                            </div>
                        </div>
                        <div className="border-blog col s12 m12 l4">
                            <div class="sidebar">
                                <div class="new-menu list-group">
                                    <h2 class="list_group_title section_heading line_after_heading">CHỦ ĐỀ</h2>
                                </div>
                                <div class="crop_blog list-group">
                                    <h2 class="list_group_title section_heading line_after_heading">E-BOOK</h2>
                                </div>
                                <div class="image-items">
                                    <div className="col s6 m6 l6">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src="http://file.hstatic.net/1000075078/article/thumbnail_photobook_cb264086a49440b48a95d4c148bbea0e_large.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l6">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src="http://file.hstatic.net/1000075078/article/crop32_large.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l6">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src="http://file.hstatic.net/1000075078/article/crop22_large.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l6">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src="http://file.hstatic.net/1000075078/article/crop12_large.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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

export default connect(mapStateToProps)(News)