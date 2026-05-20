
import MyideaCard from '@/components/MyideaCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const Myideas = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`http://localhost:5000/myideas/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json()
    console.log(data)
    return (
        <div className='w-11/12 mx-auto my-5'>
            <h2 className='font-bold text-[40px] text-center'>My Ideas</h2>
            {
                data.map(idea => <MyideaCard key={idea._id} idea={idea}></MyideaCard>)
            }
        </div>
    );
};

export default Myideas;