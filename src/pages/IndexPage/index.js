import AnimalCard from '../../components/AnimalCard';
import styled from 'styled-components';

const StyledLayout = styled.main`
    display: flex;
    min-height:100vh;
    background-color: lightgrey;
    background-size: cover;
    justify-content: center;
    color: darkblue;
`;

function IndexPage(props) {

    let animals = props
    console.log(animals)

    return (
        <StyledLayout>

            <div>
                <h1>
                    Adoptable Furry Friends
                </h1>
            </div>

        </StyledLayout>

    );
}



export default IndexPage;