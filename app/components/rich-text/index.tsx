/* eslint-disable prettier/prettier */
import React, { ComponentProps } from "react";
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";

type RichTextProps = ComponentProps<typeof CMSRichText>;

const RichText = ({ ...props }: RichTextProps) => {
  return <CMSRichText {...props} />;
};
export default RichText;
