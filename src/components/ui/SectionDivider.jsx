// SectionDivider.jsx - Línea decorativa verde debajo de los títulos de sección

const SectionDivider = ({ width = 'w-16' }) => {
  return (
    <div className={`${width} h-1 bg-(--color-primary) rounded-full my-3`} />
  )
}

export default SectionDivider
