import React from 'react';
import styles from '@styles/TitlePage.module.scss';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TitlePageI } from '../interfaces/props';

const TitlePage: React.FC<TitlePageI> = ({ titlePage, renderX, onlyTitle, extraActionForBackButton, renderBackInDesk }) => {

    const router = useRouter();

    return (
        <article className={styles.container}>
            <Head>
                <title>{titlePage}</title>
            </Head>
            {
                !onlyTitle && (
                    renderX ? (
                        <button className={`${styles.button} ${styles.close}`}>
                            <CloseIcon />
                        </button>
                    ) : (
                        <button 
                            onClick={() => extraActionForBackButton ? extraActionForBackButton() : router.back()} 
                            className={styles.button} 
                            data-render={renderBackInDesk}
                            type='button'
                        >
                            <ArrowBackIcon 
                                color='primary' 
                            />
                        </button>
                    )
                )
            }
            <span className={styles.title}>{titlePage}</span>
        </article>
    );
};

export default TitlePage;