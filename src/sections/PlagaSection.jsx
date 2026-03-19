// PlagaSection.jsx - Sección Plaga con barra de progreso y lista 2 columnas
import Button from '../components/ui/Button'
import SectionDivider from '../components/ui/SectionDivider'
import { PLAGAS_LIST_LEFT, PLAGAS_LIST_RIGHT } from '../constants/data'

const FUMIGADOR_IMG =
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&h=700&fit=crop&auto=format&q=90'

const PlagaSection = () => {
  return (
    <section
      id="plaga"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50"
    >
      {/* Columna izquierda - Contenido */}
      <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Plaga
        </h2>

        <SectionDivider width="w-16" />

        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
          Las plagas son organismos no deseados que pueden causar daño a la propiedad,
          transmitir enfermedades y causar molestias a las personas.
        </p>

        {/* Barra de progreso naranja */}
        <div className="mt-5 max-w-sm">
          <div className="flex justify-between text-sm font-medium mb-1">
            <span className="text-white bg-(--color-accent) px-3 py-1 rounded-l text-xs font-semibold">
              Eliminamos Un
            </span>
            <span className="bg-(--color-accent) text-white px-3 py-1 rounded-r text-xs font-semibold">
              90%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-(--color-accent) h-2 rounded-full transition-all duration-1000"
              style={{ width: '90%' }}
            />
          </div>
        </div>

        {/* Lista en 2 columnas */}
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2">
          <ul className="space-y-2">
            {PLAGAS_LIST_LEFT.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-(--color-primary) font-bold">•</span>
                {p}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {PLAGAS_LIST_RIGHT.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-(--color-primary) font-bold">•</span>
                {p}
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
      <div className="relative h-72 sm:h-96 lg:h-auto overflow-hidden">
        <img
          src={FUMIGADOR_IMG}
          alt="Fumigador visto desde arriba aplicando tratamiento"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default PlagaSection
