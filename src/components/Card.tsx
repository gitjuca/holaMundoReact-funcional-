import type { InterfazSostenible } from '../data/Ods';

export const Card = ({ itemOds }: { itemOds: InterfazSostenible }) => {
  // Lógica visual para el color del estado (sin tocar la lógica de datos)
  const esEjecucion = itemOds.estado.toLowerCase().includes('ejecucion');
  const badgeColor = esEjecucion ? 'text-bg-success' : 'text-bg-danger';

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        {/* Número ID sutil en la esquina */}
        <div className="text-end">
          <span className="badge rounded-pill bg-light text-dark border">
            ID: {itemOds.id}
          </span>
        </div>

        {/* Información principal */}
        <div className="mt-2">
          <h5 className="card-title fw-bold text-primary mb-1">
            {itemOds.odsFav}
          </h5>
          <p className="card-text text-muted small mb-3">
            Objetivo de Desarrollo Sostenible
          </p>
        </div>

        {/* Estado con estilo de etiqueta */}
        <div className="mt-auto">
          <span className={`badge px-3 py-2 fw-medium ${badgeColor}`}>
            {itemOds.estado}
          </span>
        </div>
      </div>
    </div>
  );
};