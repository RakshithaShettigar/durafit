import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, RatingBar, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LandingpagePage() {
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
              <div className="self-end">
                <Header className="p-[23px] sm:p-5 bg-gray-100_cc" />
                <div className="h-[674px] md:h-auto relative">
                  <Img
                    src="images/img_up_in_the_clouds_1024x1024.png"
                    alt="upinthe_one"
                    className="h-[674px] w-full object-cover"
                  />
                  <Text
                    size="7xl"
                    as="p"
                    className="w-max top-[8%] right-0 left-0 m-auto !text-blue_gray-800 text-center absolute"
                  >
                    Where Comfort Meets Quality
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[70px] md:py-5">
          <div className="flex md:flex-col justify-between items-center gap-5 px-[196px] md:px-5">
            <div className="flex flex-col items-center w-[16%] md:w-full gap-0.5">
              <Img src="images/img_frame_19.svg" alt="image" className="h-[45px]" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Temperature Control
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[9%] md:w-full gap-0.5">
              <Img src="images/img_frame_19_44x64.png" alt="image_one" className="w-[67%] object-cover" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Light weight
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[17%] md:w-full">
              <Img src="images/img_frame_19_blue_gray_400.svg" alt="image_two" className="h-[45px]" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Eco-friendly Materials
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[14%] md:w-full">
              <Img src="images/img_frame_19_44x64.png" alt="image_three" className="w-[45%] object-cover" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Breathable Fabric
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[14%] md:w-full">
              <Img src="images/img_frame_19_blue_gray_400_44x64.svg" alt="image_four" className="h-[44px]" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Easy Maintenance
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center h-[845px] md:h-auto pl-14 pr-[130px] gap-[30px] py-[130px] md:p-5 bg-[url(/public/images/img_section_9.png)] bg-cover bg-no-repeat">
          <div className="flex justify-end w-[43%] md:w-full mt-[149px]">
            <div className="flex flex-col w-full gap-2.5">
              <Text size="6xl" as="p" className="!text-blue_gray-100 leading-[60px]">
                <>
                  Elegance in Every
                  <br />
                  Thread of Black Edition
                </>
              </Text>
              <Text as="p" className="w-[98%] md:w-full !text-blue_gray-100">
                <>
                  Experience the epitome of comfort and style with our exclusive <br />
                  Black Edition collection. Crafted with precision and sophistication,
                  <br />
                  these premium mattresses redefine your sleep experience
                </>
              </Text>
            </div>
          </div>
          <Button shape="round" className="mb-[149px] mr-[344px] md:mr-0 sm:px-5 font-medium min-w-[191px]">
            Explore more
          </Button>
        </div>
        <div className="flex flex-col items-start justify-center h-[845px] md:h-auto pl-[130px] pr-14 gap-[30px] py-[130px] md:p-5 bg-[url(/public/images/img_section_5.png)] bg-cover bg-no-repeat">
          <div className="flex w-[34%] md:w-full mt-[137px]">
            <div className="flex flex-col w-full gap-2.5">
              <Text size="6xl" as="p" className="w-[93%] md:w-full !text-blue_gray-800 leading-[60px]">
                <>
                  Selling Sleep,
                  <br />
                  not just Mattress
                </>
              </Text>
              <Text as="p" className="!text-blue_gray-800">
                <>
                  Discover a world of tranquility and restful nights with <br />
                  our exceptional mattress collection. Engineered for <br />
                  supreme comfort, our mattresses ensure you wake <br />
                  up rejuvenated every morning
                </>
              </Text>
            </div>
          </div>
          <Button shape="round" className="mb-[137px] sm:px-5 font-medium min-w-[191px]">
            Explore more
          </Button>
        </div>
        <div className="flex justify-end items-center h-[845px] md:h-auto pl-14 pr-[130px] py-[130px] md:p-5 rotate-[180deg] bg-[url(/public/images/img_section_4.png)] bg-cover bg-no-repeat">
          <div className="flex flex-col items-start w-[39%] md:w-full gap-[30px] my-[149px]">
            <div className="self-stretch">
              <div className="flex flex-col gap-2.5">
                <Text size="6xl" as="p" className="w-[66%] md:w-full !text-blue_gray-800 leading-[60px]">
                  <>
                    Pillows that <br />
                    Hug You Back
                  </>
                </Text>
                <Text as="p" className="!text-blue_gray-800">
                  <>
                    Experience the softest embrace for your head and neck with <br />
                    our pillow collection. Designed for ultimate relaxation, our <br />
                    pillow provide the perfect support for a heavenly night&#39;s sleep
                  </>
                </Text>
              </div>
            </div>
            <Button shape="round" className="sm:px-5 font-medium min-w-[191px]">
              Explore more
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center h-[845px] md:h-auto pl-[130px] pr-14 gap-[30px] py-[130px] md:p-5 bg-[url(/public/images/img_section_6.png)] bg-cover bg-no-repeat">
          <div className="flex w-[42%] md:w-full mt-[149px]">
            <div className="flex flex-col w-full gap-2.5">
              <Text size="6xl" as="p" className="w-[95%] md:w-full !text-blue_gray-800 leading-[60px]">
                <>
                  Sofas and Chairs, <br />
                  Reimagined Comfort
                </>
              </Text>
              <Text as="p" className="!text-blue_gray-800">
                <>
                  Upgrade your lounging experience with our furniture cushionings <br />
                  collection. Transform your sofas and chairs into cozy havens of <br />
                  comfort, enhancing your relaxation time at home
                </>
              </Text>
            </div>
          </div>
          <Button shape="round" className="mb-[149px] sm:px-5 font-medium min-w-[191px]">
            Explore more
          </Button>
        </div>
        <div className="flex md:flex-col justify-between gap-5 p-[70px] md:p-5 bg-blue_gray-800">
          <div className="flex md:flex-col w-[76%] md:w-full ml-[273px] gap-[70px] md:ml-0">
            <div className="flex flex-col items-center flex-1">
              <Img src="images/img_frame_19_white_a700.svg" alt="high_quality" className="h-[45px]" />
              <div className="flex flex-col items-center justify-center">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-white-A700_a2 !font-medium">
                    High Quality
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-blue_gray-100_a2">
                    crafted from top materials
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Img src="images/img_frame_19_white_a700_45x65.svg" alt="image" className="h-[45px]" />
              <div className="flex flex-col items-center gap-0.5">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-white-A700_a2 !font-medium">
                    Warranty Protection
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-blue_gray-100_a2">
                    Over 2 years
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center w-[19%] md:w-full">
              <Img src="images/img_frame_19_45x65.svg" alt="image" className="h-[45px]" />
              <div className="flex flex-col">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-white-A700_a2 !font-medium">
                    Free Shipping
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-blue_gray-100_a2 text-right">
                    Order over ₹10,000
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[15%] md:w-full mr-[273px] md:mr-0">
            <Img src="images/img_frame_19_1.svg" alt="image_five" className="h-[45px]" />
            <a href="#" className="opacity-0.8">
              <Text as="p" className="!text-white-A700_a2 !font-medium">
                Made in India
              </Text>
            </a>
            <a href="Homebrand" target="_blank" rel="noreferrer" className="my-0.5 opacity-0.8">
              <Text size="xs" as="p" className="!text-blue_gray-100_a2">
                Homebrand
              </Text>
            </a>
          </div>
        </div>
        <div className="flex md:flex-col pl-[78px] pr-14 gap-[100px] py-[78px] md:p-5">
          <div className="flex sm:flex-col justify-center items-start w-[44%] md:w-full mb-[57px] ml-[39px] gap-[30px] md:mb-0 md:ml-0">
            <Heading as="h1" className="mb-6 tracking-[-1.00px]">
              “
            </Heading>
            <div className="flex flex-col sm:self-stretch gap-5 flex-1">
              <div className="flex items-center w-[44%] md:w-full gap-5">
                <div className="self-start h-[50px] w-[50px] bg-blue_gray-100 rounded-[25px]" />
                <div className="flex flex-col items-start gap-[7px] flex-1">
                  <Heading size="xs" as="h2" className="!text-gray-900 tracking-[-1.00px]">
                    Anonymous
                  </Heading>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#d9d9d9"
                    activeColor="#fdd20d"
                    size={15}
                    className="flex justify-between rounded-[1px]"
                  />
                </div>
              </div>
              <div>
                <Text as="p" className="!text-indigo-400 leading-[22px]">
                  Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem
                  ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem Lorem ipsum lorem ipsum Lorem ipsum lorem
                  ipsum Lorem ipsum lorem{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col justify-center items-start w-[42%] md:w-full gap-[30px]">
            <div className="flex flex-col sm:self-stretch gap-px flex-1">
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center w-[44%] md:w-full gap-5">
                  <div className="self-start h-[50px] w-[50px] bg-blue_gray-100 rounded-[25px]" />
                  <div className="flex flex-col items-start gap-[7px] flex-1">
                    <Heading size="xs" as="h2" className="!text-gray-900 tracking-[-1.00px]">
                      Anonymous
                    </Heading>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#fdd20d"
                      size={15}
                      className="flex justify-between rounded-[1px]"
                    />
                  </div>
                </div>
                <div>
                  <Text as="p" className="!text-indigo-400 leading-[22px]">
                    Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                    Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem Lorem ipsum lorem ipsum Lorem
                    ipsum lorem ipsum Lorem ipsum lorem{" "}
                  </Text>
                </div>
              </div>
            </div>
            <Heading as="h3" className="mb-6 tracking-[-1.00px]">
              ”
            </Heading>
          </div>
        </div>
        <Footer className="px-14 py-[69px] md:p-5 bg-blue-50" />
      </div>
    </>
  );
}
