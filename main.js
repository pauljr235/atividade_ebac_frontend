    class Shape {
        constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("não pode ser instanciada diretamente.");
        }
        this.name = name;
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
    
    const circle = new Circle(5);
    circle.describe();
    console.log(`Área do círculo: ${circle.getArea()}`); // Área do círculo: 78.5398...
    
    const rectangle = new Rectangle(10, 20);
    rectangle.describe();
    console.log(`Área do retângulo: ${rectangle.getArea()}`); // Área do retângulo: 200
    