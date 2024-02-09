import React from "react";
import "../styles/header.scss"

export default function Header() {
  return (
    <header
      style={{ backgroundColor: "bg-gray-600", padding: "10px" }}
      className="flex items-center justify-between p-6 bg-white dark:bg-gray-800"
    >
      <h1 className="text-2xl font-bold">King Pinto</h1>
      <nav className="flex gap-4">
        <ul className="flex list-none">
          <li
            style={{ padding: "10px" }}
            className="text-gray-600 hover:underline dark:text-gray-300"
          >
            <a href="/">Home</a>
          </li>
          <li
            style={{ padding: "10px" }}
            className="text-gray-600 hover:underline dark:text-gray-300"
          >
            <a href="#mural">Mural</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
