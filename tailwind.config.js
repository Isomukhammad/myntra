/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
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
                primaryBg: '#F1F1FE',
                primary: '#242424',
                headerWhite: '#f5f5f7',
                purpleMain: '#9933ef',
                headerTop: '#313132',
                three: '#333333',
                purpleDark: '#7510ca',
                success: '#3fa796',
                menuIcons: '#9499a5',
                gray2: '#4F4F4F',
                gray6: '#ECEDEE',
                gray7: '#F2F2F2',
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
                mont: ['Montserrat', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
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
    plugins: [
        require("flowbite/plugin")
    ],
}