import { NextPage } from 'next'
import React from 'react'
import styles from '@styles/Grupos/GruposList.module.scss';
import TitlePage from '../../components/TitlePage';
import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';


const Grupos: NextPage = () => {


    const rows = [
        {
            id: 1,
            nombre: 'IGE_1',
            carrera: 'Ingenieria en Sistemas Computacionales',
            semestre: 1,
        }
    ]

  return (
    <section className={styles.container}>
            <TitlePage titlePage='Grupos' />
            <div className={styles.header}>
                <Button variant="contained" className={styles['create-btn']}><AddCircleOutlineIcon style={{ marginRight: '5px' }} />Crear grupo</Button>
                <Button variant="contained" > <DownloadIcon style={{ marginRight: '5px' }}/>Descargar lista</Button>
            </div>
            <TableContainer className={styles.table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Carrera</TableCell>
                            <TableCell align="center">Semestre</TableCell>
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
                                <TableCell align="center">{row.carrera }</TableCell>
                                <TableCell align="center">{row.semestre}</TableCell>
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

export default Grupos