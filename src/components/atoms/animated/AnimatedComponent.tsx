import { motion } from 'framer-motion';
import { ElementType, ReactNode } from 'react';

interface AnimatedComponentProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType; // Fix for 'JSX' namespace error
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  delay = 0,
  className,
  as: Component = 'div', // Default to 'div' if not specified
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={className}
    >
      <Component>{children}</Component> 
    </motion.div>
  );
};

export default AnimatedComponent;
