import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/inputfields.scss';

const LoginForm = () => {
    // Схема валидации для логина
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Неверный формат электронной почты")
            .required("Обязательно для заполнения"),
        password: Yup.string()
            .min(6, "Пароль должен содержать минимум 6 символов")
            .required("Обязательно для заполнения"),
    });

    // Начальные значения
    const initialValues = {
        email: "",
        password: "",
    };

    // Обработка отправки формы
    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Login submitted values:", values);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form className="form-container">
                    <div className="field-container">
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Введите вашу почту"
                            className={`input ${errors.email && touched.email ? 'input-error' : ''}`}
                        />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    <div className="field-container">
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Введите пароль"
                            className={`input ${errors.password && touched.password ? 'input-error' : ''}`}
                        />
                        <ErrorMessage name="password" component="div" className="error-message" />
                    </div>

                    <button
                        type="submit"
                        className="button"
                        disabled={isSubmitting}
                    >
                        Отправить
                    </button>

                    <div className="register-link">
                        <p>Еще нет аккаунта? <a href="/rgstr">Зарегестрироваться</a></p>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
