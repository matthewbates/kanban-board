import { FaPlus, FaArrowRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

import {
  NewTaskBtn,
  NewTaskWrapper,
  NewTaskInput,
  ArrowWrapper,
} from "./NewTaskElements";

import { toggleInputType } from "../../utils/helpers";
import { postTask } from "../../utils/axios";

export default function NewTask({
  newTask,
  setNewTask,
  inputType,
  setInputType,
  column,
  setInitialData,
  theme,
}) {
  return (
    <>
      {inputType === "button" ? (
        <NewTaskBtn
          theme={theme}
          onClick={() => toggleInputType(inputType, setInputType)}
        >
          <FaPlus /> Add Item
        </NewTaskBtn>
      ) : (
        <NewTaskWrapper theme={theme}>
          <NewTaskInput
            type="text"
            value={newTask}
            placeholder="Enter name"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <ArrowWrapper>
            <FaArrowRight
              onClick={() =>
                postTask(column, newTask, setNewTask, setInitialData)
              }
            />
            <FaX onClick={() => setInputType("button")} />
          </ArrowWrapper>
        </NewTaskWrapper>
      )}
    </>
  );
}
