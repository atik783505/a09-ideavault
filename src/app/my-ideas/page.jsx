
import MyideaCard from '@/components/MyideaCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';


export const metadata = {
    title: "My Ideas | IdeaVault",
    description: "Access and manage your personal collection of innovative ideas.",
};

const Myideas = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/myideas/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json()
    console.log(data)
    return (
        <div className="w-11/12 mx-auto my-5">
            <h2 className="font-bold text-[40px] text-center mb-6">My Ideas</h2>
            {
                data.length === 0 ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-700 mb-2">No Ideas Available</h2>
                        <p className="text-slate-500 text-sm max-w-sm mx-auto">
                            Your creative vault is currently empty. Start capturing your brilliant thoughts!
                        </p>
                    </div>
                ) : (

                    <div className="grid grid-cols-1 gap-4">
                        {
                            data.map(idea => (
                                <MyideaCard key={idea._id} idea={idea} />
                            ))
                        }
                    </div>

                )
            }
        </div>
    );
};

export default Myideas;