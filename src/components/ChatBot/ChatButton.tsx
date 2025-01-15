
interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer rotating circles - Using CSS animations */}
      <div
        className="absolute w-[88px] h-[88px] rounded-full border-2 border-[#00FF9F]/30 animate-spin-slow"
        style={{ 
          borderRightColor: 'transparent',
          filter: 'drop-shadow(0 0 8px rgba(0, 255, 159, 0.3))',
          animationDuration: '8s',
        }}
      />
      <div
        className="absolute w-[96px] h-[96px] rounded-full border-2 border-[#0066FF]/30 animate-spin-reverse"
        style={{ 
          borderLeftColor: 'transparent',
          filter: 'drop-shadow(0 0 8px rgba(0, 102, 255, 0.3))',
          animationDuration: '12s',
        }}
      />

      {/* Main button */}
      <button
        onClick={onClick}
        className="relative flex items-center justify-center w-16 h-16 rounded-full 
                 bg-black border border-[#00FF9F]/30 backdrop-blur-sm text-[#00FF9F] 
                 shadow-lg hover:shadow-xl transition-all duration-300
                 hover:scale-105 active:scale-95 group"
      >
        {/* Rotating inner border - Using CSS animation */}
        <div
          className="absolute inset-0 rounded-full border-[3px] border-[#00FF9F] animate-spin-slow"
          style={{ 
            borderRightColor: 'transparent', 
            borderBottomColor: 'transparent',
            filter: 'drop-shadow(0 0 8px rgba(0, 255, 159, 0.5))',
            animationDuration: '8s',
          }}
        />

        {/* Icon container */}
        <div
          className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br 
                   from-[#00FF9F]/10 to-[#0066FF]/10 group-hover:from-[#00FF9F]/20 
                   group-hover:to-[#0066FF]/20 transition-all duration-300"
        >
          {/* Animated dots */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
               style={{ animationDuration: '8s' }}>
            <div className="flex items-center justify-center">
              {/* Central dot */}
              <div
                className="absolute w-2.5 h-2.5 rounded-full bg-[#00FF9F] animate-pulse"
                style={{
                  boxShadow: '0 0 10px rgba(0, 255, 159, 0.5)',
                  animationDuration: '2s',
                }}
              />

              {/* Orbiting dots */}
              {[0, 120, 240].map((angle) => (
                <div
                  key={angle}
                  className="absolute w-2 h-2 rounded-full bg-[#00FF9F]/80"
                  style={{
                    transform: `rotate(${angle}deg) translateX(12px)`,
                  }}
                >
                  {/* Dot trail */}
                  <div
                    className="absolute inset-0 rounded-full bg-[#00FF9F]/30 blur-[2px]"
                    style={{
                      transform: 'scale(1.5)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
} 