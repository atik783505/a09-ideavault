import { Persons } from '@gravity-ui/icons';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const Showcomment = async ({ data }) => {

    const res = await fetch(`http://localhost:5000/comment/${data._id}`)
    const comments = await res.json()
    const formatDate = (dateString) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }
    return (
        <div>
            {
                comments.map(comment => <Card
                    key={comment._id}
                    className="border border-success-200/50 dark:border-success-800/20 bg-success-50/20 dark:bg-success-950/10 shadow-none rounded-2xl w-full max-w-2xl transition-all duration-300 hover:border-success-300 dark:hover:border-success-700/40"
                >
                    <div className="p-5 flex flex-col gap-3">

                        {/* হেডার পার্ট: ইউজার ইনফো ও টাইমস্ট্যাম্প */}
                        <div className="flex items-center justify-between gap-3 border-b border-default-100 dark:border-default-800/60 pb-2.5">
                            <div className="flex items-center gap-3">

                                {/* ইউজার অবতার */}
                                <Avatar
                                    name={comment.userName}
                                    size="sm"
                                    className="bg-success-100/80 text-success-700 font-bold dark:bg-success-950/60 dark:text-success-400"
                                    icon={<Persons className="size-4" />}
                                />

                                {/* ইউজারের নাম এবং মোবাইল টাইমস্ট্যাম্প */}
                                <div>
                                    <h4 className="text-sm font-semibold text-default-800 dark:text-default-200 leading-tight">
                                        {comment.userName}
                                    </h4>
                                    <span className="text-[11px] text-default-400 dark:text-default-500 md:hidden block mt-0.5">
                                        {formatDate(comment.createdAt)}
                                    </span>
                                </div>
                            </div>

                            {/* ডেস্কটপ স্ক্রিনের জন্য ডানপাশের টাইমস্ট্যাম্প ক্যাপসুল */}
                            <span className="text-xs text-default-500 dark:text-default-400 hidden md:block bg-default-100/70 dark:bg-default-800/50 px-2.5 py-1 rounded-full font-medium">
                                {formatDate(comment.createdAt)}
                            </span>
                        </div>

                        {/* কমেন্ট টেক্সট এরিয়া */}
                        <p className="text-default-600 dark:text-default-300 leading-relaxed text-sm md:text-base whitespace-pre-line pl-1">
                            {comment.commentText}
                        </p>

                    </div>
                </Card>)
            }
        </div>
    );
};

export default Showcomment;