import { useState } from 'react';
import { login } from '../../services/userService';


function LoginPage(props) {

    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            email: "",
            password: "",
        }
    }
    

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();

            await login(formState);
            
            setFormState(getInitialFormState());

            props.handleSignUpOrLogin();
    
            props.history.push('/dahsboard');
            
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                Email:
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                type="email" 
                />
                Password:
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type="password" 
                />
                <button>Login</button>
            </form>
        </div>
    );

















//     const [formState, setFormState] = useState(getInitialFormState());

//     function getInitialFormState() {
//         return {
//             email: "",
//             password: "",
//         }
//     }
    

//     function handleChange(event) {
//         setFormState(prevState => ({
//             ...prevState,
//             [event.target.name]: event.target.value
//         }));
//     }

//     async function handleSubmit(event) {
//         try {
//             event.preventDefault();

//             await login(formState
//                 )
//             setFormState(getInitialFormState());

//             props.handleSignUpOrLogin();
    
//             props.history.push('/dahsboard');
            
//         } catch (error) {
//             alert(error.message);
//         }
//     }

//     return (
//         <div className="Page">
//             <form onSubmit={handleSubmit}>
//                 Email:
//                 <input 
//                 value={formState.email} 
//                 onChange={handleChange} 
//                 name="email" 
//                 type="email" 
//                 />
//                 Password:
//                 <input 
//                 value={formState.password} 
//                 onChange={handleChange} 
//                 name="password" 
//                 type="password" 
//                 />
//                 <button>Log In</button>
//             </form>
//         </div>
//     );
}

export default LoginPage;