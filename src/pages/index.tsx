import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@styles/login.module.scss';
import { FormEventHandler, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { signIn, useSession} from 'next-auth/react';
import { IUser, UserTest } from '../interfaces/users';

const inter = Inter({ subsets: ['latin'] })

export default function Login() {

  const router = useRouter();
  const [islogged, setIslogged] = useState(true);
  const [user, setUser] = useState<IUser | undefined>();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const {status} = useSession();
  const [error, seterror] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
    });
    console.log(res);
    if(res?.status !== 200){
      seterror(true);
    }

    if (res?.status === 200) {
      router.push('/home');
      seterror(false);
    }

    
  }

  useEffect(() => {
    if (status === "authenticated") {
      router.push('/home');
    }
  }, [status])
  
  return (
    <>
      <div className={styles.container}>

        <form onSubmit={handleSubmit} className={styles.form} >
          {error && <h1 style={{color: 'red'}}>Credenciales invalidas</h1>}
          <h1 style={{marginBottom: '10%'}}>Inicia sesión</h1>  
          <input type="text" placeholder='email' className={styles.input} value={userInfo.email} onChange={({ target}) => setUserInfo({ ...userInfo, email: target.value })} />
          <input type="password" placeholder='password'  className={styles.input} value={userInfo.password} onChange={({ target}) => setUserInfo({ ...userInfo, password: target.value })} />
          <button type="submit"  className={styles.button}>Login</button>
        </form>
      </div>
    </>
  )
}