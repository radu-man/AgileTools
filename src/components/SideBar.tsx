import { BsGearFill } from "react-icons/bs";
import { FaClipboardList, FaPoo } from "react-icons/fa";
import { GiBrain, GiPokerHand } from "react-icons/gi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-60 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SideBarItem
        icon={<GiPokerHand size="28" />}
        text="Planning Poker"
        destination={"estimation"}
      />
      <SideBarItem
        icon={<FaClipboardList size="32" />}
        text="Retrospective Board"
        destination="retroBoard"
      />
      <SideBarItem
        icon={<GiBrain size="20" />}
        text="Knowledge Map"
        destination="knowledge-map"
      />
      <SideBarItem icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarItem icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarItem = ({
  icon,
  text,
  destination,
}: {
  icon: JSX.Element;
  text?: string;
  destination?: string;
}) => (
  <Link
    to={destination ? `/${destination}` : "#"}
    className="group flex text-center items-center text-blue-500 hover:text-green-500 cursor-pointer"
  >
    <div className="sidebar-icon group">{icon}</div>
    <div className="ml-4">{text}</div>
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
