"use client";

import React, { useEffect, useState } from "react";
import CardModal from "../modal/card-modal";
import ProModal from "../modal/pro-modal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) return null;

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
}

export default ModalProvider;
