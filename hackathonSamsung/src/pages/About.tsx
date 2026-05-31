import './About.css';

const teamMembers = [
  {
    id: 1,
    name: 'John Vivas',
    role: 'Fullstack Data Engineer',
    badge: 'Developer',
    linkedIn: 'https://www.linkedin.com/in/john-e-vivas/',
    bio: 'Lidera la integración de modelos predictivos para optimizar la cadena de suministro global mediante insights de IA avanzada.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVwfFvsdnpQQOWdrlDvWdj4Bhko2XAN7V-TLErpmAJMutE9HWvOlXKbB6yv6Q-LL6aOaR_U7rrvzRVBlN5xjl0H3e_3RkavxldSf2lCkGwUTohULLdb87EFgLwkvdfK1BlpRTl_ZEpzcgiUasYx-7gj_4TtWoaSp9DJW4SxLpk9Ol0dBwWfzwsoYkEYSPqIf-4lAKbAR7I1z3ymen3yj7x62yIHdpL1Gv7TdT7j0EwnrhPc25ED1mBhl2IhOhoN-ZBiIzlrmKBlkA'
  },
  {
    id: 2,
    name: 'Isabella Cuesta',
    role: 'UX Research & Data Analyst',
    badge: 'Developer',
    linkedIn: 'https://www.linkedin.com/in/isabella-andrea-cuesta-niebles-996a012a7/',
    bio: 'Arquitecta principal del motor de recomendaciones basado en redes neuronales, garantizando latencia mínima en transacciones de escala masiva.',
    image: '/assets/fotos/Foto_isa.jpg'
  },
  {
    id: 3,
    name: 'Santiago ',
    role: 'Data Engineer',
    badge: 'Analista',
    bio: 'Responsable de la infraestructura de datos en tiempo real, conectando el core de IA con las interfaces de usuario de alta fidelidad.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlDw_cApEvWuBOOLAqhB-jcRcyNKvYhn2b-SBNIYFZjN7GhajGm-xybLspbgDBmYqzZLo5RpuVdBLPbUUk3IBlJOTVIU90PbeWOfAc2hVRYtRazuIhwrztz9jI1OmJKoBO1A1_5C3dX50u4S-QH_ThtH5Umj_I9McnabDY-3AegelNHbf-S153lZK9EdJs6IRFQPANP6uZ6IiorGjPlzOhCUw0OsvL-V6haQ-OnMQYhaF4KFqrPdecNHlV6a6t94jZOCdDnGlz2z4'
  },
  {
    id: 4,
    name: 'Catalina Pantoja',
    role: 'Lead AI Architect',
    badge: 'Analista',
    bio: 'Analiza el comportamiento del usuario para refinar los flujos de interacción, asegurando que cada decisión de IA sea intuitiva y humana.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4JjnKbJkpH1lg6HfrJW6NuQSdjm7HunER2Le9oOV-Q4K_z-m_No8PbG_V-bNT5S92FfQwuMNSNVdd9Sk7xu7OAPR9ibBXw-WES59OF9HDEeWGZJDrN-Fn8qde2A6USfnYZvLN3u1RYpkZKv4bG6mRcV47-9XimLlONrAa68a19-ZSxT7GRGadIzDhpB_1bUTtZPtuwCOLcBUsmUea0aD3CK4T2Wgj8ufmdIMYEuMnHhl979wyJyvnIP-Wzvld7GvqV65yhtKsKXk'
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
              {/* <a className="member-btn-outline" href="#">
                <span className="material-symbols-outlined">download</span>
                <span>Descargar CV</span>
              </a> */}
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
