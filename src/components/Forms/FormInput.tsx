"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
    name: string;
    type?: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
}

export default function FormInput({ name, type, size, value, id, placeholder, validation, label }: IInput) {

    const { control } = useFormContext();

    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Input
                        {...field}
                        type={type}
                        size={size}
                        placeholder={placeholder}
                        value={value ? value : field.value}
                    />
                )}
            />
        </>
    )
}
