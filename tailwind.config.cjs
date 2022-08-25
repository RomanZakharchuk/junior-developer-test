/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'grey': '#F8F8F8',
                'yellow': '#FDB913',
                'blue': '#446A82'
            },
            backgroundImage: {
                'bg-header': "url('./src/assets/png/bg-component.png')"
            }
        },
    },
    plugins: [],
}
