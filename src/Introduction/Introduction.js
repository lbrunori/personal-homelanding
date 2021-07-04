import './Introduction.css';
import java from './java.svg';

const Introduction = () => {
  return (
    <div className="Introduction">
        <article>
            <div className="greeting">Hello there! I'm</div> 
            <div className="name">{'<Lucas />'}</div>
            <div className="position">a software developer</div>
            <div className="java-logo-container">
               <img src={java} className="java-logo" alt="intro-logo" width="150" height="150"/>
            </div>
        </article>
    </div>
  );
}

export default Introduction;
