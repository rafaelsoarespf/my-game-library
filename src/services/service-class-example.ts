// Imports ===========================================================
// import type { TypeExample } from "../types/type-example.js";

// export class ServiceClassExample {
//   // Variables ======================================================
//   private static data: TypeExample[] = [];
//
//   // Initialization =================================================
//   static initService(): void {
//     this.load();
//   }
//
//   // getAll =========================================================
//   static getAll(): TypeExample[] {
//     return [...this.data];
//   }
//
//   // getById ========================================================
//   static getById(id: number): TypeExample | undefined {
//     return this.data.find((item) => item.id === id);
//   }
//
//   // create =========================================================
//   static create(data: Omit<TypeExample, "id">): TypeExample {
//     const newItem: TypeExample = { ...data, id: this.getNextId() };
//     this.data.push(newItem);
//     this.save();
//     return newItem;
//   }
//
//   // update =========================================================
//   static update(data: TypeExample): TypeExample {
//     const index = this.data.findIndex((item) => item.id === data.id);
//     if (index === -1) throw new Error("Item not found.");
//
//     this.data[index] = data;
//     this.save();
//     return data;
//   }
//
//   // remove =========================================================
//   static remove(id: number): void {
//     const index = this.data.findIndex((item) => item.id === id);
//     if (index === -1) throw new Error("Item not found.");
//
//     this.data.splice(index, 1);
//     this.save();
//   }
//
//   // load ===========================================================
//   private static load(): void {
//     // Load data.
//   }
//
//   // save ===========================================================
//   private static save(): void {
//     // Save data.
//   }
//
//   // getNextId ======================================================
//   private static getNextId(): number {
//     if (this.data.length === 0) return 1;
//     return Math.max(...this.data.map((item) => item.id)) + 1;
//   }
// }