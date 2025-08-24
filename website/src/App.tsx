import { useState, useEffect, useRef } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import CompanyLogosGrid from './components/companies';
import Footer from './components/footer';

export default function App() {
  const [isVisible, setIsVisible] = useState({});
  const [whoMousePos, setWhoMousePos] = useState({ x: 50, y: 50 });
  const [whoIsHovering, setWhoIsHovering] = useState(false);
  const [whatMousePos, setWhatMousePos] = useState({ x: 50, y: 50 });
  const [whatIsHovering, setWhatIsHovering] = useState(false);
  const [whereMousePos, setWhereMousePos] = useState({ x: 50, y: 50 });
  const [whereIsHovering, setWhereIsHovering] = useState(false);
  const whoHeaderRef = useRef(null);
  const whatHeaderRef = useRef(null);
  const whereHeaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleWhoMouseMove = (e) => {
    if (whoHeaderRef.current) {
      const rect = whoHeaderRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setTimeout(() => {
        setWhoMousePos({ x, y });
      }, 50);
      
      setWhoIsHovering(true);
    }
  };

  const handleWhoMouseLeave = () => {
    setWhoIsHovering(false);
    setTimeout(() => {
      setWhoMousePos({ x: 50, y: 50 });
    }, 100);
  };

  const handleWhatMouseMove = (e) => {
    if (whatHeaderRef.current) {
      const rect = whatHeaderRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setTimeout(() => {
        setWhatMousePos({ x, y });
      }, 50);
      
      setWhatIsHovering(true);
    }
  };

  const handleWhatMouseLeave = () => {
    setWhatIsHovering(false);
    setTimeout(() => {
      setWhatMousePos({ x: 50, y: 50 });
    }, 100);
  };

  const handleWhereMouseMove = (e) => {
    if (whereHeaderRef.current) {
      const rect = whereHeaderRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setTimeout(() => {
        setWhereMousePos({ x, y });
      }, 50);
      
      setWhereIsHovering(true);
    }
  };

  const handleWhereMouseLeave = () => {
    setWhereIsHovering(false);
    setTimeout(() => {
      setWhereMousePos({ x: 50, y: 50 });
    }, 100);
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white' }}>
      <Header />
      <Hero />
      
      <main style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        padding: '0 40px'
      }}>
        <section 
          id="who-we-are"
          data-animate
          style={{ 
            marginBottom: '10px',
            paddingTop: '60px',
            opacity: isVisible['who-we-are'] ? 1 : 0,
            transform: isVisible['who-we-are'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.2s ease-out, transform 1.2s ease-out'
          }}
        >
          <div
            ref={whoHeaderRef}
            onMouseMove={handleWhoMouseMove}
            onMouseLeave={handleWhoMouseLeave}
            style={{
              display: 'inline-block',
              position: 'relative',
              marginBottom: '24px',
              padding: '20px 40px',
              border: '3px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
              overflow: 'hidden',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 40px rgba(56, 182, 255, 0.3)`,
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: whoIsHovering 
                  ? `radial-gradient(circle at ${whoMousePos.x}% ${whoMousePos.y}%, 
                      rgba(56, 182, 255, 0.4) 0%, 
                      rgba(56, 182, 255, 0.2) 20%, 
                      rgba(56, 182, 255, 0.1) 40%, 
                      transparent 60%)`
                  : 'transparent',
                pointerEvents: 'none',
                transition: whoIsHovering ? 'none' : 'background 0.3s ease-out',
                borderRadius: '50px',
                opacity: whoIsHovering ? 1 : 0
              }}
            />
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              margin: '0',
              color: '#000000',
              lineHeight: '1.2',
              position: 'relative',
              zIndex: 1
            }}>
              Who we are
            </h2>
          </div>
          <p style={{ 
            fontSize: '30px', 
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: '0'
          }}>
            We are a passionate community of technologists, and entrepreneurs at UNC. 
            Our members come from diverse backgrounds united by a shared love for technology and its 
            potential to create positive change in the world.
          </p>
        </section>

        <section 
          id="what-we-do"
          data-animate
          style={{ 
            marginBottom: '10px',
            paddingTop: '60px',
            opacity: isVisible['what-we-do'] ? 1 : 0,
            transform: isVisible['what-we-do'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.2s ease-out, transform 1.2s ease-out'
          }}
        >
          <div
            ref={whatHeaderRef}
            onMouseMove={handleWhatMouseMove}
            onMouseLeave={handleWhatMouseLeave}
            style={{
              display: 'inline-block',
              position: 'relative',
              marginBottom: '24px',
              padding: '20px 40px',
              border: '3px solid rgba(255, 255, 255, 0.6)',
              borderRadius: '50px',
              overflow: 'hidden',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 40px rgba(56, 182, 255, 0.4)`,
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: whatIsHovering 
                  ? `radial-gradient(circle at ${whatMousePos.x}% ${whatMousePos.y}%, 
                      rgba(56, 182, 255, 0.5) 0%, 
                      rgba(56, 182, 255, 0.3) 20%, 
                      rgba(56, 182, 255, 0.15) 40%, 
                      transparent 60%)`
                  : 'transparent',
                pointerEvents: 'none',
                transition: whatIsHovering ? 'none' : 'background 0.3s ease-out',
                borderRadius: '50px',
                opacity: whatIsHovering ? 1 : 0
              }}
            />
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              margin: '0',
              lineHeight: '1.2',
              color: '#000000',
              position: 'relative',
              zIndex: 1
            }}>
              What we do
            </h2>
          </div>
          <p style={{ 
            fontSize: '30px', 
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: '0'
          }}>
            In Lyceum, first-semester members gain full-stack and product-building fundamentals under our "Headmaster."
            In the Incubator, members pair up to build and launch real products for UNC and beyond with guidance from our Incubator Chair. 
            And through Social, the whole society connects at weekly Gatherings and events.
          </p>
        </section>

        <section 
          id="where-we-go"
          data-animate
          style={{ 
            marginBottom: '40px',
            paddingTop: '60px',
            opacity: isVisible['where-we-go'] ? 1 : 0,
            transform: isVisible['where-we-go'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.2s ease-out, transform 1.2s ease-out'
          }}
        >
          <div
            ref={whereHeaderRef}
            onMouseMove={handleWhereMouseMove}
            onMouseLeave={handleWhereMouseLeave}
            style={{
              display: 'inline-block',
              position: 'relative',
              marginBottom: '24px',
              padding: '20px 40px',
              border: '3px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
              overflow: 'hidden',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 40px rgba(56, 182, 255, 0.3)`,
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: whereIsHovering 
                  ? `radial-gradient(circle at ${whereMousePos.x}% ${whereMousePos.y}%, 
                      rgba(56, 182, 255, 0.4) 0%, 
                      rgba(56, 182, 255, 0.2) 20%, 
                      rgba(56, 182, 255, 0.1) 40%, 
                      transparent 60%)`
                  : 'transparent',
                pointerEvents: 'none',
                transition: whereIsHovering ? 'none' : 'background 0.3s ease-out',
                borderRadius: '50px',
                opacity: whereIsHovering ? 1 : 0
              }}
            />
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              margin: '0',
              color: '#000000',
              lineHeight: '1.2',
              position: 'relative',
              zIndex: 1
            }}>
              Where we go
            </h2>
          </div>
          <p style={{ 
            fontSize: '30px', 
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: '0'
          }}>
            Our members have gone on to work at top tech companies, launch successful startups, and make significant contributions
            to open source projects. We provide the resources, mentorship, and community support to help our members achieve their career goals and make a lasting impact in the tech world.
          </p>
        </section>
        <CompanyLogosGrid />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          main {
            max-width: 100% !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </div>
  );
}