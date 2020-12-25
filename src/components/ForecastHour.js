import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmallLabel from './SmallLabel';
import Text from './Text';
import device from '../responsive/Device';

const ForecastWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media ${device.tablet} {
    flex-basis: 110px;
  }
  @media ${device.laptop} {
    flex-basis: 125px;
  }
  @media ${device.laptopL} {
    flex-basis: 140px;
  }
`;

const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;

const ForecastHour = props => {
  const { temp, month, day, hour, icon } = props;
  // const [AMorPM, setAMorPM] = useState('');
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
  const monthName = (month)=>{
    switch(month){
      case '1':
        return 'JAN';
      case '2':
        return 'FEB';
      case '3':
        return 'MAR';
      case '4':
        return 'APR';
      case '5':
        return 'MAY';
      case '6':
        return 'JUN';
      case '7':
        return 'JUL';
      case '8':
        return 'AUG';
      case '9':
        return 'SEP';
      case '10':
        return 'OCT';
      case '11':
        return 'NOV';
      case '12':
        return 'DEC';
      default:
        break;
    }
  }
  const convertHour = (hour)=>{
    return ((hour === 0) ? (hour+12)+":00 AM" : (hour-12 < 0)? hour +":00 AM" : 
            ((hour-12) === 0) ? hour+":00 PM" : (hour-12)+ ":00 PM");
  }

  return (
    <ForecastWrapper>
      <Text align="center">
        {monthName(month)}  {day}
      </Text>
      <Text align="center">{convertHour(hour)}</Text>
      <WeatherIcon src={iconUrl} />
      <SmallLabel align="center" weight="400">
        {temp}&#176;
      </SmallLabel>
    </ForecastWrapper>
  );
};

ForecastHour.propTypes = {
  temp: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};

export default ForecastHour;
