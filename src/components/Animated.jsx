import { useSpring, animated } from '@react-spring/web';

// eslint-disable-next-line react/prop-types
const Animated = ({ children, isActive }) => {
  const animationProps = useSpring({
    transform: isActive ? 'scale(1)' : 'scale(0)',
    opacity: isActive ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={animationProps}>{isActive && children}</animated.div>
  );
};

export default Animated;
