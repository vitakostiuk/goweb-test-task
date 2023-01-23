import React from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as Warning } from '../../images/form/worning.svg';
import s from './Form.module.css';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('This is a required field'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
});

const FormComponent = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <section name="Contact" className={s.container}>
      {' '}
      <div className={s.imgWrapper}></div>
      <div className={s.textBlock}>
        <h3 className={s.title}>Request Callback</h3>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          validationSchema={FormSchema}
          onSubmit={(values, submitProps) => {
            // console.log(values);

            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({ 'form-name': 'contact', ...values }),
            })
              .then(res => {
                if (!res.ok) {
                  throw new Error(res.status);
                } else if (res.ok) {
                  toast.success('Your form submission has been reseived', {
                    icon: '😎',
                  });
                  submitProps.resetForm();
                  // return navigate('/thank-you/');
                } else {
                  toast.warn('Something went wrong!', { icon: '🙁' });
                }

                return res;
              })
              .catch(error => {
                alert(error);
              });
          }}
        >
          {({ errors, touched, values }) => (
            <Form className={s.form}>
              <input type="hidden" name="form-name" value="contact" />
              <Field
                id="name"
                className={
                  errors.name && touched.name ? s.errInput : s.inputName
                }
                name="name"
                type="name"
                placeholder="Enter your name"
                value={values.name}
              />
              {errors.name && touched.name ? (
                <div className={s.errName}>
                  {errors.name}
                  <span className={s.warning}>
                    <Warning />
                  </span>
                </div>
              ) : null}

              <Field
                id="email"
                className={
                  errors.email && touched.email ? s.errInput : s.inputEmail
                }
                name="email"
                type="email"
                placeholder="Enter email*"
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className={s.errEmail}>
                  {errors.email}
                  <span className={s.warning}>
                    <Warning />
                  </span>
                </div>
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
