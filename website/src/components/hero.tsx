import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ 
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 10px',
      position: 'relative',
      marginTop: '80px',
      backgroundColor: '#000',
    }}>
      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
        marginBottom: '20px',
        zIndex: 1,
        position: 'relative',
      }}>
        <h1 className="shadow-text" style={{ 
          fontSize: '240px', 
          fontWeight: 'bold', 
          margin: '0',
          lineHeight: '1',
          color: 'white',
          letterSpacing: '4px',
        }}>
          TechX
        </h1>
      </div>

      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1.8s ease-out 0.3s, transform 1.8s ease-out 0.3s',
        marginBottom: '10px',
        zIndex: 1,
        position: 'relative',
      }}>
        <p style={{ 
          fontSize: '30px', 
          color: '#38b6ff',
          margin: '0',
          fontStyle: 'italic',
          letterSpacing: '1px',
        }}>
          Via Ad Excellentiam
        </p>
      </div>

      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 2s ease-out 0.6s, transform 2s ease-out 0.6s',
        zIndex: 1,
        position: 'relative',
      }}>
        <p style={{ 
          fontSize: '24px', 
          color: 'rgba(255, 255, 255, 0.7)',
          margin: '0',
          letterSpacing: '1px',
        }}>
          UNC's Premier Tech Society
        </p>
      </div>

      <style>{`
        .shadow-text {
          text-shadow: 
            0 0 20px rgba(56, 182, 255, 0.3),
            0 0 40px rgba(56, 182, 255, 0.2),
            0 0 60px rgba(56, 182, 255, 0.1);
          filter: drop-shadow(0 20px 40px rgba(56, 182, 255, 0.4));
          animation: pulse-shadow 3s ease-in-out infinite alternate;
        }
        
        @keyframes pulse-shadow {
          from {
            text-shadow: 
              0 0 20px rgba(56, 182, 255, 0.3),
              0 0 40px rgba(56, 182, 255, 0.2),
              0 0 60px rgba(56, 182, 255, 0.1);
            filter: drop-shadow(0 20px 40px rgba(56, 182, 255, 0.4));
          }
          to {
            text-shadow: 
              0 0 30px rgba(56, 182, 255, 0.4),
              0 0 50px rgba(56, 182, 255, 0.3),
              0 0 70px rgba(56, 182, 255, 0.2);
            filter: drop-shadow(0 25px 50px rgba(56, 182, 255, 0.5));
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 72px !important;
            letter-spacing: 2px !important;
          }
          
          .shadow-text {
            filter: drop-shadow(0 10px 20px rgba(56, 182, 255, 0.4));
          }
        }
      `}</style>
    </section>
  );
}