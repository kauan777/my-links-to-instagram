import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomLinkProps } from "../@types/CustomLink";

interface CustomLinkComponentProps {
  link: CustomLinkProps;
}

function CustomLink({ link }: CustomLinkComponentProps) {
  return (
    <Link
      target={"_blank"}
      href={link.linkUrl}
      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-primary"
    >
      <Image src={link.iconUrl} width={32} height={32} alt={link.description} />
      <span
        className="text-primary font-light"
        style={{
          lineHeight: 0,
        }}
      >
        {link.description}
      </span>
    </Link>
  );
}

export default CustomLink;
