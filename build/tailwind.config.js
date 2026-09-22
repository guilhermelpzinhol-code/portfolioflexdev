/** Configuração do Tailwind usada para gerar assets/tailwind.css */
module.exports = {
  content: ['../index.html'],
  theme: {
    extend: {
      colors: { base:'#05040A', deep:'#3A0A0A', mid:'#7A1010', primary:'#D40000', violet:'#F16060', glow:'#F16060', muted:'#C4C1D4' },
      fontFamily: {
        sora: ['Sora','Poppins','system-ui','sans-serif'],
        inter: ['Inter','Poppins','system-ui','sans-serif'],
        serif: ['"Playfair Display"','Georgia','serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(241,96,96,.35), 0 0 28px rgba(241,96,96,.45), 0 12px 40px rgba(212,0,0,.35)',
        'glow-sm': '0 0 20px rgba(241,96,96,.35)',
      },
    },
  },
};
