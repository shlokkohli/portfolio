import { TypeAnimation } from 'react-type-animation';

const TypeAnimate = () => {
  return (
    <TypeAnimation
      sequence={[
        'A Fullstack Developer',
        1000,
        'A lifelong learner',
        1000,
        'Open to work',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimate;