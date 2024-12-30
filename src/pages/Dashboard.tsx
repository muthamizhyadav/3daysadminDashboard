import React from "react";
import SparklineShared from "../shared/sparklin";
import { FaUsers } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { SiGoogleforms } from "react-icons/si";

const Dashboard: React.FC = () => {
  return (
    <div className="h-full w-full  flex">
      <div className="container mx-auto p-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2 ">
              <FaUsers size={50} color="#7c3aed" />
            </h2>{" "}
            <p className="text-gray-600 font-semibold text-[18px]">
              Total Candidate : 456
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2 ">
              <BsFillBuildingsFill size={50} color="#7c3aed" />
            </h2>
            <p className="text-gray-600 font-semibold text-[18px]">
              Total Companies : 456
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">
              <SiGoogleforms size={50} color="#7c3aed" />
            </h2>
            <p className="text-gray-600 font-semibold text-[18px]">Total Job Posts : 456</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">{"Title 4"}</h2>
            <p className="text-gray-600">{"Description for card 4"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
