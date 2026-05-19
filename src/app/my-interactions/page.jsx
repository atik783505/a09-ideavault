import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const Interaction = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user

    console.log(user)
    const res = await fetch(`http://localhost:5000/mycomment/${user?.id}`)
    const ideas = await res.json()
    const formatDate = (dateString) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-4xl text-center my-3'>My Activity</h2>
            {
                ideas.map(idea =>
                    <Card key={idea._id} className='w-full my-3'>
                        <h2 className='text-[20px]'>{idea.title}</h2>
                        <p className='opacity-75'>{idea.commentText}</p>
                        <div className="pl-1 mt-0.5 opacity-70">
                            <span className="text-[11px] md:text-xs text-default-400 dark:text-default-500 font-medium tracking-wide">
                                {formatDate(idea.createdAt)}
                            </span>
                        </div>
                    </Card>)
            }
        </div>
    );
};

export default Interaction;