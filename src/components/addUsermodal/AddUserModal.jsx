import React, { useState } from "react";

const AddUserModal = ({ setShowUserModel }) => {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.email.value;
    const password = form.password.value;
    const photo = selectedImage;
    // name, email, mobile, photo, password;
    console.log(name, email, mobile, password, photo);
  };

  return (
    <div>
      <div className="flex justify-end right-0 mt-5 mb-4 mr-12">
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="relative mb-10">
              <div className=" modal-action absolute top-0 right-0 ">
                <button
                  className="btn btn-circle bg-red-500 border-none"
                  onClick={() => setShowUserModel(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <h2 className="font-bold bg-clip-text font-sans text-2xl text-center mb-8 ">
              Add User
            </h2>

            <form className="w-full max-w-lg" onSubmit={handleAddUser}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Full Name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-mobile"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-mobile"
                    type="number"
                    name="phone"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <label for="photo-upload" class="block font-medium text-gray-700">
                Profile Picture
              </label>
              <div class="mt-1  px-6 pt-5 pb-6 border-gray-300  rounded-md">
                <label class="block">
                  <span class="sr-only">Choose File</span>
                  <input
                    onChange={imageChange}
                    type="file"
                    name="profilePicture"
                    class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
                  />
                </label>
              </div>

              <div class="mt-3 text-center">
                <button
                  type="submit"
                  class="mx-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="modal-action"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
