//using a decorator
"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function page() {
    const [user, setuser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const onLogin = async () => {
        
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-400">
            <h1 >
          LOGIN PAGE
            </h1>
            <hr />
           
            <label htmlFor="email">email</label>
            <input className="p-1 rounded-lg"
                type="text" id="email" value={user.email} onChange={(e) => (setuser({ ...user, email: e.target.value }))  
                } />
            <label htmlFor="password">password</label>
            <input className="p-1 rounded-lg"
                type="password" id="password" value={user.password} onChange={(e) => (setuser({ ...user, password: e.target.value }))  
                } />
            <button onClick={onLogin}>
                Login Here
            </button>
           <Link href="/signup"> Visit SignUP page</Link>
        </div>
    );
}
