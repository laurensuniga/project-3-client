import styled from 'styled-components';


const StyledLayout = styled.main`
  display: flex;
  justify-content: left;
  flex-direction: column;
  font-size: 45px;
  color: lightgray;
  padding-left: 35px;
  p {
      font-family: 'Amatic SC', cursive;
  }
`;


function HomePage(props) {

    return (
        <StyledLayout>
            <div>
                <p>Welcome</p>
                <p>to</p>
                <p>Finding</p>
                <p>Furry</p>
                <p>Friends</p>

            {}

            </div>
        </StyledLayout>
    );
}

export default HomePage;