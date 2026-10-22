// Imports ===========================================================
// import type { TypeExample } from "../types/type-example.js";

// Variables =========================================================
// const items: TypeExample[] = [];

// create ============================================================
// export function create(data: Omit<TypeExample, "id">): TypeExample {
//   const newItem: TypeExample = { ...data, id: generateNextId() };
//   items.push(newItem);
//   return newItem;
// }

// generateNextId ====================================================
// function generateNextId(): number {
//   if (items.length === 0) return 1;
//   return Math.max(...items.map((item) => item.id)) + 1;
// }

// getAll ============================================================
// export function getAll(): TypeExample[] {
//   return [...items];
// }

// getById ===========================================================
// export function getById(id: number): TypeExample | undefined {
//   return items.find((item) => item.id === id);
// }

// update ============================================================
// export function update(data: TypeExample): TypeExample {
//   const index = items.findIndex((item) => item.id === data.id);
//   if (index === -1) throw new Error("Item not found.");
//
//   items[index] = data;
//   return data;
// }

// remove ============================================================
// export function remove(id: number): void {
//   const index = items.findIndex((item) => item.id === id);
//   if (index === -1) throw new Error("Item not found.");
//
//   items.splice(index, 1);
// }