// import React, { useState } from "react";
// import { newAddressField } from "../data";
// import SimpleInput from "../../SimpleInput/SimpleInput";
// import "./newaddress.scss";
// import { Button } from "react-bootstrap";

// const NewAddress = ({ setAddress, editMode }) => {
//   const [addressType, setAddressType] = useState('shipping');

//   const handleSetAddressType = (event) => {
//     setAddressType(event.target.value);
//     console.log(event.target.value);
//   }

//   return (
//     <div className="new-address">
//       {editMode ? null : (
//         <>
//           <div className="shipping-billing">This address is :</div>
//           <div className="radio-div">
//             <div className="shipping">
//               <input
//                 type="radio"
//                 name="shipping-billing"
//                 id="shipping"
//                 value="shipping"
//                 checked={addressType === "shipping"}
//                 onChange={handleSetAddressType}
//               />
//               <label htmlFor="shipping">Shipping address</label>
//             </div>
//             <div className="billing">
//               <input
//                 type="radio"
//                 name="shipping-billing"
//                 id="billing"
//                 value="billing"
//                 checked={addressType === "billing"}
//                 onChange={handleSetAddressType}
//               />
//               <label htmlFor="billing">Billing address</label>
//             </div>
//           </div>
//         </>
//       )}

//       {newAddressField.map((item) => (
//         <SimpleInput title={item.title} placeholder={item.placeholderText} />
//       ))}

//       <div className="button-div">
//         <Button className="save-btn" onClick={() => setAddress(true)}>
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default NewAddress;


import React from "react";
import { Formik, Form, Field } from "formik";
import { newAddressField } from "../data";
import SimpleInput from "../../SimpleInput/SimpleInput";
import "./newaddress.scss";
import { Button } from "react-bootstrap";

const NewAddress = ({ setAddress, editMode }) => {
  return (
    <Formik
      initialValues={{
        addressType: "shipping",
        ...newAddressField.reduce(
          (acc, curr) => ({ ...acc, [curr.name]: "" }),
          {}
        ),
      }}
      onSubmit={(values) => {
        console.log(values);
        setAddress(true);
      }}
    >
      {({ handleChange, values }) => (
        <Form className="new-address">
          {editMode ? null : (
            <>
              <div className="shipping-billing">This address is :</div>
              <div className="radio-div">
                <div className="shipping">
                  <Field
                    type="radio"
                    name="addressType"
                    id="shipping"
                    value="shipping"
                  />
                  <label htmlFor="shipping">Shipping address</label>
                </div>
                <div className="billing">
                  <Field
                    type="radio"
                    name="addressType"
                    id="billing"
                    value="billing"
                  />
                  <label htmlFor="billing">Billing address</label>
                </div>
              </div>
            </>
          )}

          {newAddressField.map((item) => (
            <SimpleInput
              key={item.name}
              title={item.title}
              placeholder={item.placeholderText}
              value={values[item.name]}
              onChange={handleChange}
              name={item.name} // make sure the name attribute is set
            />
          ))}

          <div className="button-div">
            <Button className="save-btn" type="submit">
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewAddress;
