import { FaPlus, FaArrowRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

import { NewTaskBtn, NewTaskWrapper, NewTaskInput } from "./NewTaskElements";

import { toggleInputType, handleKeyPress } from "../../utils/helpers";
import { postTask } from "../../utils/axios";

export default function NewTask({
  newTask,
  setNewTask,
  inputType,
  setInputType,
  column,
  setInitialData,
}) {
  return (
    <>
      {inputType === "button" ? (
        <NewTaskBtn onClick={() => toggleInputType(inputType, setInputType)}>
          <FaPlus /> Add Item
        </NewTaskBtn>
      ) : (
        <NewTaskWrapper>
          <NewTaskInput
            type="text"
            value={newTask}
            placeholder="Enter name"
            onChange={(e) => setNewTask(e.target.value)}
            // onKeyDown={() =>
            //   postTask(column, newTask, setNewTask, setInitialData)
            // }
          />
          <FaArrowRight
            style={{
              display: "flex",
              marginLeft: "auto",
            }}
            onClick={() =>
              postTask(column, newTask, setNewTask, setInitialData)
            }
          />
          <FaX onClick={() => setInputType("button")} />
        </NewTaskWrapper>
      )}
    </>
  );
}
