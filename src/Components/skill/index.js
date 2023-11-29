import "./styles.css"

import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import React from 'react'

function Skill({ type, items }) {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
    <div className="skill" >
      <span className="skill-type">{type} : </span>
      <div className="skills">
        {
          items.map((item, idx) =>
          (
            <LightTooltip title={item.title} >
              <img src={item.image}></img>
            </LightTooltip>
          ))
        }
      </div>

    </div>
  )
}

export default Skill