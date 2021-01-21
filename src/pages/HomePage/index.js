import styled from 'styled-components';

function HomePage(props) {
    const StyledPage = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    return (
        <StyledPage>
            <h1>
                HomePage
            </h1>
        </StyledPage>
    );
}

export default HomePage;