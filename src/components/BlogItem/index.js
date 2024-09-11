// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {bloglist} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = bloglist

  return (
    <li className="list-container">
      <Link className="blog-item-link" to={`/blogs/${id}`}>
        <div className="item-container">
          <img className="link-image" src={imageUrl} alt={`item${id}`} />
          <div className="item-info">
            <p className="info-topic">{topic}</p>
            <h1 className="info-title">{title}</h1>
            <div className="author-info">
              <img
                className="author-image"
                src={avatarUrl}
                alt={`avatar${id}`}
              />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
