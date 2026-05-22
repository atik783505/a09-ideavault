'use client';
import React, { useState } from 'react';
import {
    Form,
    TextField,
    Label,
    Input,
    TextArea,
    Select,
    ListBox,
    Button,
    Card,
    CardHeader,
} from '@heroui/react';
import { authClient, useSession } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { Rocket } from '@gravity-ui/icons';

const AddIdeaForm = () => {
    const [loading, setLoading] = useState(false);
    const { data } = useSession();
    const user = data?.user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const ideaData = Object.fromEntries(formData.entries());
        const userData = {
            userName: user?.name,
            userEmail: user?.email,
            userId: user?.id,
            userImage: user?.image,
        };

        if (ideaData.tags) {
            ideaData.tags = ideaData.tags.split(',').map(tag => tag.trim());
        }
        const finalData = {
            ...ideaData,
            ...userData
        };

        try {
            const { data: tokenData } = await authClient.token();

            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${tokenData.token}`
                },
                body: JSON.stringify(finalData)
            });

            if (res.ok) {
                toast.success('Idea Successfully Added');
                e.target.reset();
            } else {
                toast.error('Error sharing your idea');
            }
        } catch (error) {
            toast.error('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <CardHeader className="flex flex-col items-start gap-1 pb-6">
                <h2 className="text-2xl font-bold text-foreground">Add New Idea to Vault</h2>
                <p className="text-sm text-muted-foreground">Secure your new idea in the vault.</p>
            </CardHeader>

            <Form onSubmit={handleSubmit} className="w-full space-y-6">
                <TextField name="title" isRequired className="w-full flex flex-col gap-1.5">
                    <Label className="text-sm font-medium text-foreground">Idea Title</Label>
                    <Input className="rounded-lg border-border/60" placeholder="Enter a catchy title for your idea" />
                </TextField>

                <TextField name="shortDescription" isRequired className="w-full flex flex-col gap-1.5">
                    <Label className="text-sm font-medium text-foreground">Short Description</Label>
                    <Input className="rounded-lg border-border/60" placeholder="Briefly explain the core concept (1-2 sentences)" />
                </TextField>

                <TextField name="problemStatement" isRequired className="w-full flex flex-col gap-1.5">
                    <Label className="text-sm font-medium text-foreground">Problem Statement</Label>
                    <TextArea className="rounded-lg border-border/60 min-h-[80px]" placeholder="What problem does this idea solve?" />
                </TextField>

                <TextField name="proposedSolution" isRequired className="w-full flex flex-col gap-1.5">
                    <Label className="text-sm font-medium text-foreground">Proposed Solution</Label>
                    <TextArea className="rounded-lg border-border/60 min-h-[100px]" placeholder="How does your idea solve the problem?" />
                </TextField>

                <TextField name="detailedDescription" isRequired className="w-full flex flex-col gap-1.5">
                    <Label className="text-sm font-medium text-foreground">Detailed Description</Label>
                    <TextArea className="rounded-lg border-border/60 min-h-[140px]" placeholder="Describe your idea in detail (features, workflow, etc.)" />
                </TextField>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select name='category' className="w-[256px]" placeholder="Select one">
                        <Label>Category</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="Tech" textValue="Tech">Tech<ListBox.ItemIndicator /></ListBox.Item>
                                <ListBox.Item id="Health" textValue="Health">Health<ListBox.ItemIndicator /></ListBox.Item>
                                <ListBox.Item id="AI" textValue="AI">AI<ListBox.ItemIndicator /></ListBox.Item>
                                <ListBox.Item id="Education" textValue="Education">Education<ListBox.ItemIndicator /></ListBox.Item>
                                <ListBox.Item id="Programming" textValue="Programming">Programming<ListBox.ItemIndicator /></ListBox.Item>
                                <ListBox.Item id="Finance" textValue="Finance">Finance<ListBox.ItemIndicator /></ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField name="targetAudience" isRequired className="w-full flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-foreground">Target Audience</Label>
                        <Input className="rounded-lg border-border/60" placeholder="e.g. Students, Developers" />
                    </TextField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField name="estimatedBudget" className="w-full flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-foreground">Estimated Budget (Optional)</Label>
                        <Input type="number" className="rounded-lg border-border/60" placeholder="e.g. 500" />
                    </TextField>

                    <TextField name="imageUrl" className="w-full flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-foreground">Image URL</Label>
                        <Input type="url" className="rounded-lg border-border/60" placeholder="https://example.com/image.jpg" />
                    </TextField>
                </div>

                <TextField name="tags" className="w-full flex flex-col gap-1.5">
                    <Label className="text-sm font-medium text-foreground">Tags (Optional)</Label>
                    <Input className="rounded-lg border-border/60" placeholder="e.g. saas, ai, productivity" />
                </TextField>

                <Button
                    type="submit"
                    variant="primary"
                    className="w-full font-semibold rounded-lg bg-primary text-white py-2"
                    isLoading={loading}
                >
                    {loading ? "Sharing..." :
                     <div className='flex gap-2'>
                        <span>Share Idea</span>
                        <Rocket className="size-4 animate-bounce" />
                    </div>}
                </Button>
            </Form>
        </Card>
    );
};

export default AddIdeaForm;