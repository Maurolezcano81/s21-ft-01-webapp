import React from "react";

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataRegister, registerSchema } from "../schemas/register.schema";

import RightSide from "../components/register/RightSide";
import PersonalSection from "../components/register/PersonalSection";
import NacionalitySection from "../components/register/NacionalitySection";
import PrivateDataSection from "../components/register/PrivateDataSection";
import FooterForm from "../components/register/FooterForm";
// import { useAuth } from "../hooks/useAuth";

const Register: React.FC = () => {

    const { register, handleSubmit, control, trigger, setValue, formState: { errors } } = useForm<FormDataRegister>({
        resolver: zodResolver(registerSchema),
        mode: "all"
    })

    // const { mutate: login, isSuccess, isPending, isError, error } = useAuth()


    const onSubmit = (data: FormDataRegister) => {
        // login(data)
        console.log(data)
    }


    return (
        <div className="flex md:bg-primary flex-col-reverse md:flex-row min-h-screen items-center justify-center">
            <form
                className=" py-8 px-8 md:grow-1 md:py-8 md:px-8 lg:px-32 min-h-screen bg-white md:min-h-screen text-neutral-600 flex flex-col gap-4"
                onSubmit={(handleSubmit(onSubmit))}
            >
                <div className="mb-4">
                    <h4 className="font-bold text-black text-2xl md:text-[32px]">Comencemos
                        <span className="ml-4">👇</span>
                    </h4>

                </div>

                <PersonalSection register={register} errors={errors} />

                <NacionalitySection register={register} errors={errors} trigger={trigger} setValue={setValue} />

                <PrivateDataSection control={control} register={register} errors={errors} />

                <FooterForm
                // isPending={isPending} errors={error}
                />
            </form>

            <RightSide />
        </div>

    )
}

export default Register;