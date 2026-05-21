'use client'
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const CommentDelete = ({ comment }) => {
    const router = useRouter()
    const handleDelete = async () => {
         const {data:tokenData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/comment/${comment._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${tokenData.token}`
            },
        })
        if(res.ok){
            toast.success('success')
            router.refresh()
        }
        if(!res.ok){
            toast.error('error')
            return
        }
        
    }
    return (
        <div>
            <Button
                onClick={handleDelete}
                isIconOnly
                size="sm"
                variant="light"
                className="text-default-400 hover:text-default-700 dark:hover:text-default-200 rounded-xl"
                aria-label="Edit comment"
            >
                <Trash2 className="size-3.5" />
            </Button>

        </div>
    );
};

export default CommentDelete;