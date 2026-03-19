// BlogSection.jsx - Sección Blog con cards de artículos
import SectionDivider from '../components/ui/SectionDivider'
import { BLOG_POSTS } from '../constants/data'

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      {/* Hero oscuro del blog */}
      <div className="bg-gray-950 py-14 px-8 mb-16 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold">Blog</h2>
        </div>
      </div>

      {/* Grid de artículos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="flex gap-4 group cursor-pointer"
            >
              {/* Miniatura */}
              <div className="w-28 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-(--color-primary) transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {post.author} · {post.date}
                  </p>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <a
                  href="#blog"
                  className="text-(--color-accent) text-xs font-semibold uppercase tracking-wider hover:underline mt-2 inline-block"
                >
                  Leer más
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
