import { IdeaCard } from '@/components/IdeaCard';
import SearchFilterBar from '@/components/SerachCategory';
import { Label, SearchField } from '@heroui/react';
import React from 'react';

const AllIdeas = async({searchParams }) => {
    const { search = '', category = '' } = await searchParams;
    const res = await fetch(`http://localhost:5000/ideas?search=${search}&category=${category}`)
    const ideas = await res.json()
    console.log(ideas)
    return (
        <div className='my-5'>
            <h2 className='font-bold text-[40px] text-center'>All Ideas</h2>
            {/* <SearchField className='max-w-96 mx-auto' name="search">
                <Label>Search</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-[280px]" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField> */}
            <SearchFilterBar></SearchFilterBar>
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-6 my-7'>
                {
                    ideas.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                }
            </div>
        </div>
    );
};

export default AllIdeas;