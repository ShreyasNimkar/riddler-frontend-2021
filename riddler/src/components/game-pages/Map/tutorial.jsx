import { React, useRef } from "react";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";

const Tutorial = ({ tutorialOpen, setTutorialOpen, setLegendOpen }) => {
  const state = {
    run: true,
    steps: [
      {
        target: "#locked-peg",
        title: "This is YOU on the map",
        content: "The question mark represents your position on the map",
        disableBeacon: true,
        style: {
          spotlight: {
            margintop: "-87px",
          },
        },
      },
      {
        target: "#node21",
        title: "This is a QUESTION",
        content: "Each node in the map represents a question",
        disableBeacon: true,
      },
      {
        target: "#portal-box9",
        title: "These are PORTALS",
        content: "You can use them to travel to the other",
        disableBeacon: true,
      },
      {
        target: ".legend-box",
        title: "Refer the Key",
        content: "The map key explains the representations on the map",
        disableBeacon: true,
      },
      {
        target: "#node37",
        title: "There are 3 tracks",
        content: "Select and answer any of the questions to lock a track",
        disableBeacon: true,
      },
    ],
  };
  const { steps } = state;

  const handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;
    console.log(data);
    const elem = document.getElementsByClassName("map-container")[0];
    console.log(elem);
    let top = getComputedStyle(
      document.querySelector(state.steps[index].target)
    ).top;
    let left = getComputedStyle(
      document.querySelector(state.steps[index].target)
    ).left;

    if (type === "tour:start") {
      elem.scrollTo(0, 0);
    }

    if (index === 2) {
      setLegendOpen(true);
    }

    if (index === 4) {
      setLegendOpen(false);
    }

    if (
      [STATUS.FINISHED, STATUS.SKIPPED].includes(status) ||
      action === "close"
    ) {
      setTutorialOpen(false);
      setLegendOpen(false);
    }
  };

  return (
    <>
      <Joyride
        run={tutorialOpen}
        steps={steps}
        continuous={true}
        disableOverlayClose={true}
        disableCloseOnEsc={true}
        hideCloseButton={true}
        locale={{
          back: "Back",
          next: "Next",
          last: "Finish",
        }}
        styles={{
          overlay: {
            background: "rgba(0, 0, 0, 0.25)",
          },
          tooltip: {
            backgroundColor: "#3B3B3B",
            color: "white",
            fontFamily: "Poppins",
          },
          floater: {
            arrow: {
              color: "#3B3B3B",
            },
          },
          tooltipTitle: {
            fontSize: "1.5rem",
          },
          tooltipContent: {
            fontSize: "1rem",
          },
          tooltipFooter: {
            justifyContent: "space-evenly",
          },
          buttonNext: {
            borderRadius: "2rem",
            width: "4rem",
            backgroundColor: "white",
            color: "black",
            fontFamily: "Poppins",
            fontWeight: 500,
            filter: "drop-shadow(4px 3px 11px rgba(0, 0, 0, 0.48))",
            outline: "none",
          },
          buttonBack: {
            borderRadius: "2rem",
            width: "4rem",
            backgroundColor: "white",
            color: "black",
            fontFamily: "Poppins",
            fontWeight: 500,
            filter: "drop-shadow(4px 3px 11px rgba(0, 0, 0, 0.48))",
            justifySelf: "flex-start",
            outline: "none",
          },
        }}
        callback={handleJoyrideCallback}
      />
    </>
  );
};

export default Tutorial;
