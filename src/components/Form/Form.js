import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import contact from '../../images/home/contact.jpg';
// import contact_2x from '../../images/home/contact@2x.jpg';
import s from './Form.module.css';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('This is a required field'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
});

const FormComponent = () => {
  const [credentials, setCredentials] = useState(null);

  const handleSetCredentials = data => {
    setCredentials(data);
  };
  return (
    <section className={s.container}>
      {' '}
      {/* <img
        srcSet={`${contact} 1x ${contact_2x} 2x`}
        src={contact}
        alt="Contact"
        className={s.img}
      /> */}
      <div className={s.imgWrapper}></div>
      <div className={s.textBlock}>
        <h3 className={s.title}>Request Callback</h3>
        <Formik
          initialValues={{
            nam: '',
            email: '',
          }}
          validationSchema={FormSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
            handleSetCredentials(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={s.form}>
              <Field
                id="name"
                className={
                  errors.name && touched.name ? s.errInput : s.inputName
                }
                name="name"
                type="name"
                placeholder="Enter your name"
              />
              {errors.name && touched.name ? (
                <div className={s.errName}>{errors.name}</div>
              ) : null}

              <Field
                id="email"
                className={
                  errors.email && touched.email ? s.errInput : s.inputEmail
                }
                name="email"
                type="email"
                placeholder="Enter email*"
              />
              {errors.email && touched.email ? (
                <div className={s.errEmail}>{errors.email}</div>
              ) : null}

              <div>
                <button className={s.btn} type="submit">
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default FormComponent;
