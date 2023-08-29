import { useState } from "react";

import { Draggable } from "react-beautiful-dnd";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { NewContentContainer } from "../NewTask/NewTaskElements";

import {
  TaskContainer,
  ContentContainer,
  TaskWrapper,
  DotsWrapper,
} from "./TaskElements";

export default function Task({ content, draggableId, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHovered = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ContentContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TaskWrapper>{content}</TaskWrapper>
            <DotsWrapper
              style={{
                display: isHovered === true ? "flex" : "none",
                cursor: "pointer",
              }}
            >
              <PiDotsThreeOutlineFill />
            </DotsWrapper>
          </ContentContainer>
        </TaskContainer>
      )}
    </Draggable>
  );
}
