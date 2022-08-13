import React from 'react'
import "./Blog.css"
import blogimg from "../../Assets/Blog img/blogimg1.png"

const Blog = () => {
    return (
        <>
            <div className='flex-div-for-blog'>
                <div><p>8-1-2022</p></div>
                <div className='middle-content-for-blog'>
                    <div>
                        <h3>How to Diagnose Potential Clients’ Problems</h3>
                        <p>Posted by Kristin Lajeunesse</p>
                    </div>
                </div>
                <div>
                    <div className='last-col-for-div-img'>
                        <img src={blogimg} className="img-for-blog-preview" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog;