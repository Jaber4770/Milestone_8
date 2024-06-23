import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,phone,password);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePhoneNumberChange = (e) => {
        setPhone(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }




    return (
        <div>
            <div>
                <h1 className="text-5xl mt-10">Stateful Form</h1>
                <div className="border-2 rounded-lg py-3">
                    <form onSubmit={handleFormSubmit}>
                        <input onChange={handleNameChange} name="name" className="py-2 px-3 my-2 rounded-lg" placeholder="Name" type="text" /> <br />
                        <input onChange={handlePhoneNumberChange} name="phone" className="py-2 px-3 my-2 rounded-lg" placeholder="Phone Number" type="text" /> <br />
                        <input onChange={handleEmailChange} name="email" className="py-2 px-3 my-2 rounded-lg" placeholder="Email" type="email" /> <br />
                        <input onChange={handlePasswordChange} name="password" className="py-2 px-3 my-2 rounded-lg" placeholder="Password" type="password" /> <br />
                        <input className="py-2 px-3 my-2 rounded-lg bg-gray-900 cursor-pointer" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StatefulForm;