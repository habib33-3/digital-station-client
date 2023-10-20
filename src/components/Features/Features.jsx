import { Code, Copy, Heart } from "lucide-react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FcCustomerSupport } from "react-icons/fc";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Features = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 py-5 card lg:px-8 bg-amber-100">
      <h2 className="mt-6 text-3xl font-bold text-center mb-2 text-black">
        We Offer
      </h2>

      <hr />
      <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-start">
          <CiDeliveryTruck className="text-7xl text-gray-700" />
          <div className="ml-5">
            <h3 className="text-xl font-semibold text-black">Quick Delivery</h3>
            <p className="mt-3 text-base text-gray-600">
              Get it Today, Enjoy it Today - Same Day Delivery.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <FcCustomerSupport className="text-7xl text-gray-700" />
          <div className="ml-5">
            <h3 className="text-xl font-semibold text-black">
              Extended Support
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Round-the-Clock Solutions, 8 am to 8 pm
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <HiOutlineDesktopComputer className="text-7xl text-gray-700" />
          <div className="ml-5">
            <h3 className="text-xl font-semibold text-black">
              Expert Installations
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Seamless Installations by Our Expert Team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
