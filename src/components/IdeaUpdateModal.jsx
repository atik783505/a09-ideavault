"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextArea, TextField, Select, ListBox } from "@heroui/react";
import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function IdeaUpdateModal({ idea }) {
    const router = useRouter()

    const handleUpdateModal = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedIdeaData = Object.fromEntries(formData.entries());
         const {data:tokenData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/myideas/${idea._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${tokenData.token}`
            },body:JSON.stringify(updatedIdeaData)
        })
        if(res.ok){
            toast.success('Updated Succesfully')
        }
        if(!res.ok){
            toast.error('Error')
        }
        router.refresh()
        
    }
    return (
        <Modal>
            <Button variant="outline" className='rounded-none'>Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-3xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-primary-soft text-primary-soft-foreground">
                                <SquarePen className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>Update Your Idea</Modal.Heading>

                            <p className="mt-1.5 text-sm leading-5 text-default-500 dark:text-neutral-400">
                                Modify the fields below to update your project details, budget, or target audience. Changes will reflect instantly.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={handleUpdateModal}>
                                    <TextField defaultValue={idea.title} name="title" isRequired className="w-full flex flex-col gap-1.5">
                                        <Label className="text-sm font-medium text-foreground">Idea Title</Label>
                                        <Input className="rounded-lg border-border/60" placeholder="Enter a catchy title for your idea" />
                                    </TextField>

                                    <TextField defaultValue={idea.shortDescription} name="shortDescription" isRequired className="w-full flex flex-col gap-1.5">
                                        <Label className="text-sm font-medium text-foreground">Short Description</Label>
                                        <Input className="rounded-lg border-border/60" placeholder="Briefly explain the core concept (1-2 sentences)" />
                                    </TextField>

                                    <TextField defaultValue={idea.problemStatement} name="problemStatement" isRequired className="w-full flex flex-col gap-1.5">
                                        <Label className="text-sm font-medium text-foreground">Problem Statement</Label>
                                        <TextArea className="rounded-lg border-border/60 min-h-[80px]" placeholder="What problem does this idea solve?" />
                                    </TextField>

                                    <TextField defaultValue={idea.proposedSolution} name="proposedSolution" isRequired className="w-full flex flex-col gap-1.5">
                                        <Label className="text-sm font-medium text-foreground">Proposed Solution</Label>
                                        <TextArea className="rounded-lg border-border/60 min-h-[100px]" placeholder="How does your idea solve the problem?" />
                                    </TextField>

                                    <TextField defaultValue={idea.detailedDescription} name="detailedDescription" isRequired className="w-full flex flex-col gap-1.5">
                                        <Label className="text-sm font-medium text-foreground">Detailed Description</Label>
                                        <TextArea className="rounded-lg border-border/60 min-h-[140px]" placeholder="Describe your idea in detail (features, workflow, etc.)" />
                                    </TextField>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        <Select defaultValue={idea.category} name='category' placeholder="Select one">
                                            <Label>Category</Label>
                                            <Select.Trigger>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="Tech" textValue="Tech">
                                                        Tech
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Health" textValue="Health">
                                                        Health
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="AI" textValue="AI">
                                                        AI
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Education" textValue="Education">
                                                        Education
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Programing" textValue="Programing">
                                                        Programing
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Finance" textValue="Finance">
                                                        Finance
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        <TextField defaultValue={idea.targetAudience} name="targetAudience" isRequired className="w-full flex flex-col gap-1.5">
                                            <Label className="text-sm font-medium text-foreground">Target Audience</Label>
                                            <Input className="rounded-lg border-border/60" placeholder="e.g. Students, Developers" />
                                        </TextField>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <TextField defaultValue={idea.estimatedBudget} name="estimatedBudget" className="w-full flex flex-col gap-1.5">
                                            <Label className="text-sm font-medium text-foreground">Estimated Budget (Optional)</Label>
                                            <Input type="number" className="rounded-lg border-border/60" placeholder="e.g. 500" />
                                        </TextField>

                                        <TextField defaultValue={idea.imageUrl} name="imageUrl" className="w-full flex flex-col gap-1.5">
                                            <Label className="text-sm font-medium text-foreground">Image URL</Label>
                                            <Input type="url" className="rounded-lg border-border/60" placeholder="https://example.com/image.jpg" />
                                        </TextField>
                                    </div>

                                    {/* Tags */}
                                    <TextField defaultValue={idea.tags} name="tags" className="w-full flex flex-col gap-1.5">
                                        <Label className="text-sm font-medium text-foreground">Tags (Optional)</Label>
                                        <Input className="rounded-lg border-border/60" placeholder="e.g. saas, ai, productivity" />
                                    </TextField>


                                    <Modal.Footer>
                                        <Button type="submit" slot="close" className='w-full font-semibold rounded-lg bg-primary text-white py-2'>Update Idea</Button>
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