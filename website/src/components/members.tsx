import { useState } from 'react';

interface Member {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
}

interface CohortData {
  [year: string]: Member[];
}

export default function Members() {
  const getLinkedInUrl = (imagePath: string): string | undefined => {
    const linkedInMap: { [key: string]: string } = {
      'public/members/pranav_kosuri.png': 'https://linkedin.com/in/pranav-kosuri',

    };
    return linkedInMap[imagePath];
  };

  const executiveTeam: Member[] = [
    {
      name: "Pranav Kosuri",
      title: "President",
      image: "public/members/pranav_kosuri.png",
      linkedin: getLinkedInUrl("/members/pranav-kosuri.png")
    },
    {
      name: "Nathan Santiago",
      title: "Vice President",
      image: "images/members/2023/nathan-santiago.jpg",
      linkedin: getLinkedInUrl("/members/nathan-santiago.jpg")
    },
    {
      name: "Alex Sieni",
      title: "Executive Board Member",
      image: "images/members/2023/alex-sieni.jpg",
      linkedin: getLinkedInUrl("/members/2023/alex-sieni.jpg")
    },
      {
         name: "Ansh Aryan",
         title: "Executive Board Member",
         image: "images/members/2023/ansh-aryan.jpg",
         linkedin: getLinkedInUrl("/members/2023/ansh-aryan.jpg")
      },
      {
         name: "Sean Blizard",
         title: "Executive Board Member",
         image: "images/members/2023/sean-blizard.jpg",
         linkedin: getLinkedInUrl("/members/2023/sean-blizard.jpg")
      },
      {
         name: "Sushant Marella",
         title: "Executive Board Member",
         image: "images/members/2023/sushant-marella.jpg",
         linkedin: getLinkedInUrl("/members/2023/sushant-marella.jpg")
      },
      {
         name: "Grace Odondi",
         title: "Executive Board Member",
         image: "images/members/2023/grace-odondi.jpg",
         linkedin: getLinkedInUrl("/members/2023/grace-odondi.jpg")
      }
  ];

  const membersData: CohortData = {
    2025: [
      {
        name: "Alex Johnson",
        title: "Full Stack Developer",
        image: "images/members/2025/alex-johnson.jpg",
        linkedin: getLinkedInUrl("images/members/2025/alex-johnson.jpg")
      },
      {
        name: "Sarah Chen",
        title: "UI/UX Designer", 
        image: "images/members/2025/sarah-chen.jpg",
        linkedin: getLinkedInUrl("images/members/2025/sarah-chen.jpg")
      },
      {
        name: "Marcus Williams",
        title: "Data Scientist",
        image: "images/members/2025/marcus-williams.jpg",
        linkedin: getLinkedInUrl("images/members/2025/marcus-williams.jpg")
      }
    ],
    2024: [
      {
        name: "Emily Rodriguez",
        title: "Project Manager",
        image: "images/members/2024/emily-rodriguez.jpg",
        linkedin: getLinkedInUrl("images/members/2024/emily-rodriguez.jpg")
      },
      {
        name: "David Park", 
        title: "DevOps Engineer",
        image: "images/members/2024/david-park.jpg",
        linkedin: getLinkedInUrl("images/members/2024/david-park.jpg")
      },
      {
        name: "Lisa Thompson",
        title: "Mobile Developer",
        image: "images/members/2024/lisa-thompson.jpg",
        linkedin: getLinkedInUrl("images/members/2024/lisa-thompson.jpg")
      },
      {
        name: "James Kumar",
        title: "Cybersecurity Analyst", 
        image: "images/members/2024/james-kumar.jpg",
        linkedin: getLinkedInUrl("images/members/2024/james-kumar.jpg")
      }
    ],
    2023: [
      {
        name: "Robert Martinez",
        title: "Senior Backend Developer",
        image: "images/members/2023/robert-martinez.jpg",
        linkedin: getLinkedInUrl("images/members/2023/robert-martinez.jpg")
      },
      {
        name: "Anna Kowalski",
        title: "AI Research Engineer",
        image: "images/members/2023/anna-kowalski.jpg",
        linkedin: getLinkedInUrl("images/members/2023/anna-kowalski.jpg")
      },
      {
        name: "Ansh Aryan",
        title: "Executive Board Member",
        image: "images/members/2023/ansh-aryan.jpg",
        linkedin: getLinkedInUrl("images/members/2023/ansh-aryan.jpg")
      },
      {
        name: "Sean Blizard",
        title: "Executive Board Member",
        image: "images/members/2023/sean-blizard.jpg",
        linkedin: getLinkedInUrl("images/members/2023/sean-blizard.jpg")
      },
      {
        name: "Sushant Marella",
        title: "Executive Board Member",
        image: "images/members/2023/sushant-marella.jpg",
        linkedin: getLinkedInUrl("images/members/2023/sushant-marella.jpg")
      },
      {
        name: "Grace Odondi",
        title: "Executive Board Member",
        image: "images/members/2023/grace-odondi.jpg",
        linkedin: getLinkedInUrl("images/members/2023/grace-odondi.jpg")
      }
    ]
  };

  const MemberCard = ({ member }: { member: Member }) => {
    const [imageError, setImageError] = useState(false);
    const initials = member.name.split(' ').map(n => n[0]).join('');

    const handleImageError = () => {
      setImageError(true);
    };

    const handleClick = () => {
      if (member.linkedin) {
        window.open(member.linkedin, '_blank', 'noopener,noreferrer');
      }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
      if (member.linkedin) {
        e.currentTarget.style.transform = 'scale(1.05)';
        if (e.currentTarget.tagName === 'IMG') {
          e.currentTarget.style.borderColor = 'rgba(56, 182, 255, 0.8)';
        }
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
      if (member.linkedin) {
        e.currentTarget.style.transform = 'scale(1)';
        if (e.currentTarget.tagName === 'IMG') {
          e.currentTarget.style.borderColor = 'rgba(56, 182, 255, 0.5)';
        }
      }
    };

    const imageElement = !imageError ? (
      <img 
        src={member.image}
        alt={member.name}
        onError={handleImageError}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '20px',
          objectFit: 'cover',
          border: '3px solid rgba(56, 182, 255, 0.5)',
          marginBottom: '16px',
          display: 'block',
          margin: '0 auto 16px auto',
          cursor: member.linkedin ? 'pointer' : 'default',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
    ) : (
      <div 
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '20px',
          background: 'linear-gradient(45deg, rgba(56, 182, 255, 0.6), rgba(56, 182, 255, 0.8))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'white',
          margin: '0 auto 16px auto',
          cursor: member.linkedin ? 'pointer' : 'default',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {initials}
      </div>
    );

    return (
      <div style={{
        textAlign: 'center',
        padding: '20px'
      }}>
        {imageElement}
        <h3 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '0 0 4px 0',
          color: '#FFFFFF'
        }}>
          {member.name}
        </h3>
        <p style={{
          fontSize: '16px',
          color: 'rgba(56, 182, 255, 0.9)',
          margin: '0',
          fontWeight: '500'
        }}>
          {member.title}
        </p>
      </div>
    );
  };

  const CohortSection = ({ year, members }: { year: string; members: Member[] }) => (
    <section
      id={`cohort-${year}`}
      style={{
        marginBottom: '40px'
      }}
    >
      <h3 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#FFFFFF',
        textAlign: 'left'
      }}>
        Cohort {year}
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px'
      }}>
        {members.map((member, index) => (
          <MemberCard key={`${year}-${index}`} member={member} />
        ))}
      </div>
    </section>
  );

  const ExecutiveSection = ({ members }: { members: Member[] }) => (
    <section
      id="executive-team"
      style={{
        marginBottom: '40px'
      }}
    >
      <h3 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#FFFFFF',
        textAlign: 'left'
      }}>
        Executive Team
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px'
      }}>
        {members.map((member, index) => (
          <MemberCard key={`exec-${index}`} member={member} />
        ))}
      </div>
    </section>
  );

  return (
    <div style={{ 
      background: '#000000',
      minHeight: '100vh',
      paddingBottom: '40px'
    }}>
      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 40px',
        paddingTop: '70px'
      }}>
        <section 
          id="our-members"
          style={{ 
            marginBottom: '40px',
            textAlign: 'left'
          }}
        >
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            margin: '0 0 16px 0',
            color: '#FFFFFF'
          }}>
            Our Members
          </h1>
          <p style={{ 
            fontSize: '20px', 
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: '0 0 40px 0',
            maxWidth: '1000px'
          }}>
            Meet the talented individuals who make our community a thriving hub of innovation, 
            development, and technological excellence.
          </p>
        </section>

        <ExecutiveSection members={executiveTeam} />

        {Object.entries(membersData)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, members]) => (
            <CohortSection key={year} year={year} members={members} />
          ))}

        <style>{`
          @media (max-width: 1024px) {
            main {
              max-width: 100% !important;
              padding: 0 24px !important;
            }
            
            div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
    </div>
  );
}