import React from 'react'
import { useState, useRef, useEffect } from 'react'
import "./table.css"

const Manager = () => {
    const [form, setForm] = useState({ username: "", password: "", url: "" })
    const [passwordArray, setPasswordArray] = useState([]);
    const ref = useRef()

    // const password = useRef();
    // function showPassword() {
    //   if (password.type === "password") {
    //     password.type = "text";
    //     img.src = "./icons/eyecross.png";
    //   } else {
    //     password.type = "password";
    //     img.src = "./icons/eye.png";
    //   }
    // }

    useEffect(() => {
        const passwords = localStorage.getItem("password")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
            console.log(passwordArray)
            const tbody = document.querySelector(".tbody");
            passwordArray.forEach(element => {
                tbody.innerHTML +=
                    `
                 <tr>
                                        <td>${element.username}</td>
                                        <td>${element.url}</td>
                                        <td>${element.password}</td>
                                    </tr>
                `
            });
        }
        else { console.log("Error no pass") }
    }, [])

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))

    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
    }


    // const showData = async () => {
    //     const tdata = localStorage.getItem("password");
    //     console.log(tdata);
    //     const tbody = document.querySelector(".tbody");
    //     tdata.forEach(element => {
    //         tbody.innerHTML +=
    //             `
    //          <tr>
    //                                 <td>${element.username}</td>
    //                                 <td>${element.url}</td>
    //                                 <td>${element.password}</td>
    //                             </tr>
    //         `
    //     });
    // }
    // showData();

    return (
        <>
            <main className='w-[100vw] h-[100vh] bg-purple-200'>
                <div className="title w-[100vw] flex-col flex items-center mb-10">
                    <div className="logo font-bold text-black text-3xl overflow-hidden gap-3">
                        <span className='text-green-500'> &lt;</span>
                        <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
                    </div>
                    <div className="desc">
                        Your own Password Manager
                    </div>
                </div>
                <div className="addnewpass flex flex-col gap-y-4">
                    <div className="details flex flex-col items-centers justify-center gap-y-4 w-[100vw]">
                        <div className="url flex justify-center w-[100%]">
                            <input value={form.url} onChange={handleChange} placeholder='Enter website url' className='pl-[20px]  rounded-full border border-green-500 h-[40px] w-[65%]' type="text" name="url" id="url" />
                        </div>
                        <div className="idpass flex flex-wrap w-[100%] justify-center gap-[4%]">
                            <div className="username h-[40px] w-[35%]">
                                <input value={form.username} onChange={handleChange} placeholder='Enter username' className='pl-[20px] w-[100%] h-[100%] rounded-full border border-green-500' type="text" name="username" id="username" />
                            </div>
                            <div className="pass relative w-[26%] h-[40px]">
                                <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-[100%] p-4 py-1 h-[100%]' type="password" name="password" id="password" />
                                <span className='absolute right-[10px] top-[7px] cursor-pointer'>
                                    <img id='eye' className='p-1 w-[26px]' src="./icons/eye.png" alt="eye" />
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={savePassword} type="submit" className='addpass flex justify-center items-center bg-green-400 rounded-full text-[18px] px-3 p-y-5 ' style={{ border: '1px solid black' }}>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover">
                            </lord-icon>
                            Add Password
                        </button>
                    </div>
                </div>
                <div className="passList flex justify-center">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Site</th>
                                <th>Password</th>
                            </tr>
                        </thead >
                        <tbody className='tbody'>
                          
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default Manager