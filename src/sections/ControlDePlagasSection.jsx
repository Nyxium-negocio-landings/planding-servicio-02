// ControlDePlagasSection.jsx - Sección Control De Plagas
import Button from '../components/ui/Button'
import SectionDivider from '../components/ui/SectionDivider'
import { CONTROL_PLAGAS_LIST } from '../constants/data'

const FUMIGADOR_IMG =
  'https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc?w=900&h=700&fit=crop&auto=format&q=90'

const ControlDePlagasSection = () => {
  return (
    <section
      id="plagas"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2"
    >
      {/* Columna izquierda - Contenido */}
      <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-12 order-2 lg:order-1">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Control De Plagas
        </h2>

        <SectionDivider width="w-20" />

        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
          Es una solución efectiva y segura para proteger tu hogar o negocio de las{' '}
          <a href="#plaga" className="text-(--color-accent) hover:underline font-medium">plagas</a>.
          Si estás experimentando un problema de infestación, no dudes en{' '}
          <a href="#contacto" className="text-(--color-accent) hover:underline font-medium">contactar</a>{' '}
          a un profesional para obtener ayuda.
        </p>

        <p className="mt-4 text-gray-700 text-sm">
          ¡Te invitamos a conocer los{' '}
          <a href="#testimonios" className="text-(--color-accent) font-semibold hover:underline">
            Testimonios
          </a>{' '}
          de nuestros clientes satisfechos!
        </p>

        {/* Lista de servicios */}
        <ul className="mt-5 space-y-2">
          {CONTROL_PLAGAS_LIST.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-(--color-primary) font-bold text-lg">•</span>
              <span className="hover:text-(--color-primary) transition-colors">{item}</span>
            </li>
          ))}
        </ul>

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
          alt="Control de plagas profesional en instalaciones industriales"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default ControlDePlagasSection
