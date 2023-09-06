import { useState } from "react";

import { Draggable } from "react-beautiful-dnd";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

import {
  TaskContainer,
  ContentContainer,
  TaskWrapper,
  DotsWrapper,
} from "./TaskElements";

import Importance from "../Importance";
import BasicPopover from "../Popover";

import { toggleHover, togglePopover } from "../../utils/helpers";
import { Popover } from "@mui/material";

export default function Task({ content, draggableId, index, theme }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopover, setShowPopover] = useState(null);

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <TaskContainer
          theme={theme}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ContentContainer
            onMouseEnter={() => toggleHover(isHovered, setIsHovered)}
            onMouseLeave={() => toggleHover(isHovered, setIsHovered)}
          >
            <TaskWrapper>{content}</TaskWrapper>
            <DotsWrapper
              isHovered={isHovered}
              onClick={() => togglePopover(showPopover, setShowPopover)}
            >
              <PiDotsThreeOutlineFill />
            </DotsWrapper>
            {showPopover && (
              <Popover>
                <Importance />
              </Popover>
            )}
          </ContentContainer>
        </TaskContainer>
      )}
    </Draggable>
  );
}
