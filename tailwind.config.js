/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },

        extend: {
            colors: {
                bg: '#f5f5f7',
                headerWhite: '#f5f5f7',
                purpleMain: '#9933ef',
                headerTop: '#313132',
                three: '#333333',
                purpleDark: '#7510ca',
                success: '#3fa796',
                menuIcons: '#9499a5',
                greyFive: "#E0E0E0",
                textSecondary: "#828282",
                placeholder: "#BDBDBD",
                error: "#E95050",
            },
            borderRadius: {
                'sm': "12px",
                'cart': "8px"
            },
            fontFamily: {
                mont: ['Montserrat', 'sans-serif']
            },
            text: {
                'xs': '12px',
                'sm': '14px',
                'base': '16px',
            },
            screens: {
                'lg': '1024px',
                '2xl': '1600px',
            },

            shadow: {
                'main': '2px 4px 12px rgba(0, 0, 0, 0.08)'
            },
        },
    },
    plugins: [],
}