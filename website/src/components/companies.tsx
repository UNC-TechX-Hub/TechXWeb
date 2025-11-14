import type React from 'react';

interface Company {
  name: string;
  logo: string;
  url: string;
}

const CompanyLogosGrid: React.FC = () => {
  const companies: Company[] = [
    { name: 'Amazon', logo: '/logos/amazon.png', url: 'https://www.amazon.com' },
    { name: 'CERN', logo: '/logos/cern.png', url: 'https://home.cern' },
    { name: 'Cisco', logo: '/logos/cisco.png', url: 'https://www.cisco.com' },
    { name: 'Contrary VC', logo: '/logos/contrary-vc.png', url: 'https://contrary.com' },
    { name: 'Delphi.ai', logo: '/logos/delphi-ai.png', url: 'https://delphi.ai' },
    { name: 'Fidelity', logo: '/logos/fid.png', url: 'https://www.fidelity.com' },
    { name: 'JP Morgan Chase', logo: '/logos/jpmc.png', url: 'https://www.jpmorganchase.com' },
    { name: 'KPMG', logo: '/logos/kpmg.png', url: 'https://home.kpmg' },
    { name: 'Lowe\'s', logo: '/logos/lowes.png', url: 'https://www.lowes.com' },
    { name: 'Meta', logo: '/logos/meta.png', url: 'https://www.meta.com' },
    { name: 'Microsoft', logo: '/logos/microsoft.png', url: 'https://www.microsoft.com' },
    { name: 'NetApp', logo: '/logos/netapp.png', url: 'https://www.netapp.com' },
    { name: 'Palantir Technologies', logo: '/logos/palantir.png', url: 'https://www.palantir.com' },
    { name: 'Principal', logo: '/logos/principal.png', url: 'https://www.principal.com' },
    { name: 'Robinhood', logo: '/logos/robinhood.png', url: 'https://www.robinhood.com' },
    { name: 'SAS', logo: '/logos/sas.png', url: 'https://www.sas.com' },
    { name: 'Soma Capital', logo: '/logos/soma-capital.png', url: 'https://somacap.com' },
    { name: 'The Residency', logo: '/logos/the-residency.png', url: 'https://www.livetheresidency.com/' },
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div style={{ 
      marginTop: '60px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '40px',
        alignItems: 'center',
        justifyItems: 'center'
      }}>
        {companies.map((company, index) => (
          <a
            key={index}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '20px',
              width: '120px',
              height: '120px',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(56, 182, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(56, 182, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(56, 182, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              style={{
                maxHeight: '60px',
                maxWidth: '80px',
                objectFit: 'contain',
                filter: 'brightness(0.9)'
              }}
              onError={(e) => {
                console.error(`Failed to load image: ${company.logo}`);
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = `<span style="color: rgba(255, 255, 255, 0.7); font-size: 14px; text-align: center; font-weight: 500;">${company.name}</span>`;
                }
              }}
            />
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(6, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 25px !important;
          }
          
          a[style*="width: 120px"] {
            width: 90px !important;
            height: 90px !important;
          }
          
          img[style*="max-height: 60px"] {
            max-height: 40px !important;
            max-width: 60px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(6, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          
          a[style*="width: 120px"] {
            width: 80px !important;
            height: 80px !important;
          }
          
          img[style*="max-height: 60px"] {
            max-height: 35px !important;
            max-width: 50px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyLogosGrid;