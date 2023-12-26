import {useForm} from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
export const Form = () => {

    
    const shema = yup.object().shape({
        fullName: yup.string().required(),
        email : yup.string().email().required(),
        age: yup.number().positive().required().integer().min(18),
        password : yup.string().min(4).max(20).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password"), null]).required()
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(shema)
    });
    const onSubmit = (data) => {
        console.log("submmit")
        if(data.password != data.confirmPassword) {
            alert("error the password is not compatible with the confirm password")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="name ..." {...register("fullName")}/><p>{errors.fullName?.message}</p>
                <input type="text" placeholder="email ..." {...register("email")} /><p>{errors.email?.message}</p>
                <input type="number" placeholder="Age ..." {...register("age")}/><p>{errors.age?.message}</p>
                <input type="password" placeholder="Password ..." {...register("password")}/><p>{errors.password?.message}</p>
                <input type="password" placeholder="Confirm PAssword ..." {...register("confirmPassword")}/><p>{errors.confirmPassword?.message}</p>
                <button> Submit </button>
            </form>
        </div>
    )
}