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
    required?: boolean;
}

export default function FormInput({ name, type, size, value, id, placeholder, validation, label, required }: IInput) {

    const { control } = useFormContext();

    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => type === "password" ? (
                    <Input.Password
                        {...field}
                        type={type}
                        size={size}
                        placeholder={placeholder}
                        value={value ? value : field.value}
                        required={required}
                    />
                ) : (
                    <Input
                        {...field}
                        type={type}
                        size={size}
                        placeholder={placeholder}
                        value={value ? value : field.value}
                        required={required}
                    />
                ) }
            />
        </>
    )
}
