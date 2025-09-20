module.exports = {
    content: [
      "./pages/*.{html,js}",
      "./index.html",
      "./js/*.js",
      "./components/*.html"
    ],
    theme: {
      extend: {
        colors: {
          // Primary Colors - Warm teak authority, cultural grounding
          primary: {
            50: "#FDF8F4",
            100: "#F9EDE0",
            200: "#F2D9C1",
            300: "#E8C19E",
            400: "#D4A574",
            500: "#B8935A",
            600: "#8B4513", // saddle-brown
            700: "#6B3410",
            800: "#4A240B",
            900: "#2D1607",
            DEFAULT: "#8B4513" // saddle-brown
          },
          // Secondary Colors - Spice gold warmth, heritage luxury
          secondary: {
            50: "#FDF9F4",
            100: "#FAF0E6",
            200: "#F4E4CC",
            300: "#EDD5B0",
            400: "#E3C590",
            500: "#D4A574", // tan
            600: "#C19660",
            700: "#A67C4A",
            800: "#7D5D37",
            900: "#4F3A22",
            DEFAULT: "#D4A574" // tan
          },
          // Accent Colors - Monsoon green vitality, natural balance
          accent: {
            50: "#F0F9F4",
            100: "#DCF2E6",
            200: "#B8E5CE",
            300: "#8DD5B1",
            400: "#5BC18E",
            500: "#3FA875",
            600: "#2E8B57", // sea-green
            700: "#236B43",
            800: "#1A4F32",
            900: "#10301E",
            DEFAULT: "#2E8B57" // sea-green
          },
          // Background Colors
          background: "#FEFEFE", // near-white
          surface: "#F8F6F3", // warm-gray-50
          
          // Text Colors
          text: {
            primary: "#2C2C2C", // gray-800
            secondary: "#6B6B6B" // gray-500
          },
          
          // Status Colors
          success: "#228B22", // forest-green
          warning: "#DAA520", // goldenrod
          error: "#CD5C5C", // indian-red
          
          // Border Colors
          border: {
            DEFAULT: "#E8E5E0", // warm-gray-200
            accent: "#D4A574" // tan
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
          accent: ['Crimson Text', 'serif'],
          playfair: ['Playfair Display', 'serif'],
          inter: ['Inter', 'sans-serif'],
          crimson: ['Crimson Text', 'serif']
        },
        fontSize: {
          'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
          'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
          'heading': ['2rem', { lineHeight: '1.3' }],
          'subheading': ['1.5rem', { lineHeight: '1.4' }],
          'body-lg': ['1.125rem', { lineHeight: '1.6' }],
          'body': ['1rem', { lineHeight: '1.6' }],
          'body-sm': ['0.875rem', { lineHeight: '1.5' }],
          'caption': ['0.75rem', { lineHeight: '1.4' }]
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
          '144': '36rem'
        },
        boxShadow: {
          'portfolio': '0 4px 20px rgba(139, 69, 19, 0.08)',
          'subtle': '0 2px 10px rgba(139, 69, 19, 0.04)',
          'primary': '0 4px 20px rgba(139, 69, 19, 0.08)'
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem'
        },
        transitionDuration: {
          '400': '400ms'
        },
        transitionTimingFunction: {
          'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        animation: {
          'fade-in': 'fadeIn 0.3s ease-out',
          'slide-up': 'slideUp 0.4s ease-out',
          'parallax': 'parallax 0.6s ease-out'
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          },
          parallax: {
            '0%': { transform: 'translateY(0px)' },
            '100%': { transform: 'translateY(-10px)' }
          }
        },
        backdropBlur: {
          xs: '2px'
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio')
    ]
  }