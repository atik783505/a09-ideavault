"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function UserUpdateModal() {
    const router = useRouter()
    const handleUserUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedUserData = Object.fromEntries(formData.entries());
        console.log(updatedUserData)
        const { data, error } = await authClient.updateUser({
            ...updatedUserData
        })
        if (error) {
            toast.error(error.message || "Update failed");
            return;
        }

        if (data) {
            toast.success("Profile updated successfully!");
            router.refresh()
        }

    }
    return (
        <Modal>
            <Button variant='outline' className='rounded-md w-5/12 mx-auto'>Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <h2>Profile Update</h2>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleUserUpdate} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label>Name</Label>
                                        <Input name="name" placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="tel" variant="secondary">
                                        <Label>ImageUrl</Label>
                                        <Input name="image" placeholder="Imageurl" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}