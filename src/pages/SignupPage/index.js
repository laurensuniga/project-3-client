import { useState } from 'react';
import { signup } from '../../services/userService';
import styled from 'styled-components';


const StyledLayout = styled.main`
  display: flex;
  justify-content: center;
  background-image: url("/P1020374.jpeg");
  background-size: cover;
  color: white;
`;

function SignupPage(props) {
    
    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            firstName: "",
            lastName: "",
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

            await signup(formState
                )
            setFormState(getInitialFormState());

            props.handleSignUpOrLogin();
    
            props.history.push('/dahsboard');
            
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <StyledLayout>
            <div className="Page">
                <form onSubmit={handleSubmit}>
                    First Name:
                    <input 
                    value={formState.firstName} 
                    onChange={handleChange} 
                    name="firstName" 
                    type="text" 
                    />
                    Last Name:
                    <input 
                    value={formState.lastName} 
                    onChange={handleChange} 
                    name="lastName" 
                    type="text" 
                    />
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
                    <button>Sign Up</button>
                </form>
            </div>
        </StyledLayout>
    );
}

export default SignupPage;