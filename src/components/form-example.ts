// Imports ===========================================================
// import type { TypeExample } from "../types/type-example.js";
// import { serviceExample } from "../services/service-example.js";

// Init Function =====================================================
// export async function initFormExample(): Promise<void> {
//   initEvents();
// }

// Variables ==========================================================

// InitEvents =========================================================
// function initEvents(): void {
//   const form = document.querySelector<HTMLFormElement>("#form");
//   if (!form) throw new Error('"#form" element not found.');
//
//   form.addEventListener("submit", onSubmit);
// }

// Functions ==========================================================

// getFormData --------------------------------------------------------
// OBS: Create a type for your form data.
// function getFormData(): TypeExample {
//   const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
//   if (!nameInput) throw new Error('"#nameInput" element not found.');
//
//   const numberInput = document.querySelector<HTMLInputElement>("#numberInput");
//   if (!numberInput) throw new Error('"#numberInput" element not found.');
//
//   return {
//     id: 0,
//     name: nameInput.value.trim(),
//     number: Number(numberInput.value),
//   };
// }

// onSubmit -----------------------------------------------------------
// async function onSubmit(event: SubmitEvent): Promise<void> {
//   event.preventDefault();
//
//   const data = getFormData();
//
//   if (!validate(data)) return;
//
//   await serviceExample.create(data);
//
//   clearForm();
// }

// validate -----------------------------------------------------------
// function validate(data: TypeExample): boolean {
//   if (!data.name) {
//     alert("Field is required.");
//     return false;
//   }
//
//   return true;
// }

// clearForm ----------------------------------------------------------
// Clears all form fields.
// function clearForm(): void {
//   const form = document.querySelector<HTMLFormElement>("#form");
//   if (!form) throw new Error('"#form" element not found.');
//
//   form.reset();
// }

// setFormFieldData ---------------------------------------------------
// Fills the form fields with data.
// export function setFormFieldData(data: TypeExample): void {
//   const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
//   const numberInput = document.querySelector<HTMLInputElement>("#numberInput");
//   if (!nameInput || !numberInput) throw new Error("Form fields not found.");
//
//   nameInput.value = data.name;
//   numberInput.value = String(data.number);
// }