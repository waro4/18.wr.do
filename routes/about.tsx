import { Dock } from "../components/Dock.tsx";
import ACtiveInput from "../islands/active.tsx";
export default function About() {
  return (
    <div class="p-3 w-full grids leading-8 min-h-screen text-shadow bg-[#f9e4f0] text-lg text-red-100">
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <div class="flex w-full gap-3 justify-start items-center p-2">
          <a class="" href="/">
            <img src="/logo.png" class="h-12 w-12" />
          </a>
          <h1 class="font-bold text-[#c5005a]">情趣小游戏</h1>
        </div>

        <div class="my-6 text-[#c5005a] bg-white border border-base-300 p-4 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold">🎉 9.9 元开通终身会员，权益如下：</h2>{" "}
          <p class="my-4 text-neutral text-sm"></p>
          <ul class="list-disc list-inside text-left">
            <li className="mb-2">
              🔓 <span className="font-semibold">解锁 100+ 姿势图片</span>
            </li>
            <li className="mb-2">
              🎢{" "}
              <span className="font-semibold">开通所有飞行棋/任务关卡主题</span>
            </li>
            <li className="mb-2">
              ✨ <span className="font-semibold">永久解锁本应用所有功能</span>
            </li>
          </ul>
          <ACtiveInput value="" />
          <button class="btn btn-primary text-sm text-white mt-3 px-4 py-2 border rounded-lg bg-pink-600">
            扫描下方二维码支付 9.9元
          </button>
          <p class="m-2 font-bold text-[#c5005a]">
            🔔 支付后请添加客服微信【 oiovdev 】获取激活码! <br />
            客服回复时间段：7:00-24:00
          </p>
          <img class="my-3 rounded-lg max-w-[300px]" src="/qrcode.JPG" alt="" />
        </div>

        {/* {isVip ? (
          
        ) : (
          <div class="max-w-screen-md text-[#c5005a] mx-auto p-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 class="text-xl font-bold mb-4 text-gray-800">
                🎉 尊贵的会员，您的权益如下：
              </h2>
              <ul class="list-disc list-inside text-left">
                <li className="mb-2">
                  🔓 <span className="font-semibold">解锁 100+ 姿势图片</span>
                </li>
                <li className="mb-2">
                  🎢{" "}
                  <span className="font-semibold">
                    开通所有飞行棋/任务关卡主题
                  </span>
                </li>
                <li className="mb-2">
                  ✨{" "}
                  <span className="font-semibold">永久解锁本应用所有功能</span>
                </li>
              </ul>
              <p class="mt-4 font-bold text-blue-500">
                📞 遇到问题？欢迎添加客服微信 oiovdev，我们将竭诚为您服务！
              </p>
            </div>

            <div class="text-sm mt-6">
              提供大家好玩分享空间，共同成长，不露脸不露点，不低俗不越界
            </div>
          </div>
        )} */}
      </div>

      <p class="m-2 text-center font-bold text-[#c5005a]">@18.wr.do</p>
      <Dock />
    </div>
  );
}
