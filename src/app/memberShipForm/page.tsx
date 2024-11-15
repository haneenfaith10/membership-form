"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  fullName: string;
  location: string;
  regNo: string;
  address: string;
  profilePicture: FileList;
}
interface MemberShipFormProps {
  onSubmit: (data: FormData) => void;
}

const MemberShipForm: React.FC<MemberShipFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black bg-center">
      <div className="max-w-lg w-full bg-slate-50 shadow-lg rounded-lg p-8 lg:p-8">
        <h1 className="text-2xl font-bold text-black mb-6 text-center">
          MEMBERSHIP FORM
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              placeholder="Enter your full name"
              className={`mt-1 block w-full px-4 py-3 rounded-md bg-slate-100 text-[#b5b3dc] border shadow-md focus:outline-none ${
                errors.fullName ? "border-red-400" : "border-none"
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Location (Country)
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              placeholder="Enter your country"
              className={`mt-1 block w-full px-4 py-3 rounded-md bg-slate-100 text-[#b5b3dc] border shadow-md focus:outline-none ${
                errors.location ? "border-red-400" : "border-none"
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Registration Number
            </label>
            <input
              type="text"
              {...register("regNo", { required: true })}
              placeholder="Enter your registration number"
              className={`mt-1 block w-full px-4 py-3 rounded-md bg-slate-100 text-[#b5b3dc] border shadow-md focus:outline-none ${
                errors.regNo ? "border-red-400" : "border-none"
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Address
            </label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Enter your address"
              className={`mt-1 block w-full px-4 py-3 rounded-md bg-slate-100 text-[#b5b3dc] border shadow-md focus:outline-none ${
                errors.address ? "border-red-400" : "border-none"
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Upload Profile Picture
            </label>
            <input
              type="file"
              {...register("profilePicture", { required: true })}
              className={`mt-1 block w-full px-4 py-3 rounded-md bg-slate-100 text-[#b5b3dc] border shadow-md focus:outline-none ${
                errors.profilePicture ? "border-red-400" : "border-none"
              }`}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 transition-all duration-500 bg-black text-white font-bold rounded-lg shadow-md hover:bg-[#6b5ce1] focus:outline-none focus:ring-1"
            >
              Submit
            </button>
            <button>
              <Link href={"/memberShipCard"}>click</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberShipForm;
