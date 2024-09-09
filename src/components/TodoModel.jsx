import { Tooltip } from "antd";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "antd";
import {
  CheckCircleOutlined,
  DeleteOutlined,
 
  SyncOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { DeletTodo, Donetodo } from "../JS/Actions";
import EditTask from "./EditTask";

const TodoModel = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="d-flex justify-content-center ">
        <div className="my-3">
          <Accordion style={{ width: "500px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className=" align-items-center text-uppercase h-5">
                  <p>{todo.task}</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p>{todo.description}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="d-flex  align-items-center gap-1 ml-2">
          <>
            <Tooltip title="state">
              <Button
                shape="circle"
           
                onClick={() => {
                  dispatch(Donetodo(todo.id));
                }}
                icon={
                  todo.isDone ? <CheckCircleOutlined /> : <SyncOutlined spin />
                }
              />
            </Tooltip>
          </>

        {/* //////////////*********calling edit task component functions */}
          <>
          <EditTask todo={todo}/>
        
          </>
          <>
            <Tooltip title="Delete">
              <Button shape="circle" onClick={()=> dispatch(DeletTodo(todo.id))} icon={<DeleteOutlined />} />
            </Tooltip>
          </>
        </div>
      </div>
    </div>
  );
};

export default TodoModel;
