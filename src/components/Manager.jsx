import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import '../table.css';
import 'react-toastify/dist/ReactToastify.css';


const user = document.querySelector(".username")
const siteurl = document.querySelector(".url")
const pass = document.querySelector(".password")


const Manager = () => {
    const [form, setForm] = useState({ username: "", password: "", url: "" });
    const [passwordArray, setPasswordArray] = useState([]);

    const savePassword = () => {
        setPasswordArray([...passwordArray, {...form,id:uuidv4()}]);
        localStorage.setItem("password", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]));
        setForm({ username: "", password: "", url: "" });
        const notify = () => toast("Password Saved!");
        notify();
    };

    useEffect(() => {
        const passwords = localStorage.getItem("password");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        } else {
            console.log("Error: No Pass found");
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                const notify = () => toast("Copied to clipboard !");
                notify();
            })
            .catch(err => {
                const notify = () => toast('Error copying text!'+err);
                notify();
            });
    };

    const editPassword = (id)=>{
        setForm(passwordArray.filter(i=>i.id===id)[0]);
        setPasswordArray(passwordArray.filter(item=>item.id!==id));
    }

    // const newArray = [...passwordArray];
    // newArray.splice(index, 1);
    // setPasswordArray(newArray);
    // localStorage.setItem("password", JSON.stringify(newArray));
    const deletePassword = (id) => {
        setPasswordArray(passwordArray.filter(item=>item.id!==id));
        localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
        const notify = () => toast("Deleted!");
        notify();
    };
    
    return (
        <main className='w-min-full h-[100vh] bg-gray-100'>
            <ToastContainer />
            <div className="title w-full flex-col flex items-center mb-10">
                <div className="logo font-bold text-gray-800 text-4xl flex gap-3 overflow-hidden h-[50px]">
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span><span className='text-green-500'>Manager/&gt;</span>
                </div>
                <div className="desc text-gray-600 text-lg mt-2">
                    Your own Password Manager
                </div>
            </div>
            <div className="addnewpass flex flex-col gap-y-6">
                <div className="details flex flex-col items-center gap-y-4 w-full">
                    <input value={form.url} onChange={handleChange} placeholder='Enter website URL'
                        className='url pl-4 rounded-md border border-green-300 h-12 w-[80%] shadow-sm focus:ring-2 focus:ring-green-400 transition'
                        type="text" name="url" id="url" />
                    <div className="idpass flex flex-wrap justify-center gap-4 w-full">
                        <input value={form.username} onChange={handleChange} placeholder='Enter username'
                            className='username pl-4 rounded-md border border-green-300 h-12 w-[35%] shadow-sm focus:ring-2 focus:ring-green-400 transition'
                            type="text" name="username" id="username" />
                        <div className="pass relative w-[35%] h-12">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password'
                                className='password pl-4 pr-10 rounded-md border border-green-300 h-full w-full shadow-sm focus:ring-2 focus:ring-green-400 transition'
                                type="password" name="password" id="password" />
                            <span className='absolute right-2 top-3 cursor-pointer'>
                                <img id='eye' className='w-6' src="./icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={savePassword} type="submit"
                        className='flex items-center bg-green-500 text-white text-lg px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            style={{ width: '25px', height: '25px', marginRight: '8px' }}>
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
            <div className="passList flex justify-center mt-10">
                <table className="w-[90%] bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-green-500 text-white">
                        <tr>
                            <th className="py-3">Site</th>
                            <th className="py-3">Username</th>
                            <th className="py-3">Password</th>
                            <th className="py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="tbody text-center">
                        {passwordArray.map((obj, index) => (
                            <tr key={index} className="bg-gray-100 odd:bg-white hover:bg-gray-200 transition">
                                <td className="py-3 flex justify-start items-center">
                                    <span>
                                        {obj.url}
                                    </span>
                                    <span onClick={() => copyText(obj.url)} className="cursor-pointer">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                            trigger="hover"
                                            style={{ width: '25px', height: '25px' }}>
                                        </lord-icon>
                                    </span>
                                </td>
                                <td className="py-3">
                                    <span>
                                        {obj.username}
                                    </span>
                                    <span onClick={() => copyText(obj.username)} className="cursor-pointer">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                            trigger="hover"
                                            style={{ width: '25px', height: '25px' }}>
                                        </lord-icon>
                                    </span>
                                </td>
                                <td className="py-3 flex text-left items-center justify-start gap-2 ">
                                    <span>{obj.password}</span>
                                    <span onClick={() => copyText(obj.password)} className="cursor-pointer">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                            trigger="hover"
                                            style={{ width: '25px', height: '25px' }}>
                                        </lord-icon>
                                    </span>
                                </td>
                                <td>
                                    <span onClick={() => editPassword(obj.id)} className="cursor-pointer">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                            trigger="hover"
                                            style={{ width: '25px', height: '25px' }}>
                                        </lord-icon>
                                    </span>
                                    <span onClick={()=> deletePassword(obj.id)} className='curser-pointer'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/skkahier.json"
                                            trigger="hover"
                                            style={{ width: '25px', height: '25px' }}>
                                        </lord-icon>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Manager;
