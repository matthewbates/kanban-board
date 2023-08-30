import { useState } from "react";

import { Draggable } from "react-beautiful-dnd";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Importance from "../Importance";

import {
  TaskContainer,
  ContentContainer,
  TaskWrapper,
  DotsWrapper,
} from "./TaskElements";

export default function Task({ content, draggableId, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
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
            {/* <DotsWrapper isHovered={isHovered} onClick={togglePopover}>
              <PiDotsThreeOutlineFill />
            </DotsWrapper> */}
            {/* {showPopover && <Importance />} */}
          </ContentContainer>
        </TaskContainer>
      )}
    </Draggable>
  );
}
