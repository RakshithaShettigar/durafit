import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, TextArea, Input } from "../../components";
import Header from "../../components/Header";

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>durafit</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex flex-col pb-[100px] gap-[91px] md:gap-[68px] md:pb-5 sm:gap-[45px] bg-white-A700">
          <Header className="p-[23px] sm:p-5 bg-gray-100_cc" />
          <div className="flex flex-col items-center w-full gap-[30px] mx-auto md:p-5 max-w-[1180px]">
            <div className="self-stretch px-60 md:px-5">
              <div className="flex flex-col items-center gap-[5px]">
                <Text size="6xl" as="p" className="!text-blue_gray-900 text-center !font-normal">
                  Get in Touch With Us
                </Text>
                <div className="self-stretch">
                  <Text size="xl" as="p" className="!text-blue_gray-400 tracking-[0.18px] text-center leading-[150%]">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff
                    Always Be There To Help You Out. Do Not Hesitate!
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-start w-[75%] md:w-full pb-[50px] pr-[50px] gap-5 md:pb-5 md:pr-5">
              <div className="flex flex-col justify-center w-[30%] md:w-full gap-[39px] p-5">
                <div className="flex flex-col mt-[30px] gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <Img src="images/img_vector.svg" alt="vector_one" className="h-[22px] w-[22px]" />
                    <Text size="2xl" as="p" className="!text-black-900">
                      Contact on
                    </Text>
                  </div>
                  <Text as="p" className="!text-black-900">
                    <>
                      +91 8949270403
                      <br />
                      durafitindia@gmail.com
                    </>
                  </Text>
                </div>
                <div className="flex flex-col w-[79%] md:w-full gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <Img
                      src="images/img_vector_black_900.svg"
                      alt="vector_three"
                      className="self-start h-[23px] w-[23px]"
                    />
                    <Text size="2xl" as="p" className="self-end !text-black-900">
                      Working time
                    </Text>
                  </div>
                  <Text as="p" className="!text-black-900">
                    <>
                      Mon-Fri: 9:00 - 22:00
                      <br />
                      Sat-Sun: 9:00 - 21:00
                    </>
                  </Text>
                </div>
                <div className="flex mb-[30px]">
                  <div className="flex items-center gap-2.5">
                    <Img src="images/img_vector_black_900_27x22.svg" alt="vector_five" className="h-[27px]" />
                    <Text size="2xl" as="p" className="!text-black-900">
                      Follow Us on
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-[60%] md:w-full mt-[50px] gap-[34px]">
                <div className="flex flex-col self-stretch items-start gap-[9px]">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Your name
                    </Text>
                  </div>
                  <Input
                    shape="round"
                    type="text"
                    name="name"
                    placeholder={`Enter your full name`}
                    className="sm:px-5"
                  />
                </div>
                <div className="flex flex-col self-stretch items-start gap-2.5">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Email address
                    </Text>
                  </div>
                  <Input shape="round" name="email" placeholder={`Eg: sample@sample.com`} className="sm:px-5" />
                </div>
                <div className="flex flex-col self-stretch items-start gap-[9px]">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Contact number
                    </Text>
                  </div>
                  <Input shape="round" name="eg00_0000000000" placeholder={`Eg: +00 0000000000`} className="sm:px-5" />
                </div>
                <div className="flex flex-col self-stretch items-start gap-2">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Subject
                    </Text>
                  </div>
                  <Input shape="round" name="frame183" placeholder={`Enter your Enquiry subject`} className="sm:px-5" />
                </div>
                <div className="flex flex-col self-stretch items-start gap-[7px]">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Message
                    </Text>
                  </div>
                  <TextArea
                    shape="round"
                    name="frame183_one"
                    placeholder={`Enter your Enquiry here..`}
                    className="self-stretch sm:p-5 text-gray-500"
                  />
                </div>
                <Button shape="round" className="sm:px-5 !text-indigo-900 font-medium min-w-[133px]">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-between mt-[70px] gap-5 px-[345px] md:px-5">
          <div className="flex md:flex-row sm:flex-col w-[76%] md:w-full gap-[70px]">
            <div className="flex flex-col items-center flex-1">
              <Img src="images/img_frame_19_gray_900_01.svg" alt="high_quality" className="h-[45px]" />
              <div className="flex flex-col items-center justify-center">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    High Quality
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-indigo-400_a2">
                    crafted from top materials
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Img src="images/img_frame_19_gray_900_01_45x65.svg" alt="image" className="h-[45px]" />
              <div className="flex flex-col items-center gap-0.5">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Warranty Protection
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-indigo-400_a2">
                    Over 2 years
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center w-[19%] sm:w-full">
              <Img src="images/img_frame_19_2.svg" alt="image" className="h-[45px]" />
              <div className="flex flex-col">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Free Shipping
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-indigo-400_a2 text-right">
                    Order over ₹10,000
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[14%] md:w-full">
            <Img src="images/img_frame_19_3.svg" alt="image" className="h-[45px]" />
            <a href="#" className="opacity-0.8">
              <Text as="p" className="!text-blue_gray-800_a2">
                Made in India
              </Text>
            </a>
            <a href="Homebrand" target="_blank" rel="noreferrer" className="mt-0.5 opacity-0.8">
              <Text size="xs" as="p" className="!text-indigo-400_a2">
                Homebrand
              </Text>
            </a>
          </div>
        </div>
        <div className="h-[419px] md:h-auto mt-[70px] bg-blue_gray-900 relative rounded-[5px]">
          <Img src="images/img_photo.png" alt="photo_one" className="h-[419px] w-full object-cover rounded-[5px]" />
          <Button size="lg" className="left-0 bottom-0 right-0 top-0 m-auto md:p-5 shadow-xs absolute rounded-[5px]">
            <Img src="images/img_vector_deep_orange_a100.svg" />
          </Button>
        </div>
        <footer className="px-14 py-[69px] md:p-5 bg-blue-50">
          <div className="flex flex-col w-full gap-[51px] mx-auto sm:gap-[25px] max-w-[1180px]">
            <div className="flex flex-col gap-5">
              <div className="flex sm:flex-col justify-between items-center gap-5">
                <Img src="images/img_asset_2_1.png" alt="asset2one_one" className="w-[14%] sm:w-full object-cover" />
                <div className="flex">
                  <div className="flex gap-5 flex-wrap">
                    <Text size="md" as="p" className="self-start !text-gray-900 text-right">
                      Send us email at:
                    </Text>
                    <a href="example@example.com" target="_blank" rel="noreferrer" className="self-end">
                      <Text size="md" as="p" className="!text-deep_orange-400_01 text-center !font-medium">
                        example@example.com
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-[62%] md:w-full">
                <div className="flex sm:flex-col justify-between items-center w-full gap-5">
                  <div className="flex flex-col items-start w-[47%] sm:w-full gap-[13px]">
                    <Text size="md" as="p" className="opacity-0.6 leading-6">
                      <>
                        DURAFIT MATTRESS INDIA PRIVATE LIMITED
                        <br />
                        14A Shiv Shankar Colony,
                        <br />
                        Ghatgate Jaipur, Rajasthan - 302004
                        <br />
                        GSTIN Number : 08AAFCD4117M1ZJ
                      </>
                    </Text>
                    <Text size="md" as="p" className="opacity-0.6">
                      +91 0000000000
                    </Text>
                  </div>
                  <div className="flex flex-col self-start">
                    <ul className="flex flex-col self-start items-start gap-3.5">
                      <li>
                        <a href="#" className="opacity-0.6">
                          <Text size="md" as="p">
                            Home
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="opacity-0.6">
                          <Text size="md" as="p">
                            About us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="opacity-0.6">
                          <Text size="md" as="p">
                            Contact
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <ul className="flex flex-col self-start items-start gap-[15px]">
                      <li>
                        <a href="#" className="opacity-0.6">
                          <Text size="md" as="p">
                            Black Edition
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="opacity-0.6">
                          <Text size="md" as="p">
                            Mattress
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="opacity-0.6">
                          <Text size="md" as="p">
                            Pillow
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="opacity-0.6">
                          <Text size="md" as="p">
                            Furniture cushion
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col justify-between items-center gap-5">
              <Text size="md" as="p" className="self-end opacity-0.6">
                Copyright @ sample 2023. All rights reserved.
              </Text>
              <div className="flex justify-between w-[22%] sm:w-full gap-5 flex-wrap">
                <a href="#" className="self-start opacity-0.6">
                  <Text size="md" as="p" className="text-right">
                    Terms and service
                  </Text>
                </a>
                <a href="#" className="self-end opacity-0.6">
                  <Text size="md" as="p" className="text-right">
                    Privacy Policy
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
