"use client"
import {useEffect} from "react";
import {useStore} from "zustand";
import {useSelectedStore} from "@/lib/selectedStore";

export default function DefaultClient() {
    const setIsSelected = useStore(useSelectedStore(), (state) => state.setIsSelected);

    useEffect(() => {
        const contentEl = window.document.getElementById('movable-content');
        if (contentEl) {
            contentEl.style.left = '0vw';
        }
        setIsSelected(false)
    }, []);

  return (
      <div className="col-span-2 order-3 w-full">
          <div className="fixed max-h-content min-h-content h-content overflow-y-scroll w-[66.666vw] md:w-[20vw]"/>
      </div>
  );
}
