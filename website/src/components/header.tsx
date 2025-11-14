import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setTimeout(() => {
        setMousePos({ x, y });
      }, 50);
      
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTimeout(() => {
      setMousePos({ x: 50, y: 50 });
    }, 100);
  };

  const getNavItemStyle = (path: string) => ({
    color: location.pathname === path ? 'rgba(56, 182, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
    fontSize: '20px',
    fontWeight: location.pathname === path ? '600' : '500',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '20px',
    backgroundColor: location.pathname === path ? 'rgba(56, 182, 255, 0.1)' : 'transparent'
  });

  return (
    <div style={{ 
      paddingTop: '40px', 
      paddingLeft: '24px', 
      paddingRight: '24px',
      backgroundColor: '#000',
      position: 'relative',
      zIndex: 10
    }}>
      <header 
        ref={headerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          backgroundColor: '#000',
          backdropFilter: 'blur(20px)',
          border: '3px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '60px',
          padding: '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0 0 60px rgba(56, 182, 255, 0.3)`,
          transition: 'box-shadow 0.3s ease, opacity 0.8s ease',
          opacity: isVisible ? 1 : 0
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: isHovering 
              ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                  rgba(56, 182, 255, 0.4) 0%, 
                  rgba(56, 182, 255, 0.2) 20%, 
                  rgba(56, 182, 255, 0.1) 40%, 
                  transparent 60%)`
              : 'transparent',
            pointerEvents: 'none',
            transition: isHovering ? 'none' : 'background 0.3s ease-out',
            borderRadius: '60px',
            opacity: isHovering ? 1 : 0
          }}
        />

        <Link 
          to="/"
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '32px',
            textDecoration: 'none',
            position: 'relative',
            zIndex: 1,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = 'rgba(56, 182, 255, 1)'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          TechX
        </Link>
        
        <nav style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '32px',
          position: 'relative',
          zIndex: 1
        }}>
          <Link 
            to="/members"
            style={getNavItemStyle('/members')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/members') {
                e.target.style.color = 'white';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/members') {
                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Members
          </Link>
          
          <Link 
            to="/join"
            style={getNavItemStyle('/join')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/join') {
                e.target.style.color = 'white';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/join') {
                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Join
          </Link>
          
          <Link 
            to="/gallery"
            style={getNavItemStyle('/gallery')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/gallery') {
                e.target.style.color = 'white';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/gallery') {
                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Gallery
          </Link>
        </nav>
      </header>
    </div>
  );
}