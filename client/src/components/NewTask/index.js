import { FaPlus, FaArrowRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

import { NewTaskBtn, NewTaskWrapper, NewTaskInput } from "./NewTaskElements";

import { toggleInputType } from "../../utils/helpers";

export default function NewTask({
  newTask,
  setNewTask,
  inputType,
  setInputType,
  postTask,
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
          />
          <FaArrowRight
            style={{
              display: "flex",
              marginLeft: "auto",
            }}
            onClick={postTask}
          />
          <FaX onClick={() => setInputType("button")} />
        </NewTaskWrapper>
      )}
    </>
  );
}
