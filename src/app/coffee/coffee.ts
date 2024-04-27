export enum CoffeeType {
  blend = 'Blend',
  origin = 'Café de Origen',
}

export class Coffee {
  constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly tipo: CoffeeType,
    public readonly region: string,
    public readonly sabor: string,
    public readonly altura: number,
    public readonly imagen: string,
  ) {}
}
