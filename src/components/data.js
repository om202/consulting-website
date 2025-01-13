import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/about_us.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "About Us?",
  desc: "Nextly is a fast-growing global community of highly skilled information technology professionals who provide vital and varied IT consulting, development, system enhancement and support services. We integrate our clients' key considerations and objectives, using a proprietary approach we call S3RSM.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Our Mission",
      desc: "Our mission is to add value to client operations with innovative, simplified IT products and servicesthat improve employee productivity.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Our Vision",
      desc: "Our vision is to empower clients with intellectual property through a transferable process that is digitized and mobilized.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Nextly Values",
      desc: "Our core values includeexceeding client expectations with sustained quality, integrity and reliability, leading to relationships built on trust that has been earned.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Services",
  desc: "Our services include simplified innovative technology solutions, staffing and training solutions to complement in-house skills and capabilities, and IT services designed with real-world insight into what works best in IT.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "IT Services",
      desc: "Clients require creating and maintaining customized proprietary applications to streamline operations. At NICInfotek, our teams use our 4D Software Development Methodology.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Staffing Solutions",
      desc: "We offer vetted, motivated, competitive people on a contract basis, contract-to-hire, or direct hire. Our preparation cuts your overhead and maximizes your ROI.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Engineering Services",
      desc: "NIC provides engineering & technical solutions focused on understanding your specific requirements. We then develop strategies to satisfy your needs and plans.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
