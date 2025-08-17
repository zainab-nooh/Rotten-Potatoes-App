import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h2>Rotten Potatoes™</h2>
        <p>
          A totally serious, definitely professional movie site. 
          Not affiliated with Rotten Tomatoes (please don’t sue us, 
          we don’t even own a lawyer).
        </p>
      </div>

      <div className="footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">🍟 Careers (please hire us)</a></li>
          <li><a href="#">📜 Terms & Conditions</a></li>
          <li><a href="#">🔒 Privacy Policy</a></li>
          <li><a href="#">💌 Newsletter</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Disclaimer</h2>
        <p>
          No actual potatoes were harmed in the making of this site.  
          🍟 This site is 100% GMO-free, gluten-free, and fact-free.
        </p>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Rotten Potatoes. All rights reserved.</p>
        <p>
          If you’re reading this footer, you’re either really bored 
          or grading our project. Hi, professor 👋.
        </p>
      </div>
    </footer>
  )
}

export default Footer
