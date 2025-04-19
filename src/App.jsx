import { OverlayProvider } from './components/Overlay/OverlayContext';
import { Overlay } from './components/Overlay/Overlay';
import { Zoom } from './components/Zoom';
import githubLogo from './images/Octicons-mark-github.svg';
import profileImg from './images/profile.jpg';
import email from './images/mail_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg'
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import './App.css';
import ProgressiveTextReveal from './ProgressiveTextReveal';

function App() {

  const [text] = useTypewriter({
    words: ['Yamunah Rajkumar', 'Yamu'],
    loop: true,
    delay: 1500,
  });


  return (
    <OverlayProvider>
      <Zoom className="zoom" src={profileImg} alt="Profile Image" />
      <div className="typewriter-container"><h1>{text}<Cursor/></h1></div>
      <h2 className="title">Front-end Developer</h2>
      <div>
      <ProgressiveTextReveal text="I graduated in Interaction Design at George Brown College with an advanced college diploma. I am hoping to use future opportunities in the field to focus on accessibility and creating equal experiences through interaction design." delay={150}/>
      </div>
      <div><a href="https://yamuuu.github.io/Portfolio/">Portfolio</a></div>
      <div className='contact'>
        <img src={githubLogo} alt="GitHub Logo" style={{ width: '50px', height: '50px' }} />
        <img src={email} alt="email icon" style={{ width: '50px', height: '50px' }}/>
        <p>yamu.rkumar@gmail.com</p>
      </div>
      <Overlay />
    </OverlayProvider>
  );
}

export default App;
