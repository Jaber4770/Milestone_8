
const Form = () => {

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value, e.target.phone.value, e.target.email.value, "Submit");
    }
    return (
        <div>
            <h1 className="text-5xl mt-10">Form</h1>
            <div className="border-2 rounded-lg py-3">
                <form onSubmit={handleFormSubmit}>
                    <input name="name" className="py-2 px-3 my-2 rounded-lg" placeholder="Name" type="text" /> <br />
                    <input name="phone" className="py-2 px-3 my-2 rounded-lg" placeholder="Phone Number" type="text" /> <br />
                    <input name="email" className="py-2 px-3 my-2 rounded-lg" placeholder="Email" type="email" /> <br />
                    <input className="py-2 px-3 my-2 rounded-lg bg-gray-900 cursor-pointer" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Form;