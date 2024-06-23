import { useEffect, useRef } from "react";


const FormRef = () => {

    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);

    const handleRefForm = (e) =>{
        e.preventDefault();
        console.log(nameRef.current.value, phoneRef.current.value, emailRef.current.value);
    }

useEffect(()=>{
    nameRef.current.focus();
},[])

    return (
        <div>
            <h1 className="text-5xl mt-10">Ref Form</h1>
            <div className="border-2 rounded-lg py-3">
                <form onSubmit={handleRefForm}>
                    <input ref={nameRef} name="name" className="py-2 px-3 my-2 rounded-lg" placeholder="Name" type="text" /> <br />
                    <input ref={phoneRef} name="phone" className="py-2 px-3 my-2 rounded-lg" placeholder="Phone Number" type="text" /> <br />
                    <input ref={emailRef} name="email" className="py-2 px-3 my-2 rounded-lg" placeholder="Email" type="email" /> <br />
                    <input className="py-2 px-3 my-2 rounded-lg bg-gray-900 cursor-pointer" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default FormRef;