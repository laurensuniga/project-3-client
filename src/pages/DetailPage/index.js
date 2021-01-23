import styled from 'styled-components';


const StyledLayout = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e8d1b5;
    background-size: cover;
`;


function DetailPage(props) {

    let {animal} = props.location.query.animal
    return (
        <div>
            <h1>
                Introducing...
            </h1>
                        <div>
                            <h2>{props.location.query.animal.name}</h2>
                            <p>Age: {props.location.query.animal.age}</p>
                            <p>Gender: {props.location.query.animal.gender}</p>
                            <p>Species: {props.location.query.animal.species}</p>
                            <p>Size: {props.location.query.animal.size}</p>
                            <p>Description: {props.location.query.animal.description}</p>
                            <p>{props.location.query.animal.contact.email}</p>
                        </div>
        </div>

    );
}


export default DetailPage;