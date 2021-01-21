import styled from 'styled-components';
import AnimalCard from '../../components/AnimalCard';

function IndexPage(props) {
    const StyledPage = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    let animals = props
    console.log(animals)

    return (
        <StyledPage>
            <h1>
                Index? Page
            </h1>
            <AnimalCard />

        </StyledPage>
    );
}



export default IndexPage;