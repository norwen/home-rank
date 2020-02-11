module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',

        background: {
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
          accent: 'var(--bg-background-accent)',
          neutral: 'var(--bg-background-neutral)'
        },

        button: {
          primary: 'var(--color-button-primary)',
          'primary-hover': 'var(--color-button-primary-hover)',
          secondary: 'var(--color-button-primary)',
          'secondary-hover': 'var(--color-button-secondary-hover)',
          disabled: 'var(--color-button-disabled)'
        },

        link: {
          primary: 'var(--color-link-primary)',
          'primary-hover': 'var(--color-link-primary-hover)'
        },

        form: {
          accent: 'var(--color-form-accent)'
        }
      },
      fontFamily: {
        sans: ['Roboto'],
        serif: ['Open Sans', 'serif']
      }
    }
  }
}
