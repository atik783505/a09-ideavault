'use client'
import { authClient, useSession } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Form, Label, TextArea } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Comment = ({ data, comments }) => {
    const router = useRouter()

    const { data: session } = useSession()
    const user = session?.user

    const handleComment = async (e) => {
        e.preventDefault()
        const commentText = e.target.comment.value
        const finalData = {
            ideaId: data._id,
            title: data.title,
            userName: user?.name,
            userEmail: user?.email,
            userId: user?.id,
            userImg: user?.image,
            commentText
        }
        const { data: tokenData } = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/comment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData.token}`
            }, body: JSON.stringify(finalData)
        })
        if (res.ok) {
            toast.success('commented success')
        }
        router.refresh()

    }

    return (
        <div className="w-full max-w-3xl mt-8">
            <Form className="w-full flex flex-col gap-3" onSubmit={handleComment}>
                <Label className='text-[24px]'>Comments({comments.length})</Label>
                <TextArea
                    name="comment"
                    label="Comment"
                    placeholder="Tell us about yourself..."
                    variant="bordered"
                    className={{
                        base: "w-full",
                        input: "min-h-[100px]"
                    }}
                />

                <div className="flex justify-end w-full">
                    <Button
                        type="submit"
                        color="primary"
                        className="font-semibold px-6 rounded-xl flex items-center gap-1.5 mb-6"
                    >
                        <Check className="size-4" />
                        Post Comment
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Comment;