import { Check } from '@gravity-ui/icons';
import { Button, Form, Label, TextArea, TextField } from '@heroui/react';
import React from 'react';

const Comment = () => {

 const handleComment = (e) => {
    e.preventDefault

 }

    return (
        <div className="w-full max-w-2xl mt-6">
            <Form className="w-full flex flex-col gap-3" onClick={handleComment}>
                <Label>Comment</Label>
                <TextArea
                    name="bio"
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