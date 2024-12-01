"use client";

import { Button, Col, Row } from "antd";
import RegisterImg from "@/assets/register.jpg"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import { useUserRegistrationMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";

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
    const [userRegistration] = useUserRegistrationMutation();
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
        try {
            const res = await userRegistration({...userInfo}).unwrap();
            
            storeUserInfo({accessToken: res?.data?.accessToken})
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Row
            justify={`center`}
            align={`middle`}
            style={{
                minHeight: "100vh"
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image
                    src={RegisterImg}
                    width={500}
                    alt="register image"

                />
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h5
                    style={{
                        margin: "15px 0px"
                    }}
                >Create an account</h5>
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
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}
