module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'black',
      },
      textColor: {
        'primary': 'white',
      },
      borderRadius: {
        'default': '8px',
      }
    }
  },
  variants: {
    extend: {
      // Disable hover variants
      backgroundColor: [],
      textColor: [],
    }
  }
} 