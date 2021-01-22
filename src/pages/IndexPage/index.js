import AnimalCard from '../../components/AnimalCard';
import styled from 'styled-components';

const StyledLayout = styled.main`
    display: flex;
    min-height:100vh;
    background-color: #e8d1b5;
    background-size: cover;
    justify-content: center;
    color: black;
`;

function IndexPage(props) {

    let {animals} = props
    console.log(props)

    return (
        <StyledLayout>

            <div>
                <h1>
                    Adoptable Furry Friends
                </h1>

                {props.animals.length > 0 && props.animals.map((animal) => {
                    return (
                        <div>
                            <h2>{animal.name}</h2>
                        </div>
                    )
                } 

                )}
                
            </div>

        </StyledLayout>

    );
}



export default IndexPage;