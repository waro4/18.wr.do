import { Dock } from "../components/Dock.tsx";

export default function About() {
  return (
    <div class="p-2 w-full leading-8 min-h-screen text-shadow bg-[#f9e4f0] text-lg text-red-100">
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <div class="flex w-full items-center p-2">
          <a class="flex-1" href="/">
            <img src="/logo.png" class="h-12 w-12" />
          </a>
        </div>

        <div class="my-6 text-[#c5005a] bg-[#f9e4f0] border border-base-300 p-4 rounded-lg shadow-lg">
          {" "}
          <h2 class="text-xl font-bold">9.9 元开通终身会员，权益如下：</h2>{" "}
          <p class="my-4 text-neutral text-sm"></p>{" "}
          <ul class="list-disc list-inside text-left">
            {" "}
            <li>解锁 100+ 姿势图片</li>{" "}
            <li>开通同居, 进阶, 私密, SM, 户外, 男仆, 女仆 飞行棋/任务关卡</li>
            <li>永久解锁本应用所有功能</li>
          </ul>
          <button class="btn btn-primary text-white mt-3 px-4 py-2 border rounded-lg bg-pink-600">
            扫描下方二维码支付 9.9元
          </button>
          <img class="my-3 rounded-lg max-w-[250px]" src="/qrcode.JPG" alt="" />
        </div>

        <p class="mx-2 font-bold text-[#c5005a]">
          🔔 支付后请添加客服微信：oiovdev，手动为您开通会员!
        </p>
      </div>

      <Dock />
    </div>
  );
}
