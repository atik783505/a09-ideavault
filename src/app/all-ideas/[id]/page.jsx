import Comment from '@/components/Comment';
import Showcomment from '@/components/Showcomment';
import { Avatar, Button, Card, Chip, ProgressBar } from '@heroui/react';
import { AlertTriangle, CheckCircle2, FileText, Mail, Shield, Users, Wallet } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const IdeaDetails = async ({ params }) => {

    const { id } = await params
    const res = await fetch(`http://localhost:5000/ideas/${id}`)
    const data = await res.json()
    console.log(data)

    return (
        <div className='w-11/12 mx-auto my-7'>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
                <div className="md:col-span-7 flex flex-col gap-4">
                    <Chip
                        size="sm"
                        variant="flat"
                        color="primary"
                        className="uppercase tracking-wider font-bold px-2.5 w-fit"
                    >
                        {data.category}
                    </Chip>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                        {data.title}
                    </h1>
                    <div className="flex items-center gap-3 bg-default-50 w-fit px-4 py-2 rounded-2xl border border-default-100">
                        <Avatar>
                            <Avatar.Image
                                alt="Junior Garcia"
                                src={data.userImage}
                                referrerPolicy="no-referrer"
                            />
                            <Avatar.Fallback delayMs={600}>{data.userName.slice(0, 1).toUpperCase()}</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-xs text-default-400 leading-none">Shared by</span>
                            <span className="text-sm font-bold text-foreground mt-1">
                                {data.userName || "Anonymous Founder"}
                            </span>
                        </div>
                    </div>
                    <p className="text-lg text-default-500 leading-relaxed font-normal mt-2">
                        {data.shortDescription}
                    </p>

                    <div className="flex gap-3 mt-2">
                        <button className="bg-primary text-white font-semibold px-6 py-2.5 rounded-xl shadow-md hover:opacity-90 transition">
                            Invest in Idea
                        </button>
                        <button className="border-2 border-primary text-primary font-semibold px-6 py-2.5 rounded-xl hover:bg-primary/5 transition">
                            Save to Vault
                        </button>
                    </div>
                </div>

                <div className="md:col-span-5 rounded-3xl w-full h-64 md:h-80 overflow-hidden bg-default-100 shadow-lg relative">
                    <Image
                        src={data.imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"}
                        alt={data.title}
                        width={600}
                        height={600}
                        priority
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className="flex flex-col gap-6 mt-8">

                    <Card className="border border-danger-100/40 bg-danger-50/5 dark:bg-danger-950/10 shadow-none rounded-2xl">
                        <div className="p-6 flex flex-col gap-3">
                            <h3 className="text-lg font-bold text-danger flex items-center gap-2">
                                <AlertTriangle className="size-5" /> The Problem
                            </h3>
                            <p className="text-default-600 leading-relaxed text-sm md:text-base">
                                {data.problemStatement}
                            </p>
                        </div>
                    </Card>

                    <Card className="border border-success-100/40 bg-success-50/5 dark:bg-success-950/10 shadow-none rounded-2xl">
                        <div className="p-6 flex flex-col gap-3">
                            <h3 className="text-lg font-bold text-success flex items-center gap-2">
                                <CheckCircle2 className="size-5" /> Proposed Solution
                            </h3>
                            <p className="text-default-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                                {data.proposedSolution}
                            </p>
                        </div>
                    </Card>

                    <Card className="border border-default-100 bg-background/50 backdrop-blur-md shadow-sm rounded-2xl">
                        <div className="p-6 flex flex-col gap-3">
                            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                                <FileText className="size-5 text-primary" /> Detailed Description
                            </h3>
                            <p className="text-default-500 leading-relaxed text-sm md:text-base whitespace-pre-line">
                                {data.detailedDescription}
                            </p>
                        </div>
                    </Card>

                </div>
                <div>
                    <Card className="border border-default-100 shadow-sm bg-background/50 backdrop-blur-md rounded-3xl">
                        <div className="p-5 flex flex-col gap-5">

                            <div className="flex flex-col gap-2">
                                <span className="text-[11px] text-default-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                    <Wallet className="size-3.5" /> Estimated Budget
                                </span>
                                <h2 className="text-3xl font-black text-foreground">
                                    {data.estimatedBudget ? `$${Number(data.estimatedBudget).toLocaleString()}` : "$0.00"}
                                </h2>
                                <ProgressBar size="sm" value={75} color="primary" className="mt-1" />
                            </div>

                            <div className="flex flex-col gap-2 border-t border-default-100 pt-4">
                                <span className="text-[11px] text-default-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                    <Users className="size-3.5" /> Target Audience
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-md">
                                        {data.targetAudience}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 border-t border-default-100 pt-4">
                                <span className="text-[11px] text-default-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                    <Shield className="size-3.5" /> Security Status
                                </span>
                                <div className="flex items-center gap-2 text-sm font-semibold text-default-600">
                                    <Shield className="size-4 text-primary" />
                                    <span>Vault Secured</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 border-t border-default-100 pt-4">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <Avatar.Image
                                            alt="Junior Garcia"
                                            src={data.userImage}
                                            referrerPolicy="no-referrer"
                                        />
                                        <Avatar.Fallback delayMs={600}>{data.userName.slice(0, 1).toUpperCase()}</Avatar.Fallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-bold text-foreground">{data.userName || "Anonymous Founder"}</h4>
                                        <p className="text-xs text-default-400 flex items-center gap-1 mt-0.5">
                                            <Mail className="size-3" /> {data.userEmail || "Hidden Email"}
                                        </p>
                                    </div>
                                </div>

                                <Button color="default" variant="bordered" size="sm" className="w-full font-semibold rounded-xl">
                                    Connect with Founder
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <Comment data={data}></Comment>
                <Showcomment data={data}></Showcomment>
            </div>
        </div>
    );
};

export default IdeaDetails;