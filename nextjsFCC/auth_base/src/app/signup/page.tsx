//using a decorator
"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

// / * Task tree-1
//     add a user disabled button and if username and password is empty then disable the utton and else enable the button
//     check the user input by the useEffect 
//      add a shortcircuit method for it
//     * /

/*  Task tree-2 

    


*/

export default function page() {
    //add a router to the page
    const router = useRouter();
    const [user, setuser] = React.useState({
        email: "",
        password: "",
        username: ""
    })
    //add a usestate for button disabled
    const [ButtonDisabled, setButtonDisabled] = React.useState(false)
    //work on the axios tree2
    const onSignUp = async () => {
        
    }

    //useeffect to check the input fields
    React.useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            //if valid it must be false
            setButtonDisabled(false)
        }
        else {
            setButtonDisabled(true)
        }
    },[user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-400">
            <h1 >
             Sign UP
            </h1>
            <hr />
            <label htmlFor="username">username</label>
            <input className="p-1 rounded-lg"
                type="text" id="username" value={user.username} onChange={(e) => (setuser({ ...user, username: e.target.value }))  
                } />
            <label htmlFor="email">email</label>
            <input className="p-1 rounded-lg"
                type="text" id="email" value={user.email} onChange={(e) => (setuser({ ...user, email: e.target.value }))  
                } />
            <label htmlFor="password">password</label>
            <input className="p-1 rounded-lg"
                type="password" id="password" value={user.password} onChange={(e) => (setuser({ ...user, password: e.target.value }))  
                } />
                
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={onSignUp}>
           
              {ButtonDisabled ? "Disabled" : "Sign Up"}
            </button>
           <Link href="/login"> Visit Login Page</Link>
        </div>
    );
}
