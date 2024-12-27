"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { Fragment, PropsWithChildren, useEffect } from "react";

export default function AOSProvider({ children } : PropsWithChildren) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
    });
  }, []);

  return <Fragment>{children}</Fragment>;
};
