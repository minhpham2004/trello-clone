import React from "react";
import OrgControl from "./_components/org-control";

function OrganisationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

export default OrganisationLayout;
