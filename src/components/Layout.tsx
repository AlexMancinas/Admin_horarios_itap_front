import React from 'react'
import { LayoutI } from '../interfaces/props'
import { LateralNav } from './LateralNav'
import { SessionProvider } from 'next-auth/react'
import styles from '@styles/Layout.module.scss';

const Layout: React.FC<LayoutI> = ({ children }) => {

    return (
        <SessionProvider >
            <div className={styles['container']}>
                <LateralNav  />

                <main className={styles['main']}>
                    <section>
                        {children}
                    </section>
                </main>
            </div>
        </SessionProvider>
    )
}

export default Layout