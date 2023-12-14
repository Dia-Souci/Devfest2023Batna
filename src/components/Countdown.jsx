import  { useState, useEffect } from 'react';
import { useCallback } from 'react'
import daysBox from '../images/days.svg';
import hoursBox from '../images/hours.svg';
import minutesBox from '../images/minutes.svg';
import secondsBox from '../images/seconds.svg';
import arrow from '../images/countdown-arrow.svg';

const Countdown = () => {
  const calculateTimeRemaining =  useCallback(() => {
    const targetDate = new Date('2023-12-26T00:00:00+01:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [])
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [calculateTimeRemaining]);

  return (
    <div>
      <div className='countdownClass'>
        <img className='arrow desk' src={arrow} alt="" />
        <div className='boxClass'>
          <img src={daysBox} alt="" />
          <div className='remaining'>
            <div className='number'>{timeRemaining.days}</div>
            <div className='cntttl'>Days</div>
          </div>
        </div>
        <div className='boxClass'>
          <img src={hoursBox} alt="" />
          <div className='remaining'>
            <div className='number'>{timeRemaining.hours}</div>
            <div className='cntttl'>Hours</div>
          </div>
        </div>
        <div className='boxClass'>
          <img src={minutesBox} alt="" />
          <div className='remaining'>
            <div className='number'>{timeRemaining.minutes}</div>
            <div className='cntttl'>Min</div>
          </div>
        </div>
        <div className='boxClass'>
          <img src={secondsBox} alt="" />
          <div className='remaining'>
            <div className='number'>{timeRemaining.seconds}</div>
            <div className='cntttl'>Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
