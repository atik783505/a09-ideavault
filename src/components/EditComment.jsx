"use client";
import { Button, Form, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EditComment = ({ comment }) => {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        const updateComemnt = e.target.comment.value
        const updatedData ={
            commentText:updateComemnt,
        }
        console.log(updatedData)
        console.log(updateComemnt)
        const res = await fetch(`http://localhost:5000/comment/${comment._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(updatedData)
        })
        if (res.ok) {
            toast.success('Edited SuccessFully')
        }
        if (!res.ok) {
            toast.error('error')
        }
        router.refresh()

    }
    return (
        <div>
            <Modal>
                <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-default-400 hover:text-default-700 dark:hover:text-default-200 rounded-xl"
                    aria-label="Edit comment"
                >
                    <Edit2 className="size-3.5" />
                </Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <TextField defaultValue={comment.commentText} className="w-full" name="comment" variant="secondary">
                                            <Label>Comment</Label>
                                            <Input name="comment" placeholder="Enter your message" />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button type="submit" slot="close">Save</Button>
                                        </Modal.Footer>
                                    </Form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditComment;