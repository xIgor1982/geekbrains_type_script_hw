// Реализовать абстрактный класс MyGraphicsPrimitive2D у которого есть следующие свойства:
// прямоугольная область, описывающая примитив; метод - переместить примитив на заданное смещение;
export abstract class MyGraphicsPrimitive2D {
  x: number
  y: number

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  //метод - перемещающий примитив на заданное смещение
  public changePosition(x: number, y: number): void {
    this.x += x
    this.y += y
  }
}

//От MyGraphicsPrimitive2D должен наследоваться абстрактный класс MyAreaPrimitive2D, у которого есть свойство площадь.
export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  //Площадь фигуры
  square(width: number, height: number): number {
    return width * height
  }
}

//От MyAreaPrimitive2D должны наследоваться 1 - класс MyCircle, у него есть свойства: центр окружности и ее радиус
export class MyCircle extends MyAreaPrimitive2D {
  radius: number

  constructor(centerCircleX: number, centerCircleY: number, radius: number) {
    super(centerCircleX, centerCircleY)
    this.radius = radius
  }
}

////От MyAreaPrimitive2D должны наследоваться 2 - класс MyRectangle со свойствами:
// ширина и высота, левая верхняя граница, правая нижняя граница
export class MyRectangle extends MyAreaPrimitive2D {
  width: number
  height: number

  constructor(X_topLeftBorder: number, Y_bottomRightBorder: number, width: number, height: number) {
    super(X_topLeftBorder, Y_bottomRightBorder);
    this.width = width
    this.height = height
  }
}
