// pages/BlogPage.jsx — Ruta: /blog
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../constants/data'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BlogPage = () => {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <div className="page-wrapper">
    {/* Header oscuro */}
    <div className="blog-header" ref={headerRef}>
      <div className="container">
        <h1>Blog</h1>
      </div>
    </div>

    {/* Grid artículos */}
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <div className="blog-grid" ref={gridRef}>
        {BLOG_POSTS.map((post, i) => (
          <article key={post.id} className="blog-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="blog-card-img">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-card-body">
              <div>
                <Link to={`/blog/${post.id}`} className="blog-card-title" style={{ display: 'block' }}>
                  {post.title}
                </Link>
                <p className="blog-card-meta">{post.author} · {post.date}</p>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </div>
              <Link to={`/blog/${post.id}`} className="blog-card-link">Leer más</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  )
}

export default BlogPage
