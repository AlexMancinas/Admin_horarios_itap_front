import { NextPage } from 'next'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';
import styles from '@styles/Horarios/HorariosList.module.scss';
import TitlePage from '../../components/TitlePage';
import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@mui/material';


const Horarios: NextPage = () => {

    const rows = [
        {
            id: 1,
            diaSemana: 'Lunes',
            horaInicio: 10,
            horaFin: 12,
            duracion: 2,
            aulaID: 1,
            semestre: 1,
            carrera: 'Ingenieria en Sistemas Computacionales',
            profesorID: 1,
            materiaID: 1,
            grupoID: 1,
        }
    ]

    return (
        <section className={styles.container}>
            <TitlePage titlePage='Horarios' />
            <div className={styles.header}>
                <Button variant="contained" className={styles['create-btn']}><AddCircleOutlineIcon style={{ marginRight: '5px' }} />Crear Horario</Button>
                <Button variant="contained" > <DownloadIcon style={{ marginRight: '5px' }} />Descargar lista</Button>
            </div>
            <TableContainer className={styles.table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Dia</TableCell>
                            <TableCell align="center">Hora inicio</TableCell>
                            <TableCell align="center">Hora fin</TableCell>
                            <TableCell align="center">Duración</TableCell>
                            <TableCell align="center">Aula</TableCell>
                            <TableCell align="center">Semestre</TableCell>
                            <TableCell align="center">Carrera</TableCell>
                            <TableCell align="center">Profesor</TableCell>
                            <TableCell align="center">Materia</TableCell>
                            <TableCell align="center">Grupo</TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.diaSemana}</TableCell>
                                <TableCell align="center">{row.horaInicio}</TableCell>
                                <TableCell align="center">{row.horaFin}</TableCell>
                                <TableCell align="center">{row.duracion}</TableCell>
                                <TableCell align="center">{row.aulaID}</TableCell>
                                <TableCell align="center">{row.semestre}</TableCell>
                                <TableCell align="center">{row.carrera}</TableCell>
                                <TableCell align="center">{row.profesorID}</TableCell>
                                <TableCell align="center">{row.materiaID}</TableCell>
                                <TableCell align="center">{row.grupoID}</TableCell>
                                <TableCell align="center">
                                    <Button style={{ marginRight: '10px' }} variant="contained" ><Tooltip title="Más detalles"><InfoIcon /></Tooltip></Button>
                                    <Button style={{ marginRight: '10px' }} variant="contained" ><Tooltip title="Editar profesor"><EditIcon /></Tooltip></Button>
                                    <Button style={{ marginRight: '10px' }} variant="contained" ><Tooltip title="Eliminar profesor"><DeleteIcon /></Tooltip></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    )
}

export default Horarios