import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCategoryModal } from "../../store/modals/slice";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { Collapse } from "react-collapse";

function CategorySideBar() {
  const { categoryModal } = useSelector((state) => state.modals);
  const [open, setOpen] = useState(categoryModal);
  const dispatcher = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  function closeSidebar() {
    dispatcher(closeCategoryModal());
    document.body.style.overflow = "auto";
  }

  function handleCollapse(index) {
    setSelectedCategory((prev) => (prev === index ? null : index));
  }

  return (
    <Dialog
      open={categoryModal}
      onClose={closeSidebar}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-xs transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto">
                  <div className="flex items-center justify-between bg-main">
                    <DialogTitle className="w-full flex justify-between items-center p-2 px-4 text-xl text-white">
                      Menu
                    </DialogTitle>
                    <div className="flex h-7 items-center">
                      <button
                        type="button"
                        onClick={closeSidebar}
                        className="relative p-2 text-white hover:text-black"
                      >
                        <span className="absolute" />
                        <span className="sr-only">Close panel</span>
                        <Icon icon={"bitcoin-icons:cross-filled"} />
                      </button>
                    </div>
                  </div>
                  {/* Categories */}
                  <div className="space-y-3 p-3 px-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div>
                        <div
                          key={`arr-${index}`}
                          className="flex items-center justify-between group hover:cursor-pointer"
                        >
                          <Link to="#" className="group-hover:text-main">
                            {"Mobiles"}
                          </Link>
                          <button
                            className="bg-gray-200 rounded-full p-1 flex justify-center items-center group-hover:text-main"
                            onClick={() => handleCollapse(index)}
                          >
                            {selectedCategory === index ? (
                              <Icon icon={"ic:baseline-minus"} />
                            ) : (
                              <Icon icon={"ic:sharp-plus"} />
                            )}
                          </button>
                        </div>
                        <Collapse isOpened={selectedCategory === index}>
                          <div className="space-y-1.5 mt-1.5">
                            {Array.from({ length: 4 }).map((_, subIndex) => (
                              <div
                                key={`sub-child-${subIndex}`}
                                className="pl-4"
                              >
                                {`Sub-Child-${subIndex + 1}-${index}`}
                              </div>
                            ))}
                          </div>
                        </Collapse>
                      </div>
                    ))}
                  </div>
                  {/* Categories */}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default CategorySideBar;
