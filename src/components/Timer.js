import TimerImage from '../img/Timer.png'
import "./Timer.css";


const Timer = () => {
  return (
    <div className="timer">
      <div className="timer-box">
        <img src={TimerImage} alt="Timer" />;
      </div>
    </div>
  );
};

export default Timer;
