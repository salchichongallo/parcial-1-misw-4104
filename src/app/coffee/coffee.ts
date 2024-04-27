export class Coffee {
  constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly tipo: string,
    public readonly region: string,
    public readonly sabor: string,
    public readonly altura: number,
    public readonly imagen: string,
  ) {}
}
