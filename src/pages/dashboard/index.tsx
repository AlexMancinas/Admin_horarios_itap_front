import { NextPage } from 'next'
import { useSession } from 'next-auth/react';
import {  useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Dashboard: NextPage = () => {
    const { status, data } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "unauthenticated")  {
            router.push("/auth/signin");
        }
    }, [status])

    if (status === "authenticated") {
        return <div>This page is protected for special people.</div>
    }
    return <h1>loading</h1>;
}

export default Dashboard