import { useSpring, animated } from '@react-spring/web';

// eslint-disable-next-line react/prop-types
const Animated = ({ children, isActive }) => {
  const animationProps = useSpring({
    from: { transform: 'scale(0)', opacity: 0 },
    to: {
      transform: isActive ? 'scale(1)' : 'scale(0)',
      opacity: isActive ? 1 : 0,
    },
  });

  return (
    <animated.div style={animationProps}>{isActive && children}</animated.div>
  );
};

export default Animated;
