import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, {  useEffect, useState } from 'react'
import { IUser, UserTest } from '../../interfaces/users';
import Image from 'next/image';
import styles from '@styles/Home.module.scss';


const Home: NextPage = () => {

    const [islogged, setIslogged] = useState(true);
    const [user, setUser] = useState<IUser | undefined>();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const user = UserTest;
        setUser(user);
    }, [])


    const router = useRouter();

    useEffect(() => {
        if (islogged) {

        }
        else {
            router.push('/');
        }

    }, [])
   const handleChange = (e: any) => {
         console.log(e.target.value);
    }

    return (
        <div className={styles.container}>
            <Image src="https://www.cdcuauhtemoc.tecnm.mx/wp-content/uploads/2021/08/LOGO-VERTICAL-TECNM.png" alt="logo" width={400} height={400} />
        </div>
    )
}


export default Home;