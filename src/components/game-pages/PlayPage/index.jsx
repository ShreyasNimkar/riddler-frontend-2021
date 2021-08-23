import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Map from "../Map";
import Question from "../Play";

const Play = () => {
  const [mapOpen, setMapOpen] = useState(true);
  const [qId, setQId] = useState("");
  const [lastQuestion, setLastQuestion] = useState(false);
  const [mapRes, setMapRes] = useState({
    lockedNode: 0,
    portalNodes: {9: false, 20: false, 32: false},
    solvedNodes: [],
    unlockedNodes: [],
    username: ""
  });
  // const [questionOpen, setQuestionOpen] = useState(false);

  // if(mapRes.lockedNode) setMapOpen(false);

  return (
    <>
      {mapOpen ? (
        <Map lastQuestion={lastQuestion} setLastQuestion={setLastQuestion} mapOpen={setMapOpen} qId={setQId} setMapRes={setMapRes} />
      ) : (
        <Question lastQuestion={lastQuestion} mapOpen={setMapOpen} qId={qId} mapData={mapRes}/>
      )}
    </>
  );
};

export default Play;
