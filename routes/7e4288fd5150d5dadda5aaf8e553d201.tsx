import VipIsland from "../islands/vip.tsx";
import { Dock } from "../components/Dock.tsx";

export default function About() {
  return (
    <div class="w-full p-2 leading-8 min-h-screen text-shadow bg-pink-300 text-lg text-red-100">
      <h1 class="my-8 text-sm text-center font-bold text-[#c5005a]">
        18.wr.do 情趣小游戏
      </h1>
      <img src="/logo.png" class="w-16 h-16 mx-auto rounded-lg" />
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <VipIsland></VipIsland>
        <div class="leading-8 text-gray-900 max-w-lg mt-8 max-auto">
          ✅ 开通成功，正在激活中...
        </div>
        <p class="m-2 font-bold text-[#c5005a]">
          激活会员后将自动跳转回首页...
        </p>
        <p class="fixed bottom-20 left-0 right-0 text-center m-2 font-bold text-[#c5005a]">
          🔔 有问题请添加客服微信【 oiovdev 】
        </p>
      </div>

      <Dock />
    </div>
  );
}
