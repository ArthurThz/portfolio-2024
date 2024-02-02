/* eslint-disable prettier/prettier */
import React from "react";

type CmsIconProps = {
  icon: string;
};

const CmsIcon = ({ icon }: CmsIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};

export default CmsIcon;
