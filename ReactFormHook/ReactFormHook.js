 //---------------------in Client Side ---------------------

// install
npm install react-hook-form 

import { useForm } from "react-hook-form";

const { register, handleSubmit, formState: { errors } } = useForm();

const handleRegister = data=>{
    console.log(data);
   
}

onSubmit={handleSubmit(handleRegister)}


{...register("example")}
