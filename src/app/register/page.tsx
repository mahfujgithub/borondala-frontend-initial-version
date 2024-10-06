"use client";

import { Button, Col, Row } from "antd";
import RegisterImg from "@/assets/register.jpg"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";

type FormValues = {
    name: string;
    phone: number;
    email: string;
    password: string;
    required: boolean;
}


export default function Register() {
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
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
                            name="name"
                            type="text"
                            size="large"
                            placeholder="Your Name"
                            label="Name:"
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
                            name="address"
                            type="text"
                            size="large"
                            placeholder="Address"
                            label="Address:"
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
