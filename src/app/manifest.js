export default function manifest() {
    return {
      name: 'Next.js App',
      short_name: 'Next.js App',
      description: 'Next.js App',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/assets/img/sm-logo.svg',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }