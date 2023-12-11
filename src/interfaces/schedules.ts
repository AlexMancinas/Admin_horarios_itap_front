export interface ISchedule {
    dia: string;
    horaInicio: string;
    horaFin: string;
    duracion: number;
    semestre: number;
    carrera: string;   
    aulaID: number;
    grupoID: number;
    materiaID: number;
    profesorID: number;
}

export interface IScheduleTeacher {
    profesorID: number;
    hora: number;
}