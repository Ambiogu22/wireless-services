import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { UsernameContext } from "../App";
import { useContext, useState } from "react";

const Account = () => {
    const schema = yup.object().shape({
        username: yup.string().max(15).required('Please provide a username')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data) => {
        console.log(data)
    }

    const [newUsername, setNewUsername] = useState('');

    const { setUsername } = useContext(UsernameContext)
    return (
        <div className="py-48">
            <div className="bg-gray-100 p-12 w-96 mx-auto">
                <form onSubmit={handleSubmit(submitForm)} className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-semibold">Change Username:</h3>
                    <input type="text" placeholder="Username" {...register('username')} onChange={(event) => { setNewUsername(event.target.value) }}
                        className="focus:outline-violet-700 border-2 border-violet-300 px-4 py-2" />
                    <p className="text-red-500">{errors.username?.message}</p>
                    <input type="submit" placeholder="Change Username" onClick={() => { setUsername(newUsername) }}
                        className="py-1 px-8 rounded-md bg-violet-400 hover:cursor-pointer hover:bg-violet-600 transation-all duration-700" />
                </form>
            </div>
        </div >
    );
}

export default Account