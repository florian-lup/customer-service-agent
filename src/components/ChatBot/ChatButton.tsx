import { motion } from 'framer-motion';

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer rotating circles */}
      <motion.div
        className="absolute w-[88px] h-[88px] rounded-full border-2 border-[#00FF9F]/30"
        style={{ 
          borderRightColor: 'transparent',
          filter: 'drop-shadow(0 0 8px rgba(0, 255, 159, 0.3))',
        }}
        animate={{ 
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-[96px] h-[96px] rounded-full border-2 border-[#0066FF]/30"
        style={{ 
          borderLeftColor: 'transparent',
          filter: 'drop-shadow(0 0 8px rgba(0, 102, 255, 0.3))',
        }}
        animate={{ 
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main button */}
      <motion.button
        onClick={onClick}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-black border border-[#00FF9F]/30 backdrop-blur-sm text-[#00FF9F] shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Rotating inner border */}
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-[#00FF9F]"
          style={{ 
            borderRightColor: 'transparent', 
            borderBottomColor: 'transparent',
            filter: 'drop-shadow(0 0 8px rgba(0, 255, 159, 0.5))',
          }}
          animate={{ 
            rotate: 360,
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        />

        {/* Icon container with animated elements */}
        <motion.div
          className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF9F]/10 to-[#0066FF]/10"
          animate={{
            boxShadow: [
              'inset 0 0 10px rgba(0, 255, 159, 0.3)',
              'inset 0 0 20px rgba(0, 255, 159, 0.5)',
              'inset 0 0 10px rgba(0, 255, 159, 0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Enhanced animated dots */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex items-center justify-center">
              {/* Central dot */}
              <motion.div
                className="absolute w-2.5 h-2.5 rounded-full bg-[#00FF9F]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    '0 0 10px rgba(0, 255, 159, 0.5)',
                    '0 0 20px rgba(0, 255, 159, 0.8)',
                    '0 0 10px rgba(0, 255, 159, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Orbiting dots */}
              {[0, 120, 240].map((angle, index) => (
                <motion.div
                  key={angle}
                  className="absolute w-2 h-2 rounded-full bg-[#00FF9F]"
                  style={{
                    transform: `rotate(${angle}deg) translateX(12px)`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Dot trail */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#00FF9F]"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      filter: 'blur(2px)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  );
} 