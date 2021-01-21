import styled from 'styled-components';

function DashboardPage(props) {
    const StyledPage = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    return (
        <StyledPage>
            <h1>
                Index? Page
            </h1>
        </StyledPage>
    );
}



export default DashboardPage;