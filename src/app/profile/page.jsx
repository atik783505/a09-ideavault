import { UserUpdateModal } from '@/components/UserUpdateModal';
import { auth } from '@/lib/auth';
import { Avatar, Button, Card } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const Profile = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    return (
        <div>
            <Card className='max-w-96 mx-auto text-center mt-7'>
                <Avatar size="sm" className='w-15 h-15 mx-auto'>
                    <Avatar.Image
                        alt="Jane"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                </Avatar>
                <h2 className='text-[20px]'>{user.name}</h2>
                <p className='opacity-60 text-[14px]'>{user.email}</p>
                <UserUpdateModal></UserUpdateModal>
            </Card>
        </div>
    );
};

export default Profile;