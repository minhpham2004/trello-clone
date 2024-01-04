"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

function OrgControl() {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organisationId as string,
    });
  }, [setActive, params.organisationId]);
  return <div>OrgControl</div>;
}

export default OrgControl;
