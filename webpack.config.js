// Модуль path, метод resolve. Принимает относительный путь и делает из него абсолютный от корня операционной системы.
// Превращает 'dist' в C:\Users\Eve\Desktop\workspace\webpacktest\dist.
import path from 'path';
let test = path.resolve('dist');
console.log(test);

// mode - режим сборки, entry - точка входа.
export default {
    mode: 'development',
    entry: './src/index.js',
};