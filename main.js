    class Shape {
        constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Shape é uma classe abstrata e não pode ser instanciada diretamente.");
        }
        this.name = name;
        }
    
        getArea() {
        throw new Error("O método getArea() precisa ser implementado.");
        }
    
        describe() {
        console.log(`Esta é uma ${this.name}.`);
        }
    }
    
    class Circle extends Shape {
        constructor(radius) {
        super("Círculo");
        this.radius = radius;
        }
    
        // Implementando o método abstrato
        getArea() {
        return Math.PI * Math.pow(this.radius, 2);
        }
    }
    
    class Rectangle extends Shape {
        constructor(width, height) {
        super("Retângulo");
        this.width = width;
        this.height = height;
        }
    
        // Implementando o método abstrato
        getArea() {
        return this.width * this.height;
        }
    }
    
    // Exemplo de uso
    const circle = new Circle(5);
    circle.describe(); // "Esta é uma Círculo."
    console.log(`Área do círculo: ${circle.getArea()}`); // Área do círculo: 78.5398...
    
    const rectangle = new Rectangle(10, 20);
    rectangle.describe(); // "Esta é uma Retângulo."
    console.log(`Área do retângulo: ${rectangle.getArea()}`); // Área do retângulo: 200
    