// TestimoniosSection.jsx - Sección de testimonios de clientes
import SectionDivider from '../components/ui/SectionDivider'
import { TESTIMONIALS } from '../constants/data'

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const TestimoniosSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Testimonios</h2>
          <div className="flex justify-center mt-2">
            <SectionDivider width="w-20" />
          </div>
          <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
            Lo que dicen nuestros clientes satisfechos sobre nuestros servicios de fumigación profesional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Quote icon */}
              <div className="text-4xl text-(--color-primary) leading-none mb-3 font-serif">"</div>

              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">{t.text}</p>

              <StarRating rating={t.rating} />

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimoniosSection
