/** Configuração do Tailwind usada para gerar assets/tailwind.css */
module.exports = {
  content: ['../index.html'],
  theme: {
    extend: {
      colors: { base:'#05040A', deep:'#1B0E3E', mid:'#4C1D95', primary:'#7C3AED', violet:'#8B5CF6', glow:'#A855F7', muted:'#C4C1D4' },
      fontFamily: {
        sora: ['Sora','Poppins','system-ui','sans-serif'],
        inter: ['Inter','Poppins','system-ui','sans-serif'],
        serif: ['"Playfair Display"','Georgia','serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,92,246,.35), 0 0 28px rgba(139,92,246,.45), 0 12px 40px rgba(124,58,237,.35)',
        'glow-sm': '0 0 20px rgba(168,85,247,.35)',
      },
    },
  },
};
