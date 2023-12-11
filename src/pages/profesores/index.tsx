import { NextPage } from 'next'
import React from 'react'
import TitlePage from '../../components/TitlePage'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Tooltip } from '@mui/material'
import styles from '@styles/Profesores/ProfesoresList.module.scss';
import { useRouter } from 'next/router';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';

const Profesores: NextPage = () => {
    const router = useRouter();
    const rows = [
        {
            id: 1,
            nombre: 'Juan',
            domicilio: 'Calle 1',
            email: 'test@test.com',
            telefono: '1234567890',
            habilitado: true
        }
    ]

    return (
        <section className={styles.container}>
            <TitlePage titlePage="Profesores" />
            <div className={styles['header']}>
                <Button className={styles['create-btn']} variant="contained" onClick={() => { router.push('/profesores/create') }}><AddCircleOutlineIcon style={{marginRight:'5px'}}/>Crear profesor</Button>
                <Button variant="contained" onClick={() => { router.push('/profesores/import') }}> <DownloadIcon/>Descargar lista</Button>
            </div>
            <TableContainer className={styles.table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Domicilio</TableCell>
                            <TableCell align="center">Correo electrónico</TableCell>
                            <TableCell align="center">Teléfono</TableCell>
                            <TableCell align="center">Habilitado</TableCell>
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
                                <TableCell align="center">{row.domicilio}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.telefono}</TableCell>
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

export default Profesores