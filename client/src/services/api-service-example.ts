// Imports ===========================================================
// import type { TypeExample } from "../types/type-example.js";

// Constants =========================================================
// const API_URL = "https://api.example.com";

// create ============================================================
// export async function create(
//   data: Omit<TypeExample, "id">
// ): Promise<TypeExample> {
//   return request<TypeExample>(API_URL, {
//     method: "POST",
//     body: JSON.stringify(data),
//   });
// }

// getAll ============================================================
// export async function getAll(): Promise<TypeExample[]> {
//   return request<TypeExample[]>(API_URL);
// }

// getById ===========================================================
// export async function getById(id: number): Promise<TypeExample> {
//   return request<TypeExample>(`${API_URL}/${id}`);
// }

// update ============================================================
// export async function update(data: TypeExample): Promise<TypeExample> {
//   return request<TypeExample>(`${API_URL}/${data.id}`, {
//     method: "PUT",
//     body: JSON.stringify(data),
//   });
// }

// remove ============================================================
// export async function remove(id: number): Promise<void> {
//   await request<void>(`${API_URL}/${id}`, { method: "DELETE" });
// }

// Private Functions =================================================
// async function request<T>(url: string, options?: RequestInit): Promise<T> {
//   try {
//     const response = await fetch(url, {
//       ...options,
//       headers: {
//         "Content-Type": "application/json",
//         ...options?.headers,
//       },
//     });
//
//     if (!response.ok) {
//       throw new Error(`Request failed: ${response.status}`);
//     }
//
//     if (response.status === 204) return undefined as T;
//
//     return (await response.json()) as T;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }