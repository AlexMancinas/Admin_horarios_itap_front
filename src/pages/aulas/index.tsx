import { NextPage } from 'next'
import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';
import styles from '@styles/Aulas/AulasList.module.scss';

const Alumnos: NextPage = () => {

  const rows = [
    {
      id: 1,
      nombre: 'I10',
      capacidad: 30,
      habilitado: true
    }
  ]

  return (
    <section className={styles.container}>
        <TitlePage titlePage='Aulas' />
        <div className={styles.header}>
            <Button variant="contained" color="primary">
                <AddCircleOutlineIcon style={{marginRight:'5px'}}/>Agregar aula
            </Button>

        </div>
        <TableContainer className={styles.table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Capacidad</TableCell>
                            <TableCell align="center">Disponible</TableCell>
                           
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
                                <TableCell align="center">{row.capacidad}</TableCell>
                           
                                <TableCell align="center">{row.habilitado ? 'Sí' : 'No'}</TableCell>
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

export default Alumnos