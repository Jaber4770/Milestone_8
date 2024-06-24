import useInputState from "../../Hook/inputHook/hook";


const HookForm = () => {

    const [name, handleNameChange] = useInputState('');
    const [phone, handlePhoneChange] = useInputState('');
    const [email, handleEmailChange] = useInputState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name, phone, email);
    }


    return (
        <div>
            <h1 className="text-5xl mt-10">Form</h1>
            <div className="border-2 rounded-lg py-3">
                <form onSubmit={handleFormSubmit}>
                    <input value={name} onChange={handleNameChange} name="name" className="py-2 px-3 my-2 rounded-lg" placeholder="Name" type="text" /> <br />
                    <input value={phone} onChange={handlePhoneChange} name="phone" className="py-2 px-3 my-2 rounded-lg" placeholder="Phone Number" type="text" /> <br />
                    <input value={email} onChange={handleEmailChange} name="email" className="py-2 px-3 my-2 rounded-lg" placeholder="Email" type="email" /> <br />
                    <input className="py-2 px-3 my-2 rounded-lg bg-gray-900 cursor-pointer" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default HookForm;