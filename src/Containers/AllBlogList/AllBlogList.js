import React from 'react'
import Blog from '../../Components/Blog/Blog'
import './AllBlogList.css'
import search from '../../Assets/Blog img/search.png'

const AllBlogList = () => {
  return (
    <>
      <div>
        <div className="heading-section-for-all-blog">
          <div className="heading-for-all-blog">
            {/* heading for blog page  */}
            <p className="title">Blog</p>
            <p className="para-after-title">
              Check out our blog for the latest tips, tricks, and happenings in
              business and design.
            </p>
          </div>
        </div>
      </div>
      {/* div for search bar  */}
      <div className="search-bar">
        <div className="search-icon">
          <img src={search} alt="" className="search-icon-style" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type what are you looking for..."
            className="input-for-search"
          />
        </div>
      </div>
      {/* blog component call  */}
      <div>
        <Blog />
        <Blog />
        <Blog />
      </div>
    </>
  )
}

export default AllBlogList
