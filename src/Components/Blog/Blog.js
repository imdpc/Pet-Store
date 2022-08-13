import React from 'react'
import './Blog.css'
import blogimg from '../../Assets/Blog img/blogimg1.png'
import rightarrow from '../../Assets/Blog img/right-arrow.png'

const Blog = () => {
  return (
    <>
      <div className="flex-div-for-blog">
        <div className="wid-div-for-blog">
          {/* published date div  */}
          <div className="publish-date">
            <p>8.1.2022</p>
          </div>
          <div className="two-div-for-order">
            {/* blog short discreption  */}
            <div className="middle-content-for-blog">
              <div>
                <h3 className="heading-for-blog">
                  How to Diagnose Potential Clients’ Problems
                </h3>
                <p className="author">Posted by Kristin Lajeunesse</p>
                <p className="short-blog">
                  We hate to be the Bad News Bears, but people straight up do
                  not like to be sold to. Fortunately for you and everyone else
                  in the business of selling things, people do love it when you
                  solve their problems. So that’s what we suggest you do
                  instead.
                </p>

                <div className="read-more-div">
                  <p style={{ fontSize: '18px' }}>Read More</p>

                  <div className="arrow-img-div">
                    <img
                      src={rightarrow}
                      alt=""
                      style={{ height: '1.4em', width: '1.4em' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* blog  image div  */}
              <div className="last-col-for-div-img">
                <img src={blogimg} className="img-for-blog-preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
