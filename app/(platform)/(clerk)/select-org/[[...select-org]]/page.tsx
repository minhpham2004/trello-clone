import { OrganizationList } from "@clerk/nextjs";

import React from "react";

function CreateOrganisationList() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}

export default CreateOrganisationList;
