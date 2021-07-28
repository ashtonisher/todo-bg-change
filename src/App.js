import logo from './logo.svg';
import React from 'react';
import styled from 'styled-components';
import Content from './Content';

class App extends React.Component {
  state = {
    query: '',
  };

  handleInputKeyPress = (event) => {
    if (event.key == 'Enter') {
      this.setState({
        query: event.target.value,
      });
      event.target.value = '';
    }
  };

  render() {
    return (
      <>
        <Container query={this.state.query}>
          <Input
            placeholder='원하는 테마를 입력하세요'
            onKeyPress={this.handleInputKeyPress}
          ></Input>
          <Content />
        </Container>
      </>
    );
  }
}
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1),
      rgba(20, 20, 20, 0.7),
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${(props) => props.query})
      center;
  background-size: cover;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 270px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;

export default App;
