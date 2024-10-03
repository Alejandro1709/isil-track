"use client";

import { Toggler } from "./toggler";

function Navbar() {
  return (
    <nav className="flex h-14 items-center gap-4 px-4 bg-white dark:bg-zinc-800 border-b dark:border-b-zinc-700">
      <Toggler />
      <h2 className="font-semibold text-xl uppercase">Isil Track</h2>
    </nav>
  );
}

export default Navbar;
