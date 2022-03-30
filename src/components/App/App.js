import './App.css';
import bgTopimage from '../../images/bg-pattern-top-desktop.svg';
import bgBottomimage from '../../images/bg-pattern-bottom-desktop.svg';
import SocialProof from '../SocialProof/SocialProof';

function App() {
  return (
    <div className='page'>
      <SocialProof />
      <img
        src={bgTopimage}
        alt='top background'
        className='background__image-top'
      />
      <img
        src={bgBottomimage}
        alt='top background'
        className='background__image-bottom'
      />
    </div>
  );
}

export default App;
