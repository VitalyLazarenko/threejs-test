export default class Viewer {

    constructor(viewerContainer) {
        this.viewerContainer = viewerContainer;
        this.renderer = new THREE.WebGLRenderer();
        this.viewerContainer.appendChild(this.renderer.domElement);
    }

    init() {
        // this._animate();
    }

    _animate() {
        // renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this._animate());
    }

    draw(figure) {
        //
    }
}