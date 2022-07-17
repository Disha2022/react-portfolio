import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessages, setErrors] = useState({});

    function checkIfEmpty(event) {
        if (event.target.value === "") {
            const newErrorMessages = { ...errorMessages };
            newErrorMessages[event.target.name] = event.target.name + " required";
            setErrors(newErrorMessages);
            return true;
        }
        return false;
    }
    function handleNameChange(event) {
        setName(event.target.value);
        if (checkIfEmpty(event)) {
            return;
        }
        const newErrorMessages = { ...errorMessages };
        delete newErrorMessages[event.target.name];
        setErrors(newErrorMessages);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
        if (checkIfEmpty(event)) {
            return;
        }
        const newErrorMessages = { ...errorMessages };
        // eslint-disable-next-line no-useless-escape
        const regex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'i');
        if (!regex.test(event.target.value)) {
            newErrorMessages[event.target.name] = "Invalid email address.";
            setErrors(newErrorMessages);
            return;
        }
        delete newErrorMessages[event.target.name];
        setErrors(newErrorMessages);
    }
    function handleMessageChange(event) {
        setMessage(event.target.value);
        if (checkIfEmpty(event)) {
            return;
        }
        const newErrorMessages = { ...errorMessages };
        delete newErrorMessages[event.target.name];
        setErrors(newErrorMessages);
    }
    function handleSubmit(event) {
        alert('submitted: ' + name);
        event.preventDefault();
    }

    return (
        <>
            <h2>
                Contact
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name"
                        value={name} onChange={handleNameChange}
                        onBlur={checkIfEmpty}
                    />
                </label>
                <label>
                    Email address:
                    <input type="email" name="email"
                        value={email} onChange={handleEmailChange}
                        onBlur={checkIfEmpty}
                    />
                </label>
                <label>
                    Message:
                    <textarea id="message" name="message" rows="10"
                        value={message} onChange={handleMessageChange}
                        onBlur={checkIfEmpty}
                    />
                </label>
                {
                    /* if there are errors, then show them all */
                    Object.values(errorMessages).map(function (name, index) {
                        return <p key={index}>{name}</p>;
                    })
                }
                <input type="submit" value="Submit" disabled />
            </form>
        </>
    );
}

export default Contact;