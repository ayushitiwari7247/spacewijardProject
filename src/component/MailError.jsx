import React from "react";

const MailError = () => {
  return (
    <div className="flex flex-col iteam-center justify-center w-2/4 mx-auto gap-5 ">
      <h2 className="text-white text-4xl font-bold ">Oops</h2>
      <p className="text-primary-white text-[16px] w-[320px]">
        Something went wrong, please try again later.
      </p>

      <button
        type="submit"
        className="w-75 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
};

export default MailError;
