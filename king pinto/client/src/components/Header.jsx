import React from "react";

export default function Header() {
  return (
    <header
      style={{ backgroundColor: "bg-gray-600", padding: "10px" }}
      className="flex items-center justify-between p-6 bg-white dark:bg-gray-800"
    >
      <h1 className="text-2xl font-bold">King Pinto</h1>
      <nav className="flex gap-4">
        <a
          style={{ padding: "10px" }}
          className="text-gray-600 hover:underline dark:text-gray-300"
          href="#"
        >
          Home
        </a>
        <a
          style={{ padding: "10px" }}
          className="text-gray-600 hover:underline dark:text-gray-300"
          href="#"
        >
          About
        </a>
        <a
          style={{ padding: "10px" }}
          className="text-gray-600 hover:underline dark:text-gray-300"
          href="#"
        >
          Gallery
        </a>
        <a
          style={{ padding: "10px" }}
          className="text-gray-600 hover:underline dark:text-gray-300"
          href="#"
        >
          Murals
        </a>
      </nav>
    </header>
  );
}
