 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    container: false
  },

  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "serif"]
      },

      fontSize: {
        medium: '32px',
        laege: '48pxpx',
        extra: '56px',
      },
      
      colors: {
        primarry: '#000',
        secondary: '#bebeb9',
        gray: '#ebebe9',
        lightGray: '#ebebe9'
      },

      maxWidth: {
        1480: '1480px'
      },

      // điểm dừng reposi
      screens: {
        // sm: '768px',
        // md: '1024px',
        // lg: '1280px'
      },

      // animation là tạo hiệu ứng
      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(1.2)",
            opacity: "0"
          },

          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },

        slideInleft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-150px)"
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0px)"
          }
        },

      },
      animation: {
        zoomIn: "zoomIn .6s ease-out",
        slideInleft: "slideInleft .8s ease-out backwards"
        // style chạy đúng tuần tự
      },

    },
  },
  plugins: [],
}

// file để cấu hình code css theo ý chúng ta
