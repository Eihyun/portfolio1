import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SlideTabs.css";

// Components
import Logo from "./Logo";
import Video from "./Video";
import Photo from "./Photo";
import Art from "./Art";

const TABS = [
  { label: "Logo", component: <Logo /> },
  { label: "Video", component: <Video /> },
  { label: "Photo", component: <Photo /> },
  { label: "Art", component: <Art /> },
];

function SlideTabs() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 1,
  });

  const [activeTab, setActiveTab] = useState("Logo");
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabRefs = useRef({});
  TABS.forEach((tab) => {
    if (!tabRefs.current[tab.label]) {
      tabRefs.current[tab.label] = React.createRef();
    }
  });


    // Function to update the cursor position to the active tab
    const updateActivePosition = () => {
      const activeNode = tabRefs.current[activeTab]?.current;
      if (!activeNode) return;

      const { width } = activeNode.getBoundingClientRect();
      setPosition({
          left: activeNode.offsetLeft,
          width,
          opacity: 1,
      });
  };


    // Keep cursor under active tab when hover ends
    useEffect(() => {
      if (!hoveredTab) {
          updateActivePosition();
      }
  }, [hoveredTab, activeTab]);

  // Recalculate on window resize
  useEffect(() => {
      window.addEventListener("resize", updateActivePosition);
      return () => {
          window.removeEventListener("resize", updateActivePosition);
      };
  }, [activeTab]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="slide-tabs grid">
        <ul
          onMouseLeave={() => setHoveredTab(null)}
          className="slide-tabs-list pretendard"
        >
          {TABS.map((tab) => (
            <Tab
              key={tab.label}
              label={tab.label}
              setPosition={setPosition}
              setHoveredTab={setHoveredTab}
              setActiveTab={setActiveTab}
              isActive={activeTab === tab.label}
              ref={tabRefs.current[tab.label]}
              activeTab={activeTab}
            />
          ))}
          <Cursor position={position} />
        </ul>
      </div>

      <div className="tab-content grid">
        {TABS.find((tab) => tab.label === activeTab)?.component}
        <div className="col-12-md col-4-sm mt-6 mb-6 scroll-btn-container">
          <button className="pretendard scroll-btn"
          onClick={scrollToTop}
          >Back to top</button>
        </div>
      </div>
    </>
  );
}

const Tab = React.forwardRef(
  ({ label, setPosition, setHoveredTab, setActiveTab, activeTab }, ref) => {
    const updatePosition = () => {
      if (!ref.current) return;
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });
    };

    const handleMouseEnter = () => {
      setHoveredTab(label);
      updatePosition();
    };

    const handleMouseLeave = () => {
      setHoveredTab(null);
    };

    const handleClick = () => {
      setActiveTab(label);
      updatePosition();
    };

    return (
      <li
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="slide-tab"
      >
        {label}
      </li>
    );
  }
);

const Cursor = ({ position }) => (
  <motion.li
    animate={position}
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
    className="slide-tab-cursor"
  />
);

export default SlideTabs;
