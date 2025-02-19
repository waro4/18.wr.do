import { Dock } from "../components/Dock.tsx";
import Ai from "../components/ai.tsx";

export default function Apps() {
  return (
    <>
      <div class="w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
        <Ai />
      </div>
      <Dock />
    </>
  );
}
