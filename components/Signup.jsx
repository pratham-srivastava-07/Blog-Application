
"use client"

import { useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        console.log(username, password);
        try {
            const response = await axios.post("/api/server", {
                username,
                password,
            });
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="px-10">
                    <div className="text-3xl font-extrabold">Sign up</div>
                </div>
                <div className="pt-2">
                    <LabelledInput
                        onChange={handleUsernameChange}
                        label="Username"
                        placeholder="username"
                    />
                    <LabelledInput
                        onChange={handlePasswordChange}
                        label="Password"
                        type="password"
                        placeholder="password"
                    />
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

function LabelledInput({ label, placeholder, type, onChange }) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input
                onChange={onChange}
                type={type || "text"}
                id={label.toLowerCase()}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
