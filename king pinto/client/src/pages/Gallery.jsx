import React from "react";

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{ padding: "10px" }}
      className="flex flex-col min-h-screen"
    >
      <main className="flex-1 p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-2xl font-bold">Gallery</h1>;
        <img
          alt="Artwork 1"
          className="aspect-content object-cover rounded-lg overflow-hidden"
          height="200"
          src="/placeholder.svg"
          width="200"
        />
        <img
          alt="Artwork 2"
          className="aspect-content object-cover rounded-lg overflow-hidden"
          height="300"
          src="/placeholder.svg"
          width="200"
        />
        <img
          alt="Artwork 3"
          className="aspect-content object-cover rounded-lg overflow-hidden"
          height="250"
          src="/placeholder.svg"
          width="200"
        />
        <img
          alt="Artwork 4"
          className="aspect-content object-cover rounded-lg overflow-hidden"
          height="200"
          src="/placeholder.svg"
          width="200"
        />
        <img
          alt="Artwork 5"
          className="aspect-content object-cover rounded-lg overflow-hidden"
          height="300"
          src="/placeholder.svg"
          width="200"
        />
        <img
          alt="Artwork 6"
          className="aspect-content object-cover rounded-lg overflow-hidden"
          height="250"
          src="/placeholder.svg"
          width="200"
        />
      </main>
    </section>
  );
}