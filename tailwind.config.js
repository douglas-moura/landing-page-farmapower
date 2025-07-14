module.exports = {
    content: [
        "./src/index.html",
        "./src/**/*.{html,js,ts,jsx,tsx,vue}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'colorido': "url('/src/assets/img/bg-colorido.jpg')",
            }
        },
    },
    plugins: [],
}