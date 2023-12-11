import { NextPage } from 'next'
import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import styles from '@styles/Materias/MateriasList.module.scss';
import router from 'next/router'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';


const Materias: NextPage = () => {


    const  rows = [
        {
            id: 1,
            nombre: 'Matematicas',
            creditosTeoricos: 3,
            creditosPracticos: 2,
            carrera: 'Ingenieria en Sistemas Computacionales',
        }
    ]

    return (
        <section className={styles.container}>
            <TitlePage titlePage='Materias' />
            <div className={styles.header}>
                <Button variant="contained" className={styles['create-btn']}><AddCircleOutlineIcon style={{ marginRight: '5px' }} />Crear Materia</Button>
                <Button variant="contained" > <DownloadIcon style={{ marginRight: '5px' }}/>Descargar lista</Button>
            </div>
            <TableContainer className={styles.table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Créditos totales</TableCell>
                            <TableCell align="center">Créditos teoricos</TableCell>
                            <TableCell align="center">Créditos prácticos</TableCell>
                            <TableCell align="center">Carrera</TableCell>
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
                                <TableCell align="center">{row.nombre}</TableCell>
                                <TableCell align="center">{row.creditosPracticos + row.creditosTeoricos}</TableCell>
                                <TableCell align="center">{row.creditosTeoricos}</TableCell>
                                <TableCell align="center">{row.creditosPracticos}</TableCell>
                                <TableCell align="center">{row.carrera }</TableCell>
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

export default Materias