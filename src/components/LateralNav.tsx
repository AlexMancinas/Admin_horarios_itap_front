import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '@styles/LateralNav.module.scss';
import { SidebarI } from '../interfaces/props';
import { Divider } from '@mui/material';

export const LateralNav:React.FC= () => {
  const { data: session }: any = useSession();
  const {status} = useSession();
  const router = useRouter();
  console.log(status);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/');
    }
  }, [status])
  

  return (
    status && status === 'authenticated' && 
    <nav className={styles['nav-container']} >
      {
     
        <div className={styles.menu}>
          <h1 onClick={()=>{router.push('/')}}>{session.user.name}</h1>
          
          
          
          <button className={styles['btn']} onClick={()=>{signOut();}}>
            logout
          </button>
          <a onClick={()=>{router.push('/profesores')}}>
            Profesores
          </a>
          <a onClick={()=>{router.push('/aulas')}}>
            Aulas
          </a>
          <a onClick={()=>{router.push('/materias')}}>
            Materias
          </a>
          <a onClick={()=>{router.push('/grupos')}}>
            Grupos
          </a>
          <a onClick={()=>{router.push('/horarios')}}>
            Horarios
          </a>

        </div>
      }
    </nav>
  )
}
