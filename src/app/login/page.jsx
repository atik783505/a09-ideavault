"use client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import logo from '../../../public/images/logo_transparent_final.png'
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user)
        const { data, error } = await authClient.signIn.email({
            email: user.email, // required
            password: user.password, // required
            callbackURL: '/',
        });

        if (data) {
            toast.success('Login Successfully')
        }
        if (error) {
            toast.error('failed')
        }
    };

    const handleGogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <Card className="max-w-96 mx-auto my-4">
            <div className="flex items-center gap-2 justify-center select-none shrink-0">
                <Image
                    src={logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain shrink-0"
                />
                <h4 className="text-blue-600 dark:text-blue-500 text-lg sm:text-xl md:text-2xl font-black tracking-tight">
                    IdeaVault
                </h4>
            </div>
            <h2 className="text-center font-bold text-[24px]">Login</h2>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={6}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex justify-center w-full rounded-none">
                    <Button className='rounded-none w-full' type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            <div className="flex items-center mt-4 w-full">
                <hr className="flex-1 border-default-200 dark:border-default-100" />
                <span className="px-3 text-xs font-medium uppercase text-default-400 tracking-wider shrink-0">
                    OR
                </span>
                <hr className="flex-1 border-default-200 dark:border-default-100" />
            </div>
            <div className="mt-6">

                <Button variant="outline" className='w-full rounded-none' onClick={handleGogle}><FcGoogle />Continue With Google</Button>
            </div>
            <span className="text-blue-600 font-semibold hover:underline text-center">Forget Password</span>
            <h2 className="text-center text-slate-900/60 dark:text-white/60 text-sm font-medium">
                Dont have an account?
                <Link href="/register">
                    <span className="text-blue-600 font-semibold hover:underline">Register</span>
                </Link>
            </h2>
        </Card>
    );
}