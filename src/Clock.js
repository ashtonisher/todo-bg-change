import React from 'react';
import styled from 'styled-components';

class Clock extends React.Component {
  state = {
    date: new Date(),
  };
  render() {
    const { date } = this.state;
    return (
      <Container>
        <CurDate>
          {date.getFullYear()}&nbsp;/&nbsp;
          {date.getMonth() + 1}&nbsp;/&nbsp;
          {date.getDate()}
        </CurDate>
        <CurDay>
          {date.getDay() === 0
            ? 'Sunday'
            : date.getDay() === 1
            ? 'Monday'
            : date.getDay() === 2
            ? 'Tuesday'
            : date.getDay() === 3
            ? 'Wednesday'
            : date.getDay() === 4
            ? 'Thursday'
            : date.getDay() === 5
            ? 'Friday'
            : 'Saturday'}
        </CurDay>
        <CurTime>
          {date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}
          &nbsp;:&nbsp;
          {date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}
        </CurTime>
      </Container>
    );
  }
  getDate = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    this.oneMinuteCall = setInterval(() => this.getDate(), 60000);
  }
  componentWillUnmount() {
    clearInterval(this.oneMinuteCall);
  }
}
const Container = styled.div`
  font--weight: bold;
  text-align: center;
  overflow: auto;
`;

const CurDate = styled.div`
  font-size: 16px;
  margin-top: 50px;
`;
const CurDay = styled.div``;
const CurTime = styled.div`
  font-size: 48px;
`;

export default Clock;
