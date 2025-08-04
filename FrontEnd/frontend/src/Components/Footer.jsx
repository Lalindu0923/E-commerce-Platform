import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} E-Shop. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    color: '#333',
  },
};

export default Footer;