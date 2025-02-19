// component.jsx
import { useSignal } from "@preact/signals"; // 或者其他 Signals 库

function ACtiveInput() {
  const inputValue = useSignal("");

  const handleInputChange = (event) => {
    inputValue.value = event.target.value;
  };

  const handleActivateClick = () => {
    if (inputValue.value) {
      window.location.href = `/${inputValue.value}`;
    }
  };

  return (
    <div className="flex items-center gap-0">
      <input
        type="text"
        id="my-input"
        placeholder="请输入激活码"
        onInput={handleInputChange}
        className="border-2 text-sm border-[#c500595f] rounded-l-lg px-3 py-2 flex-grow"
      />
      <button
        id="my-button"
        onClick={handleActivateClick}
        className="bg-green-500 text-sm text-white rounded-r-lg px-4 py-2.5 cursor-pointer">
        激活
      </button>
    </div>
  );
}

export default ACtiveInput;
