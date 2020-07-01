module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.ts'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        skeleton: 'var(--color-skeleton)',
        gradient100: 'var(--color-gradient100)',
        gradient200: 'var(--color-gradient200)',
        gradient300: 'var(--color-gradient300)',
        paper: 'var(--color-paper)',
        primaryText: 'var(--color-primaryText)',
        secondaryText: 'var(--color-secondaryText)',
        // disabled: 'var(--color-disabled)',
        // hint: 'var(--color-hint)',
        divider: 'var(--color-divider)',
        yellow: 'var(--color-yellow)',
        blue: 'var(--color-blue)',
        bioret: 'var(--color-bioret)',
        red: 'var(--color-red)',
        green: 'var(--color-green)',
        opacityYellow: 'var(--color-opacityYellow)',
        opacityBlue: 'var(--color-opacityBlue)',
        opacityBioret: 'var(--color-opacityBioret)',
        opacityRed: 'var(--color-opacityRed)',
        opacityGreen: 'var(--color-opacityGreen)',
        border: 'var(--color-border)',
        reactHook: '#629FDA',
        redux: '#764ABC',
        localStorage: '#D95726',
        typeScript: '#037ACD',
        gatsby: '#663399',
        materialUi: '#04B0FF',
        nextJs: 'var(--color-primaryText)',
        styledComponents: '#D046B0',
        scss: '#CF679B',
        graphQl: '#E535AB',
        contentful: 'var(--color-primaryText)',
        tailwind: '#4AAFB3',
        inner: 'var(--color-inner)',
      },
      fontFamily: {
        body: ['Montserrat', 'Sans-serif'],
        display: ['Rubik', 'Sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
      screens: {
        // mobile: '320px',

        // tablet: '768px',
        // // => @media (min-width: 1024px) { ... }

        // desktop: '920px',
        // // => @media (min-width: 1280px) { ... }

        mobile: { max: '767px' },
        tablet: { min: '768px', max: '919px' },
        desktop: { min: '920px' },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
};
