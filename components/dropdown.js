import { createPopperLite as createPopper } from "@popperjs/core";
import { useEffect, useRef } from "react";

function Separator() {
  return (
    <div
      className="
        h-0
        my-2
        border border-solid border-t-0 border-blueGray-800
        opacity-25
      "
    ></div>
  );
}

export function Dropdown({ value }) {
  const refElemDE1 = useRef();

  useEffect(() => {
    const listener = (e) =>
      e.target.id !== "drpDropdown" &&
      !refElemDE1.current?.classList.contains("hidden") &&
      refElemDE1.current?.classList.add("hidden");
    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  }, []);

  function openDropdown(event) {
    let element = event.target;
    const popover = createPopper(element, refElemDE1.current, {
      placement: "bottom-start",
    });
    refElemDE1.current.classList.toggle("hidden");
    refElemDE1.current.classList.toggle("block");
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-6/12 md:w-4/12 px-4">
        <div className="relative inline-flex align-middle w-full">
          <div
            className="dark:text-white uppercase outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer select-none"
            type="button"
            id="drpDropdown"
            onClick={(event) => openDropdown(event)}
          >
            Dropdown
            <i className="fas fa-angle-down ml-2"></i>
          </div>
          <div
            className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
            style={{ minWidth: "12rem" }}
            id="dropdown-example-1"
            ref={refElemDE1}
          >
            <a
              href="#"
              className="
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            >
              Action
            </a>
            <a
              href="#"
              className="
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            >
              Another action
            </a>
            <a
              href="#"
              className="
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            >
              Something else here
            </a>
            <Separator />
            <a
              href="#"
              className="
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            >
              Seprated link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
