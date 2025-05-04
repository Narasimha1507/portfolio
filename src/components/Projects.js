import 'animate.css';

// Define the Projects Component
export const Projects = () => {
  const projects = [
    {
      name: 'Online Art Gallery',
      url: 'https://kalasthali.netlify.app/', // Replace with your actual link
      image: require('../assets/img/artgallery.png'), // Ensure correct path
      description: 'A curated platform for artists to showcase and sell their artwork.',
    },
    {
      name: 'Portfolio',
      url: 'https://narasimharaju.netlify.app/', // Replace with your actual link
      image: require('../assets/img/portfolio.png'), // Ensure correct path
      description: 'An elegant personal portfolio displaying my skills and projects.',
    },
    {
      name: 'Scholarship Tracking System',
      url: 'http://scholarshiptracking.netlify.app/', // Replace with your actual link
      image: require('../assets/img/scholarship.png'), // Ensure correct path
      description: 'A system for tracking and managing student scholarships and financial aid.',
    },
    {
      name: 'Complaint Management System',
      url: 'https://36parkavenue.netlify.app/', // Replace with your actual link
      image: require('../assets/img/cms.png'), // Ensure correct path
      description: 'A complaint management system is a digital platform designed to efficiently log, track, and resolve user complaints within an organization or community.',
    },
  ];

  const styles = {
    container: {
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      minHeight: '80vh',
    },
    heading: {
      fontSize: '56px',
      fontWeight: '700',
      marginBottom: '10px',
    },
    tagline: {
      fontSize: '22px',
      fontStyle: 'italic',
      marginBottom: '50px',
      color: '#b3b3b3',
    },
    projectList: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '40px',
      padding: 0,
      listStyleType: 'none',
    },
    projectCard: {
      width: '450px',
      position: 'relative',
      textAlign: 'center',
      backgroundColor: '#2a2a2a',
      borderRadius: '15px',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    projectImage: {
      width: '100%',
      height: '255px',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0',
      transition: 'opacity 0.3s',
      borderRadius: '15px',
    },
    projectName: {
      marginTop: '70px',
      fontSize: '24px',
      color: '#61dafb',
    },
    description: {
      fontSize: '18px',
      padding: '10px',
      textAlign: 'center',
    },
  };

  return (
    <section className="projects" id="projects">
    <div style={styles.container}>
      <h1 style={styles.heading}>Explore My Portfolio</h1>
      <p style={styles.tagline}>
        A showcase of projects demonstrating creativity, functionality, and technical expertise.
      </p>
      <ul style={styles.projectList}>
        {projects.map((project, index) => (
          <li
            key={index}
            style={styles.projectCard}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.overlay').style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('.overlay').style.opacity = '0';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <img src={project.image} alt={project.name} style={styles.projectImage} />
              <div className="overlay" style={styles.overlay}>
                <h2 style={styles.projectName}>{project.name}</h2>                
                <p style={styles.description}>{project.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      
    </div>
    </section>
  );
};
