import styled from 'styled-components';


const StyledLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: lightgray;
`;


function HomePage(props) {

    return (
        <StyledLayout>
            <div>

            Welcome to Finding Furry Friends

            {}

            </div>
        </StyledLayout>
    );
}

export default HomePage;