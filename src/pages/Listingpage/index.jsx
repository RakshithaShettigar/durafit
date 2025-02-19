import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function ListingpagePage() {
  return (
    <>
      <Helmet>
        <title>durafit</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div>
          <div>
            <div>
              <Header className="p-[23px] sm:p-5 bg-gray-100_cc" />
              <Img
                src="images/img_up_in_the_clouds_1024x1024_703x1440.png"
                alt="upinthe_one"
                className="h-[703px] w-full md:h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[15px] p-2.5">
          <Text
            size="6xl"
            as="p"
            className="w-[64%] md:w-full mt-[70px] ml-[190px] md:ml-0 !text-blue_gray-800 leading-[60px]"
          >
            <>
              Elegance in Every
              <br />
              Thread of Black Edition
            </>
          </Text>
          <Text as="p" className="w-[64%] md:w-full ml-[190px] md:ml-0 !text-blue_gray-800">
            Experience the epitome of sophistication and refinement with our exclusive collection. We believe that your
            sleep environment should reflect your unique taste. Our Black Edition is meticulously crafted to provide you
            with the ultimate in luxury, comfort and style. Each mattress in this exquisite collection is a true work of
            art, designed to seamlessly blend aesthetics and functionality.
          </Text>
        </div>
        <div className="justify-center w-full mt-[50px] gap-[50px] grid-cols-[repeat(auto-fill,_minmax(504px_,_1fr))] mx-auto md:p-5 grid max-w-[1058px]">
          <div className="flex w-full bg-white-A700 shadow-sm rounded-[5px]">
            <Img
              src="images/img_orthopeadic_mat.png"
              alt="orthopeadicmat"
              className="h-[465px] w-full md:h-auto object-cover rounded-[5px]"
            />
          </div>
          <div className="flex justify-end w-full bg-white-A700 shadow-sm rounded-[5px]">
            <Img
              src="images/img_orthopeadic_mat_465x504.png"
              alt="orthopeadicmat"
              className="h-[465px] w-full md:h-auto object-cover rounded-[5px]"
            />
          </div>
          <div className="flex w-full bg-white-A700 shadow-sm rounded-[5px]">
            <Img
              src="images/img_orthopeadic_mat_1.png"
              alt="orthopeadicmat"
              className="h-[465px] w-full md:h-auto object-cover rounded-[5px]"
            />
          </div>
          <div className="flex justify-end w-full bg-white-A700 shadow-sm rounded-[5px]">
            <Img
              src="images/img_orthopeadic_mat_2.png"
              alt="orthopeadicmat"
              className="h-[465px] w-full md:h-auto object-cover rounded-[5px]"
            />
          </div>
        </div>
        <div className="mt-[50px] px-[130px] md:px-5">
          <div className="flex flex-col items-center w-full gap-[31px] py-[78px] mx-auto md:p-5 md:py-5 bg-blue_gray-800 max-w-[1180px] rounded-[5px]">
            <div className="flex self-stretch justify-center px-[100px] md:px-5">
              <div className="flex">
                <Text size="6xl" as="p" className="!text-deep_orange-400 capitalize !font-medium">
                  Why Choose Durafit Black Edition?
                </Text>
              </div>
            </div>
            <div className="w-[83%] md:w-full mb-[43px]">
              <div>
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex justify-center w-[63%] md:w-full">
                    <div className="w-full">
                      <div className="flex flex-col gap-1">
                        <Text size="3xl" as="p" className="!text-blue_gray-100 leading-[44px]">
                          Ageless Orthopedic Support for good posture control
                        </Text>
                        <Text as="p" className="!text-gray-100 !font-light">
                          Experience unparalleled support and comfort with our mattresses, designed to provide superior
                          orthopedic backing and posture control for all ages. Wake up refreshed and pain-free, every
                          day
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_fcf037cde48a756f_upscale.png"
                    alt="fcf037cde48a756"
                    className="w-[311px] md:w-full object-cover rounded-[5px]"
                  />
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-center gap-5">
                <Img
                  src="images/img_fcf037cde48a756f_upscale_312x391.png"
                  alt="fcf037cde48a756"
                  className="w-[40%] md:w-full object-cover rounded-[5px]"
                />
                <div className="flex justify-center w-[55%] md:w-full">
                  <div className="w-full">
                    <div className="flex flex-col gap-2.5">
                      <Text size="3xl" as="p" className="!text-blue_gray-100 leading-[44px]">
                        Sustainable and Hypoallergenic Fabric
                      </Text>
                      <Text as="p" className="!text-gray-100 !font-light">
                        Sustainable and hypoallergenic fabrics combine eco-friendliness with year-round comfort. They
                        offer breathability and allergy relief, ensuring a cool, airy feel while being gentle on both
                        skin and the environment.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-center gap-5">
                <div className="flex justify-center w-[52%] md:w-full">
                  <div className="w-full">
                    <div className="flex flex-col gap-2.5">
                      <Text size="3xl" as="p" className="!text-blue_gray-100 leading-[44px]">
                        Special Pressure Relief Technology Mattress
                      </Text>
                      <Text as="p" className="!text-gray-100 !font-light">
                        Experience unparalleled comfort with our cutting-edge mattress, designed to distribute weight
                        evenly and alleviate pressure points for a restful sleep.
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_fcf037cde48a756f_upscale_278x422.png"
                  alt="fcf037cde48a756"
                  className="w-[43%] md:w-full object-cover rounded-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-14 py-[79px] md:p-5 bg-gray-50">
          <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1170px]">
            <Text
              size="6xl"
              as="p"
              className="w-[41%] md:w-full !text-blue_gray-800 tracking-[-1.00px] !font-medium leading-[60px]"
            >
              Frequently asked questions
            </Text>
            <Accordion preExpanded={[0]} className="flex flex-col w-[49%] md:w-full gap-[30px]">
              {[...Array(4)].map((_, i) => (
                <AccordionItem uuid={i} key={`expandablelistw${i}`}>
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="border-indigo-400 border-b-[0.5px] border-solid flex-1">
                              <div className="flex justify-between items-center gap-5 py-1">
                                <Text size="xl" as="p" className="self-start !text-blue_gray-800 tracking-[-0.50px]">
                                  What is Black Edition?
                                </Text>
                              </div>
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center h-[400px] md:h-auto pl-14 pr-[98px] gap-[30px] py-[98px] md:p-5 bg-[url(/public/images/img_frame_63.png)] bg-cover bg-no-repeat">
          <div className="flex justify-end w-[29%] md:w-full mr-8 md:mr-0">
            <div className="w-full">
              <Text size="6xl" as="p" className="!text-blue_gray-400 text-right !font-medium leading-[60px]">
                <>
                  Join the Durafit
                  <br />
                  Club today!
                </>
              </Text>
            </div>
          </div>
          <Button shape="round" className="mr-8 md:mr-0 sm:px-5 font-medium min-w-[191px]">
            Explore more
          </Button>
        </div>
        <Footer className="px-14 py-[69px] md:p-5 bg-blue-50" />
      </div>
    </>
  );
}
