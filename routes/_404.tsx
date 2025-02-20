import { Head } from "$fresh/runtime.ts";
import { Dock } from "../components/Dock.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto h-screen bg-[#f9e4f0]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6 rounded-lg"
            src="/logo.png"
            width="96"
            height="96"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">404</h1>
          <p class="my-4">页面不存在</p>
          <a
            href="/"
            class="block text-white px-8 py-2 border rounded-lg bg-pink-600">
            返回首页
          </a>
        </div>
      </div>
      <Dock />
    </>
  );
}
