// HeroSection.jsx - Sección hero de Fumigaciones con grid 2 columnas
import Button from '../components/ui/Button'
import SectionDivider from '../components/ui/SectionDivider'
import { SERVICES_LIST } from '../constants/data'

/* URL de imagen del fumigador con traje blanco (Unsplash) */
const FUMIGADOR_IMG =
  'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&h=700&fit=crop&auto=format&q=90'

const HeroSection = () => {
  return (
    <section
      id="fumigaciones"
      className="min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-2 mt-16 lg:mt-20"
    >
      {/* Columna izquierda - Contenido */}
      <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-12 animate-slide-left">
        {/* Título */}
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
          Fumigaciones
        </h1>

        {/* Divider verde */}
        <SectionDivider width="w-20" />

        {/* Descripción */}
        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
          El servicio de fumigación es un procedimiento que se utiliza para controlar y
          eliminar las <span className="text-(--color-primary) font-medium">plagas</span> de
          insectos no deseados en un área determinada. Los servicios de fumigación son esenciales
          en entornos comerciales y residenciales para garantizar la seguridad, la higiene y la
          comodidad de las personas.
        </p>

        {/* Invitación Testimonios */}
        <p className="mt-4 text-gray-700 text-sm">
          ¡Te invitamos a conocer los{' '}
          <a
            href="#testimonios"
            className="text-(--color-accent) font-semibold hover:underline"
          >
            Testimonios
          </a>{' '}
          de nuestros clientes satisfechos!
        </p>

        {/* Lista de servicios */}
        <ul className="mt-5 space-y-2">
          {SERVICES_LIST.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-(--color-primary) font-bold text-lg">•</span>
              <span className="hover:text-(--color-primary) transition-colors">{item}</span>
            </li>
          ))}
        </ul>

        {/* Íconos Hogar / Empresa */}
        <div className="mt-6 flex items-center gap-8">
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="text-4xl transition-transform group-hover:scale-110">🏠</div>
            <span className="text-sm font-semibold text-(--color-accent)">Hogar</span>
          </div>
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="text-4xl transition-transform group-hover:scale-110">🏢</div>
            <span className="text-sm font-semibold text-(--color-accent)">Empresa</span>
          </div>
        </div>

        {/* Botón teléfono */}
        <div className="mt-8">
          <Button
            label="(662) 124 - 8161"
            href="tel:6621248161"
            icon="📞"
            variant="primary"
            className="text-base px-8 py-4 text-lg"
          />
        </div>
      </div>

      {/* Columna derecha - Imagen fumigador */}
      <div className="relative h-72 sm:h-96 lg:h-auto overflow-hidden animate-slide-right">
        <img
          src={FUMIGADOR_IMG}
          alt="Técnico de fumigación con traje de protección"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay sutil en la parte izquierda para transición */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent lg:block hidden" />
      </div>
    </section>
  )
}

export default HeroSection
