import React from "react";
import Form from 'react-bootstrap/Form';


function CheckBox(props) {
    const { nameLabel, type,onChange } = props
    return (
        <Form>
            {nameLabel.map((ele, index) => {
                return (
                    <>
                        <Form.Check key={index}
                            inline
                            label={ele}
                            name="group1"
                            type={type}
                            id={`inline-${type}-${index}`}
                            value={ele}
                            onChange={onChange}
                        />
                    </>
                )
            })}


        </Form>
    );
}

export default CheckBox;
