import './About.css';

const teamMembers = [
  {
    id: 1,
    name: 'John E Vivas',
    role: 'Fullstack Data Engineer',
    badge: 'Developer',
    linkedIn: 'https://www.linkedin.com/in/john-e-vivas',
    bio: 'Lidera la integración de modelos predictivos para optimizar la cadena de suministro global mediante insights de IA avanzada.',
    image: '/assets/fotos/profile.jpg',
    cv: '/assets/CVs/John E Vivas.pdf'
  },
  {
    id: 2,
    name: 'Isabella Cuesta',
    role: 'UX Research & Data Analyst',
    badge: 'Developer',
    linkedIn: 'https://www.linkedin.com/in/isabella-andrea-cuesta-niebles-996a012a7/',
    bio: 'Arquitecta principal del motor de recomendaciones basado en redes neuronales, garantizando latencia mínima en transacciones de escala masiva.',
    image: '/assets/fotos/Foto_isa.jpg',
    cv: '/assets/CVs/CV - Isabella Cuesta.docx.pdf'
  },
  {
    id: 3,
    name: 'Santiago ',
    role: 'Data Engineer',
    badge: 'Analista',
    bio: 'Responsable de la infraestructura de datos en tiempo real, conectando el core de IA con las interfaces de usuario de alta fidelidad.',
    image: '/assets/fotos/santiago.jpeg',
    cv: ''
    
  },
  {
    id: 4,
    name: 'Catalina Pantoja',
    role: 'Lead AI Architect',
    badge: 'Analista',
    bio: 'Analiza el comportamiento del usuario para refinar los flujos de interacción, asegurando que cada decisión de IA sea intuitiva y humana.',
    image: '/assets/fotos/catalina.jpeg',
    cv: ''
  }
];

const About = () => {
  const fallbackFor = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&size=512`;

  return (
    <main className="about-main hero-gradient">
      {/* Hero Section */}
      <section className="about-hero">
        <span className="about-tag">El Futuro del Retail</span>
        <h1 className="about-title">Nuestro Equipo de Innovación</h1>
        <p className="about-description">
          Expertos dedicados a fusionar la inteligencia artificial con el comercio de lujo, creando experiencias que anticipan cada necesidad de negocio. Nuestra misión es redefinir el estándar del comercio inteligente.
        </p>
      </section>

      {/* Team Grid (Bento Style) */}
      <section className="team-grid">
        {teamMembers.map((member) => (
          <div className="glass-card" key={member.id}>
            <div className="member-image-wrapper">
              <img
                className="member-image"
                src={member.image}
                alt={member.name}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackFor(member.name); }}
              />
              <div className="member-badge">{member.badge}</div>
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            {/* <p className="member-bio">{member.bio}</p> */}
            <div className="member-actions">
              <a className="member-btn-primary" href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">link</span>
                <span>LinkedIn</span>
              </a>
              <a className="member-btn-outline" href={member.cv} target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">download</span>
                <span>Ver CV</span>
              </a> 
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="about-footer-container">
          <div className="about-footer-brand">
            <span className="about-footer-title">Samsung Smart Commerce AI</span>
            <p className="about-footer-text">
              Empoderando el comercio del futuro a través de análisis estratégicos y tecnología de vanguardia.
            </p>
          </div>
          <div className="about-footer-links">
            <a className="about-footer-link" href="#">Privacidad</a>
            <a className="about-footer-link" href="#">Términos de IA</a>
            <a className="about-footer-link" href="#">Soporte Técnico</a>
            <a className="about-footer-link" href="#">Legal</a>
          </div>
          <p className="about-footer-copyright">
            © 2024 Samsung Smart Commerce AI. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default About;
