import App from './App';

const rootElement = document.getElementById('viewer');
const app = new App(rootElement);
app.init();

// TODO: set on valid listener
document.addEventListener('close', () => {
    app.destroy();
});
