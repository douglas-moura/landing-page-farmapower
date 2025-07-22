import imagemin from 'imagemin'
import webp from 'imagemin-webp'

async function otimizar() {
    await imagemin(['src/images/*.{jpg,jpeg,png}'], {
        destination: 'dist/images',
        plugins: [webp({ quality: 75 })],
    })
    console.log('✅ Imagens otimizadas e convertidas para WebP!')
}

otimizar()