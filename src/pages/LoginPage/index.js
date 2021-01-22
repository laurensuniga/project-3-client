import { useState } from 'react';
import { login } from '../../services/userService';
import styled from 'styled-components';


const StyledLayout = styled.main`
  display: flex;
  min-height: 100vh;
  background-image: url("/P1020374.jpeg");
  background-size: cover;
  color: white;
  justify-content: center;
`;


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
        <StyledLayout>
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
        </StyledLayout>
    );
}

export default LoginPage;