import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log("Submit Contact Form", formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please enter your ${e.target.name}.`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
        }
    };

    return (
        <section className="my-5">
            <h1 className="titles">Get in Touch</h1>
            <hr></hr>

            <div className="boxes">
                <h3 className="titles">Contact Info</h3>
                <ul>
                    <li>
                    <a href="mailto:ravneet.panglia@gmail.com" className="far fa-envelope">ravneet.panglia@gmail.com</a>
                    </li>
                    <li>
                    <a href="https://github.com/rpanglia" target="_blank" rel="noreferrer" className="fab fa-linkedin">rpanglia</a> 
                    </li>
                </ul>
            </div>

            <div className="box">
            <h3 className="titles">Leave a Message</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Raj Singh"
                        defaultValue={name}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Your Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="rajsingh@gmail.com"
                        defaultValue={email}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Enter your message.."
                        defaultValue={message}
                        onBlur={handleChange}
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
            </div>
            
        </section>
    );
}

export default Contact;