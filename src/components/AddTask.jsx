import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button, Tooltip } from "antd";
import {
  CheckCircleOutlined,
  PlusCircleOutlined,
  PlusSquareOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { AddTodo } from "../JS/Actions";
const { TextArea } = Input;

const AddTask = () => {
  const [open, setOpen] = useState(false);

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center   ">
      <div className="w-[610px]">
        <section>
          <Tooltip title="Add Task">
            <Button
              shape="Add Task"
              onClick={() => setOpen(true)}
              icon={<PlusSquareOutlined />}
            />
          </Tooltip>{" "}
        </section>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 "
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <PlusCircleOutlined />
                  </div>
                  <div className="mt-3 text-center sm:ml-2 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900  -translate-x-44
                         -translate-y-2 "
                    >
                      Add Task
                    </DialogTitle>
                    <div className="my-2  space-y-3 -translate-x-16 ">
                      <Input
                        placeholder={"New Task"}
                        allowClear
                        onChange={(e) => {
                          setTask(e.target.value);
                        }}
                        required
                      />

                      <TextArea
                        placeholder={"Add Descrition"}
                        allowClear
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        required
                      />
                      <div className="-translate-x-[152px]">
                        <Tooltip title="state">
                          <Button
                            size="large"
                            shape="circle"
                            onClick={() => {
                              setIsDone(!isDone);
                            }}
                            icon={
                              isDone ? (
                                <CheckCircleOutlined />
                              ) : (
                                <SyncOutlined spin />
                              )
                            }
                          />
                          <label className="ml-2 text-base font-semibold leading-6 text-gray-900 ">
                            {" "}
                            {isDone ? "Done" : "Not Yet"}
                          </label>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
                <button
                  type="button"
                  onClick={() => {
                    if (task !== "" && description !== "" && isDone !== "") {
                      dispatch(
                        AddTodo({
                          id: Math.random(),
                          task,
                          description,
                          isDone,
                        })
                      );
                      setOpen(false);
                    } else
                      alert("Please verify that all filds are fulfilled  ");
                  }}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-green-400 px-3 ml-5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-700 sm:mt-0 sm:w-auto"
                >
                  Save
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddTask;
