
import { Avatar, Button, Card } from '@heroui/react';
import { Edit2, Trash2 } from 'lucide-react';
import React from 'react';
import Comment from './Comment';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import CommentDelete from './CommentDelete';
import EditComment from './EditComment';


const Showcomment = async ({ data }) => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    console.log(session)

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
            <Comment data={data} comments={comments}></Comment>
            {
                comments.map(comment => <Card
                    key={comment._id}
                    className="border border-success-200/50 dark:border-success-800/20 bg-success-50/20 dark:bg-success-950/10 shadow-none rounded-2xl w-full max-w-3xl transition-all duration-300 hover:border-success-300 dark:hover:border-success-700/40 mb-6"
                >
                    <div className="flex flex-col gap-2.5">

                        <div className="flex items-center justify-between gap-3">

                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <Avatar.Image
                                        alt={comment?.userName || "User"}
                                        src={comment?.userImg}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback delayMs={600}>
                                        {comment?.userName ? comment.userName.slice(0, 2).toUpperCase() : "JD"}
                                    </Avatar.Fallback>
                                </Avatar>

                                <h4 className="text-sm font-semibold text-default-800 dark:text-default-200 leading-tight">
                                    {comment.userName}
                                </h4>
                            </div>

                            {
                                user.id === comment.userId
                                    ?
                                    <div className="flex items-center gap-1.5">
                                       <EditComment comment={comment}></EditComment>
                                        <CommentDelete comment={comment}></CommentDelete>
                                    </div>
                                    : ''
                            }

                        </div>

                        <p className="text-default-700 dark:text-default-300 leading-relaxed text-sm md:text-base whitespace-pre-line pl-1">
                            {comment.commentText}
                        </p>

                        <div className="pl-1 mt-0.5 opacity-70">
                            <span className="text-[11px] md:text-xs text-default-400 dark:text-default-500 font-medium tracking-wide">
                                {formatDate(comment.createdAt)}
                            </span>
                        </div>

                    </div>
                </Card>)
            }
        </div>
    );
};

export default Showcomment;