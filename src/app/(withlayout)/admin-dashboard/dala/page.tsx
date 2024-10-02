"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";


type FormValues = {
    id: string;
    password: string;
}

type ItemValues = {
    itemName: string;
};

export default function Dala() {
    const [items, setItems] = useState<ItemValues[]>([]);

    // Form handling for Items
    const { reset: resetItemForm, handleSubmit: handleItemSubmit } = useForm<ItemValues>();

    const [text, setText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    const addItems: SubmitHandler<ItemValues> = (data) => {
        try {

            // Add the new item to the items array
            setItems((prevItems) => [...prevItems.map((item) => item), data]);

            resetItemForm(); // Clear the form after adding the item
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(items.map((item) => item))
    // console.log(items)
    // console.log(items.map((i) => i?.name))
    return (
        <>
            <h5 className="text-2xl font-semibold text-center uppercase mb-3">Add Dala</h5>
            <section className="w-2/4 mx-auto">
                <div>
                    <Form submitHandler={addItems}>
                        <label htmlFor="item">Items:</label>
                        <div className="flex justify-center items-center space-x-4">
                            <FormInput
                                name="itemName"
                                type="text"
                                size="small"
                                placeholder="item name"
                            />
                            <Button htmlType="submit" type="default" size="small">Add Item</Button>
                        </div>
                    </Form>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="">
                                • {item.itemName}
                            </li>
                        ))}
                    </ul>
                </div>

                <Form submitHandler={onSubmit}>

                    <div className="flex space-x-2 items-center">
                        <div className="w-full">
                            <FormInput
                                name="title"
                                type="text"
                                size="small"
                                placeholder="Title"
                                label="Title:"
                            />
                        </div>
                        <div className="w-full">
                            <FormInput
                                name="category"
                                type="text"
                                size="small"
                                placeholder="Category"
                                label="Category:"
                                value={`Dala`}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-full">
                            <FormInput
                                name="price"
                                type="number"
                                size="small"
                                placeholder="Price"
                                label="Price:"
                            />
                        </div>
                        <div className="w-full">
                            <FormInput
                                name="discountPrice"
                                type="number"
                                size="small"
                                placeholder="Discount Price"
                                label="Discount Price:"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-full">
                            <FormInput
                                name="dalaCode"
                                type="number"
                                size="small"
                                placeholder="Product Code"
                                label="Code:"
                            />
                        </div>
                        <div className="w-full">
                            <FormInput
                                name="stock"
                                type="number"
                                size="small"
                                placeholder="Stock"
                                label="Stock:"
                            />
                        </div>
                    </div>
                    <div >
                        <label htmlFor="description">Description</label>
                        <textarea className={`focus: outline-none w-full p-2 rounded-lg`} id="description"
                            value={text}
                            onChange={handleChange}
                            placeholder="Product Description"
                            rows={4}
                        />
                    </div>
                    <Button htmlType="submit" className="w-full mt-3 rounded-lg" type="primary">Create Dala</Button>
                </Form>

            </section>
        </>
    )
}
