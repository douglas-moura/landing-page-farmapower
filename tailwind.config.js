module.exports = {
    content: [
        "./src/index.html",
        "./src/**/*.{html,js,ts,jsx,tsx,vue}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'colorido': "url('/src/assets/img/bg-colorido.jpg')",
                'azul-h': "url('/src/assets/img/bg-azul.jpg')",
                'azul-v': "url('/src/assets/img/bg-azul-v.jpg')",
                'wilson': "url('/src/assets/img/bg-wilson.png')",
                'equipe': "url('/src/assets/img/shutterstock_552090199.jpg')",
            }
        },
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif']
        }
    },
    plugins: [],
}