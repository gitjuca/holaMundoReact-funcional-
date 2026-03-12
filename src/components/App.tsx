import { Card } from './Card';
import { odsAlumnos } from '../data/Ods';

function App() {
  return (
    // 'container' centra el contenido y 'py-5' añade padding vertical
    <div className="container py-5">
      <header className="mb-5">
        <h1 className="display-4 fw-bold text-dark">Lista ODS</h1>
        <p className="text-muted fs-5">Seguimiento de proyectos y estados de sostenibilidad</p>
        <hr />
      </header>

      {/* Grid: 1 columna en móvil, 2 en tablets y 3 en pantallas grandes */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {odsAlumnos.map((item) => (
          <div className="col" key={item.id}>
            <Card itemOds={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;