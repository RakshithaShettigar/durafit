import React from "react";
import { Button, Text, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1180px]">
        <Img src="images/img_image_55.png" alt="imagefiftyfive" className="w-[15%] md:w-full object-cover" />
        <div className="flex md:flex-col justify-between items-center w-[60%] md:w-full gap-5">
          <ul className="flex gap-10 flex-wrap">
            <li>
              <a href="#" className="self-start opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Black Edition
                </Text>
              </a>
            </li>
            <li>
              <a href="Mattress" target="_blank" rel="noreferrer" className="self-start opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Mattress
                </Text>
              </a>
            </li>
            <li>
              <a href="Pillows" target="_blank" rel="noreferrer" className="self-start opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Pillows
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="self-end opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Furniture Cushioning
                </Text>
              </a>
            </li>
          </ul>
          <Button
            size="xs"
            variant="outline"
            shape="round"
            color="deep_orange_300_deep_orange_400_01"
            className="sm:px-5 font-medium min-w-[149px]"
          >
            Contact us
          </Button>
        </div>
      </div>
    </header>
  );
}
