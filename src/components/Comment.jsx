'use client'
import { useSession } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Form, Label, TextArea } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';

const Comment = ({ data }) => {

    const handleComment = async (e) => {
        e.preventDefault()
        const commentText = e.target.comment.value
        console.log(commentText)
        const finalData = {
            ideaId: data._id,
            userName: data.userName,
            userEmail: data.userEmail,
            userId: data.userId,
            userImg: data.userImage,
            commentText
        }
        const res = await fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },body:JSON.stringify(finalData)
        })
        console.log(finalData)
        if(res.ok){
            toast.success('commented success')
        }
    }

    return (
        <div className="w-full max-w-2xl mt-6">
            <Form className="w-full flex flex-col gap-3" onSubmit={handleComment}>
                <Label>Comment</Label>
                <TextArea
                    name="comment"
                    label="Comment"
                    placeholder="Tell us about yourself..."
                    variant="bordered"
                    classNames={{
                        base: "w-full",
                        input: "min-h-[100px]"
                    }}
                />

                <div className="flex justify-end w-full">
                    <Button
                        type="submit"
                        color="primary"
                        className="font-semibold px-6 rounded-xl flex items-center gap-1.5"
                    >
                        <Check className="size-4" />
                        Post
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Comment;