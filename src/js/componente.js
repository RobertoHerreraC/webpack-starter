import '../css/componente.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre = 'Sin nombre') => {
    console.log('Creando un H1!!');
    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola ${nombre}!`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}


//https://webpack.js.org/loaders/css-loader/
//https://webpack.js.org/loaders/style-loader/
//https://v4.webpack.js.org/loaders/file-loader/
// https://webpack.js.org/plugins/copy-webpack-plugin/
// https://webpack.js.org/plugins/terser-webpack-plugin/
// https://webpack.js.org/plugins/css-minimizer-webpack-plugin/