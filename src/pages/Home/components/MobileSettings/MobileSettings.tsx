import classNames from "classnames";
import { useState, useRef } from "react";
import { AiOutlineClear } from "react-icons/ai";

import Settings from "../Settings/Settings";
import style from "./MobileSettings.module.css";
import { useClickOutside } from "@/hooks";
import { useChatContext } from "../ChatProvider/ChatProvider";

export default function MobileSettings() {
  const settingsRef = useRef<HTMLElement>(null);
  const [openSettings, setOpenSettings] = useState(false);
  const { chatgptStatus, resetMessages } = useChatContext();

  useClickOutside(settingsRef, () => setOpenSettings(false));

  return (
    <section ref={settingsRef} aria-label='mobile setting' className={style.window}>
      <button
        type='button'
        onClick={resetMessages}
        aria-label='clear history'
        disabled={chatgptStatus === "thinking"}
        className={style.btn}
      >
        <AiOutlineClear size={20} />
      </button>

      <button
        type='button'
        onClick={() => setOpenSettings(!openSettings)}
        className={classNames(style.hamburger, openSettings ? style.active : "")}
        aria-label='mobile nav button to toggle menu'
      >
        <div></div>
        <div></div>
      </button>

      <div className={classNames(style.settings, openSettings ? style.active : "")}>
        <Settings />
      </div>
    </section>
  );
}
