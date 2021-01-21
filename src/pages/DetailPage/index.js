import styled from 'styled-components';

    const StyledPage = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

function DetailPage(props) {
    return (
        <StyledPage>
            <h1>
                Detail Page
            </h1>
        </StyledPage>
    );
}


export default DetailPage;