import styled from 'styled-components';

function DetailPage(props) {
    const StyledPage = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    return (
        <StyledPage>
            <h1>
                Detail Page
            </h1>
        </StyledPage>
    );
}


export default DetailPage;