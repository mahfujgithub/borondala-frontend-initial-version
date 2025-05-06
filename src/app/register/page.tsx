"use client";

import { Button, Col, Row, Spin } from "antd";
import RegisterImg from "@/assets/register-removebg-preview.png"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import { useUserRegistrationMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useSnackbar } from 'notistack';
import { useState } from "react";

type FormValues = {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    confirmPassword: string;
    presentAddress: string;
    required: boolean;
}


export default function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const [userRegistration] = useUserRegistrationMutation();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const userInfo = {
            customer: {
                name: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                },
                contact: data.phone,
                email: data.email,
                presentAddress: data.presentAddress,
                password: String(data.password),
                confirmPassword: String(data.confirmPassword),
            },
            user: {
                email: data.email
            }
        }
        setIsLoading(true);
        try {
            const res = await userRegistration({ ...userInfo }).unwrap();
            storeUserInfo({ accessToken: res?.data?.accessToken })
            if (res) {
                enqueueSnackbar(
                    <div className="text-lg">
                        <span>Welcome, </span>
                        <span className="font-mono font-bold">{userInfo?.customer?.name?.firstName}!</span>
                    </div>, {
                    variant: "success",
                    autoHideDuration: 7000,
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                    action: (key) => <Button onClick={() => closeSnackbar(key)}
                    >Dismiss</Button>
                });
            }

        } catch (error) {
            console.error(error)
            enqueueSnackbar(
                <div>
                    <span className="text-lg font-bold">Something Went Wrong!</span>
                </div>, {
                variant: "error",
                autoHideDuration: 7000,
                anchorOrigin: { vertical: "top", horizontal: "right" },
                action: (key) => <Button onClick={() => closeSnackbar(key)}
                >Dismiss</Button>
            });
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <Row
                justify={`center`}
                align={`middle`}
                style={{
                    minHeight: "5vh"
                }}
            >
                <Col sm={12} md={16} lg={10}>
                    <h5 className="text-center text-3xl mt-6">Create an Account</h5>
                </Col>
            </Row>
            <Row
                justify={`center`}
                align={`middle`}
                style={{
                    minHeight: "90vh"
                }}
            >
                <Col sm={12} md={16} lg={10}>
                    <Image
                        className="bg-red-950 rounded-2xl shadow-[#4096FF] shadow-2xl p-3 animate-settle-bounce"
                        src={RegisterImg}
                        width={500}
                        alt="register image"
                    />
                </Col>
                <Col sm={12} md={8} lg={8}>
                    <div>
                        <Form submitHandler={onSubmit}>
                            <FormInput
                                name="firstName"
                                type="text"
                                size="large"
                                placeholder="First Name"
                                label="First Name:"
                                required={true}
                            />
                            <FormInput
                                name="lastName"
                                type="text"
                                size="large"
                                placeholder="Last Name"
                                label="Last Name:"
                                required={true}
                            />
                            <FormInput
                                name="presentAddress"
                                type="text"
                                size="large"
                                placeholder="Address"
                                label="Address:"
                                required={true}
                            />
                            <FormInput
                                name="phone"
                                type="number"
                                size="large"
                                placeholder="Your Contact"
                                label="Phone:"
                            />
                            <FormInput
                                name="email"
                                type="text"
                                size="large"
                                placeholder="Email"
                                label="Email:"
                            />
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                placeholder="Password"
                                label="Password:"
                            />
                            <FormInput
                                name="confirmPassword"
                                type="password"
                                size="large"
                                placeholder="Confirm Password"
                                label="Confirm Password:"
                            />
                            <Row className="mt-8" justify={`center`} align={`middle`}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={isLoading}
                                    size="large"
                                    style={{ width: '100%' }}
                                >
                                    <p className="uppercase font-bold tracking-widest">{isLoading ? (<Spin size="large" />) : 'Register'}</p>
                                </Button>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}
