/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"

type FormConfig = {
    defaultValues?: Record<string, unknown>;
}

type FormProps = {
    children?: ReactElement | ReactNode;
    submitHandler: SubmitHandler<any>
} & FormConfig;


export default function Form({ children, submitHandler, defaultValues }: FormProps) {
    const formConfig: FormConfig = {}

    if (!!defaultValues) formConfig["defaultValues"] = defaultValues;


    const methods = useForm<FormProps>(formConfig)

    const { handleSubmit, reset } = methods;

    const onSubmit = (data: unknown) => {
        submitHandler(data)
        reset()
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )

}
