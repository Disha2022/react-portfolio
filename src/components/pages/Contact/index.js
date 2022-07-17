
function Contact() {
    return (
        <>
            <h2>
                Contact
            </h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email address:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea id="message" name="message" rows="10" />
                </label>
                <input type="submit" value="Submit" disabled />
            </form>
        </>
    );
}

export default Contact;