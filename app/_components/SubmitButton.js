"use client";

import { useFormStatus } from "react-dom";
export default function SubmitButton({ children, pendingLable }) {
  const { pending } = useFormStatus();
  console.log("pending", pending);
  return (
    <button
      className="bg-accent-500 px-6 py-3 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLable : children}
    </button>
  );
}
