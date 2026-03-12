type EstadoODS = 'Aprobado' | 'Ejecucion' | 'Completado' | 'Rechazado';

    export interface InterfazSostenible {
        id: number;
        odsFav: string;
        estado: EstadoODS;
    }

    export const odsAlumnos:InterfazSostenible[] = [
        {
            id:1,
            odsFav:"ODS 1",
            estado:'Rechazado'
        },
        {
            id:2,
            odsFav:"ODS 2",
            estado:'Ejecucion'
        },
        {
            id:3,
            odsFav:"ODS 3",
            estado:'Ejecucion'
        },
        {
            id:4,
            odsFav:"ODS 4",
            estado:'Ejecucion'
        },
        {
            id:5,
            odsFav:"ODS 5",
            estado:'Aprobado'
        }
    ];