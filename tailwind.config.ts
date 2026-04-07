import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: '#111318',
        mist: '#f5f2eb',
        roast: '#5f3b2a',
        crema: '#d7b074',
        sage: '#7a8f6c',
        ember: '#c86b4a',
        pine: '#20332d',
        foam: '#fffaf2'
      },
      boxShadow: {
        panel: '0 20px 60px rgba(31, 24, 17, 0.08)',
        float: '0 12px 30px rgba(35, 26, 17, 0.12)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'system-ui', 'sans-serif']
      }
    }
  }
}
