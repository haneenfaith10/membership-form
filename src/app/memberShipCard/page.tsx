"use client";
import React from "react";

const MemberShipCard = ({ data }: any) => {
  console.log(data);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[800px] h-[400px] mx-auto p-6 bg-white rounded-lg shadow-lg flex">
        {/* Left side for details */}
        <div className="flex-1 p-6">
          <div className="text-xl font-bold text-blue-800 flex items-center">
            <span className="mr-2">✈️</span>
            <span>പയ്യാവൂർ പ്രവാസി കൂട്ടായ്മ</span>
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">
            {data?.fullName}
          </div>
          <div className="text-sm text-gray-800 uppercase">{data?.address}</div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              <span className="text-sm font-semibold">{data?.location}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              <span className="text-sm font-semibold">
                REG NO - {data?.regNo}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              <span className="text-sm font-semibold">{data?.address}</span>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center bg-blue-900 rounded-r-lg relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            {data?.profilePicture && (
              <img
                src={URL.createObjectURL(data?.profilePicture[0])}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div className="text-lg font-bold text-white mt-4">Membership ID</div>
          <div className="absolute bottom-4 text-white text-xs">
            PPK - GLOBAL
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipCard;
