export default class FigureData {
    constructor(uuid, color, size, name) {
        this.uuid = uuid;
        this.color = color;
        this.size = size;
        this.name = name;
    }
}


const example = {
    uuid: "sdkgjosdngkjsmflsdg",
    color: 0xf0f0f0,
    size: 5,
    name: "Box 1"
}

const example2 = new FigureData("asdfsdnfgsng", 0xffdead, 4, "Sphere 1");

example instanceof FigureData;
example2 instanceof FigureData;