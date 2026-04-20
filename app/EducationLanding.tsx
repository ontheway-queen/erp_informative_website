const ERP_LOGIN_URL = "https://erp.example.com/login";

const routine = [
  ["Class Six", "English", "Mathematics", "Science", "Break", "Bangla", "ICT"],
  ["Class Seven", "Bangla", "Science", "Mathematics", "Break", "English", "Religion"],
  ["Class Eight", "Mathematics", "English", "History", "Break", "Science", "ICT"],
  ["Class Nine", "Physics", "Chemistry", "Mathematics", "Break", "Biology", "English"],
];

const features = [
  {
    icon: "৳",
    title: "Digital Accounts & Invoicing",
    text: "Efficiently manage fees, payments, and financial records with our secure system.",
  },
  {
    icon: "▣",
    title: "Real-time Reporting & Quotations",
    text: "Generate insightful financial reports and manage institutional quotations.",
  },
  {
    icon: "↔",
    title: "Staff Loan Management",
    text: "Internal system for managing staff loan applications and records securely.",
  },
  {
    icon: "!",
    title: "Smart Notice Board",
    text: "Get real-time updates and public announcements instantly.",
  },
];

export default function EducationLanding() {
  return (
    <main className="eduSite">
      <header className="eduHeader">
        <a className="eduBrand" href="#home" aria-label="Institution home">
          <span>EI</span>
          <strong>Edu Institute</strong>
        </a>
        <nav className="eduNav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#academic">Academic</a>
          <a href="#features">ERP Features</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="eduLogin" href={ERP_LOGIN_URL} target="_blank" rel="noreferrer">
          ERP Client Login
        </a>
      </header>

      <section className="eduHero" id="home">
        <div className="eduHeroContent">
          <div className="eduHeroCopy">
            <p>Modern Education Management</p>
            <h1>Empowering Education Through Innovation.</h1>
            <span>
              Providing quality learning experiences supported by structured academic
              routines, modern administration, and secure ERP-powered management.
            </span>
            <div className="eduHeroActions">
              <a href="#academic">View Academic Routine</a>
              <a className="eduHeroGhost" href="#features">Explore ERP Features</a>
            </div>
            <div className="eduHeroStats" aria-label="Institution highlights">
              <strong>25+ <small>Years Legacy</small></strong>
              <strong>1K+ <small>Students</small></strong>
              <strong>Secure <small>ERP Portal</small></strong>
            </div>
          </div>

          <aside className="eduHeroPanel" aria-label="Academic quick view">
            <div className="eduPanelTop">
              <span>Today</span>
              <strong>Academic Dashboard</strong>
            </div>
            <div className="eduSchedulePreview">
              <div>
                <span>09:00</span>
                <p>Morning Assembly</p>
              </div>
              <div>
                <span>10:30</span>
                <p>Science Lab</p>
              </div>
              <div>
                <span>12:30</span>
                <p>Routine Review</p>
              </div>
            </div>
            <div className="eduPortalBadge">
              <span>ERP</span>
              <p>Accounts, notices, reports, and administration stay organized.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="eduSection eduAbout" id="about">
        <div>
          <p className="eduKicker">About Us</p>
          <h2>Our Legacy.</h2>
        </div>
        <article>
          <p>
            Edu Institute has served generations of learners through disciplined
            teaching, structured academic guidance, and a commitment to values-based
            education. Our mission is to prepare confident students for higher study,
            modern careers, and responsible citizenship.
          </p>
          <p>
            Alongside quality education, our institution uses an internal ERP to
            keep administration organized, secure, and efficient. This public
            website shares information only; sensitive internal work remains inside
            the protected ERP portal.
          </p>
        </article>
      </section>

      <section className="eduSection" id="academic">
        <div className="eduCenter">
          <p className="eduKicker">Academic Routine</p>
          <h2>Class Schedules & Academic Routine.</h2>
          <p>This is a static summary. Actual schedules might vary.</p>
        </div>
        <div className="eduRoutineWrap">
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>09:00</th>
                <th>09:45</th>
                <th>10:30</th>
                <th>11:15</th>
                <th>11:45</th>
                <th>12:30</th>
              </tr>
            </thead>
            <tbody>
              {routine.map(([className, ...slots]) => (
                <tr key={className}>
                  <th>{className}</th>
                  {slots.map((slot) => (
                    <td key={`${className}-${slot}`}>{slot}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="eduSection" id="features">
        <div className="eduCenter">
          <p className="eduKicker">Our System Features</p>
          <h2>Advanced Management at Your Fingertips.</h2>
          <p>
            These cards describe ERP capabilities only. No actual financial data is
            displayed on this public website.
          </p>
        </div>
        <div className="eduFeatures">
          {features.map((feature) => (
            <article key={feature.title}>
              <span>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="eduTrust">
        <div>
          <strong>Secure ERP Portal</strong>
          <p>
            Accounts, quotations, loans, notices, and reports are managed inside
            the existing internal ERP.
          </p>
        </div>
        <a href={ERP_LOGIN_URL} target="_blank" rel="noreferrer">
          ERP Client Login
        </a>
      </section>

      <section className="eduSection" id="contact">
        <div className="eduContactIntro">
          <p className="eduKicker">Contact Us</p>
          <h2>Get in Touch.</h2>
          <p>
            Contact the administration office for admission, academic routine, or
            institutional information.
          </p>
        </div>
        <div className="eduContactGrid">
          <div className="eduContactInfo">
            <article>
              <strong>Address</strong>
              <p>123 Education Road, Dhaka, Bangladesh</p>
            </article>
            <article>
              <strong>Phone Number</strong>
              <p>+880 1234-567890</p>
            </article>
            <article>
              <strong>Email</strong>
              <p>info@eduinstitute.edu.bd</p>
            </article>
            <div className="eduMap">Google Map Embed Placeholder</div>
          </div>
          <form className="eduForm" action="mailto:info@eduinstitute.edu.bd" method="post">
            <label>
              Name
              <input name="name" placeholder="Your full name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="Your email address" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} placeholder="Write your message" required />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="eduFooter">
        <p>© Edu Institute 2026. All Rights Reserved.</p>
        <p>
          This public site provides information and feature descriptions. Actual
          internal management occurs via our secure ERP portal.
        </p>
      </footer>
    </main>
  );
}
