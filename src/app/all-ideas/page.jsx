import { IdeaCard } from '@/components/IdeaCard';
import SearchFilterBar from '@/components/SerachCategory';
import React from 'react';

export const metadata = {
    title: "All Ideas | IdeaVault",
    description: "Explore a curated showcase of innovative ideas IdeaVault.",
};

const AllIdeas = async ({ searchParams }) => {
    const { search = '', category = '' } = await searchParams;
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas?search=${search}&category=${category}`)
    const ideas = await res.json()
    console.log(ideas)
    return (
        <div className='my-5'>
            <h2 className='font-bold text-[40px] text-center'>All Ideas</h2>
            <SearchFilterBar></SearchFilterBar>
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-6 my-7'>
                {
                    ideas.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                }
            </div>
        </div>
    );
};

export default AllIdeas;