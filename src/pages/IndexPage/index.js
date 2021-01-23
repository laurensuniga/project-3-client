import { Link } from 'react-router-dom';
import styled from 'styled-components';
import stockPhoto from '../../Images/noImage.png';

const StyledLayout = styled.main`
    display: flex;
    flex-flow: column wrap;
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

                {props.animals.length > 0 && props.animals.map((animal, id) => {
                    return (
                        <Link key={animal.id} to={{pathname: `/animals/${id}`, query: {animal: animal}}}>
                            <h2>{animal.name}</h2>
                            <img src={animal.photos.length > 0 ? animal.photos[0].small : stockPhoto}></img>
                        </Link>
                    )
                } 

                )}
                
            </div>

        </StyledLayout>

    );
}



export default IndexPage;