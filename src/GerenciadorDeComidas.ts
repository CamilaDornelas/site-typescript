import { Comida } from './Comida.js';

export class GerenciadorDeComidas {
  private comidas: Comida[] = [];
  private comidasJa: Comida[] = [];
  private proximoId = 1;

  // COMIDAS DO QUERO FAZER
  public adicionarComida(nome: string): string | null{
    const nomeLower = nome.toLowerCase();

    if (this.comidas.some(c => c.nome.toLowerCase() === nomeLower)) {
      return `A RECEITA""${nome}" NÃO PODE SER ADICIONADA, POIS JÁ ESTÁ NA LISTA!`;
    }

    if (this.comidasJa.some(c => c.nome.toLowerCase() === nomeLower)) {
      return `A RECEITA"${nome}" NÃO PODE SER ADICIONADA, POIS JÁ ESTÁ NA LISTA!`;
    }

    this.comidas.push({ id: this.proximoId++, nome });
    return null;
  }

  // COMIDAS DO JÁ FIZ
  public adicionarComidaJa(nome: string): string | null{
    const nomeLower = nome.toLowerCase();

    if (this.comidasJa.some(c => c.nome.toLowerCase() === nomeLower)) {
      return `A RECEITA"${nome}" NÃO PODE SER ADICIONADA, POIS JÁ ESTÁ NA LISTA!`;
    }

    if (this.comidas.some(c => c.nome.toLowerCase() === nomeLower)) {
      return `A RECEITA "${nome}" NÃO PODE SER ADICIONADA, POIS JÁ ESTÁ NA LISTA!`;
    }

    this.comidasJa.push({ id: this.proximoId++, nome });
    return null;
  }

  // MÉTODOS DE LISTAGEM
  public obterComidas(): Comida[] {
    return this.comidas.slice();
  }

  public obterComidasJa(): Comida[] {
    return this.comidasJa.slice();
  }

  // MÉTODOS DE REMOÇÃO DE COMIDA
  public removerComida(id: number): void {
    this.comidas = this.comidas.filter(c => c.id !== id);
  }

  public removerComidaJa(id: number): void {
    this.comidasJa = this.comidasJa.filter(c => c.id !== id);
  }
}

export const gerenciadorDeComidas = new GerenciadorDeComidas();
