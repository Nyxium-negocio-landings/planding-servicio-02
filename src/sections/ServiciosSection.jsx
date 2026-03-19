// ServiciosSection.jsx - Sección de Servicios
import Button from '../components/ui/Button'
import SectionDivider from '../components/ui/SectionDivider'

const FUMIGADOR_IMG =
  'https://images.unsplash.com/photo-1558618047-f4e60cef3895?w=900&h=700&fit=crop&auto=format&q=90'

const SERVICIOS = [
  { label: 'Plaga', href: '#plaga' },
  { label: 'Control De Plagas', href: '#plagas' },
  { label: 'Fumigaciones', href: '#fumigaciones' },
]

const ServiciosSection = () => {
  return (
    <section
      id="servicios"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2"
    >
      {/* Columna izquierda */}
      <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-12 order-2 lg:order-1">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Servicios
        </h2>

        <SectionDivider width="w-20" />

        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
          Los servicios de fumigación son una solución efectiva para controlar y eliminar
          plagas en hogares y negocios. Estos servicios consisten en la aplicación de
          productos químicos especializados para erradicar las plagas y prevenir futuras
          infestaciones.
        </p>

        <p className="mt-4 text-gray-700 text-sm">
          ¡Te invitamos a conocer los{' '}
          <a href="#testimonios" className="text-(--color-accent) font-semibold hover:underline">
            Testimonios
          </a>{' '}
          de nuestros clientes satisfechos!
        </p>

        <div className="mt-6">
          <p className="font-semibold text-gray-800 mb-3">Servicios:</p>
          <ul className="space-y-2">
            {SERVICIOS.map((s) => (
              <li key={s.label} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-(--color-primary) flex-shrink-0" />
                <a href={s.href} className="hover:text-(--color-accent) transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Button
            label="(662) 124 - 8161"
            href="tel:6621248161"
            icon="📞"
            variant="primary"
            className="text-base px-8 py-4"
          />
        </div>
      </div>

      {/* Columna derecha - Imagen */}
      <div className="relative h-72 sm:h-96 lg:h-auto overflow-hidden order-1 lg:order-2">
        <img
          src={FUMIGADOR_IMG}
          alt="Técnico fumigando instalación de aire acondicionado"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default ServiciosSection
