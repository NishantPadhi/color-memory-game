import { getRandomColors } from "./utils.js";
import { useEffect, useState, useMemo } from "react";
import "./styles.css";

const GameBox = ({ backgroundColor, onClickHandler, id, isBoxSelected }) => {
  const [isSelected, setIsSelected] = useState(isBoxSelected);

  useEffect(() => {
    setIsSelected(isBoxSelected);
  }, [isBoxSelected]);

  const handleClick = () => {
    if (!isSelected) {
      setIsSelected(true);
      onClickHandler(id, backgroundColor);
    }
  };

  return (
    <div
      id={id}
      style={{
        ...(isSelected
          ? { backgroundColor, cursor: "not-allowed" }
          : { backgroundColor: "white", cursor: "pointer" }),
      }}
      className="box"
      onClick={() => handleClick()}
    />
  );
};

const Game = ({ total }) => {
  const [currentBoxesSelected, setCurrentBoxesSelected] = useState([]);
  const [finalBoxesSelected, setFinalBoxesSelected] = useState([]);
  const [colorSelected, setColorSelected] = useState("");
  const [roundCount, setRoundCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const colors = useMemo(() => getRandomColors(total / 2), [total]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setColorSelected("");
      setCurrentBoxesSelected([]);
    }, [500]);
    return () => clearTimeout(timeOutId);
  }, [roundCount]);

  const handleClick = (id, color) => {
    setCurrentBoxesSelected([...currentBoxesSelected, id]);
    if (!colorSelected) {
      setColorSelected(color);
    } else {
      if (color === colorSelected) {
        setFinalBoxesSelected([
          ...finalBoxesSelected,
          ...currentBoxesSelected,
          id,
        ]);
        if (finalBoxesSelected.length + 2 === total) {
          setShowResult(true);
        }
      }
      setRoundCount((prev) => prev + 1);
    }
  };

  const isBoxSelectedChecker = (id) =>
    currentBoxesSelected.includes(id) || finalBoxesSelected.includes(id);

  return (
    <div>
      <div>
        {Array(4)
          .fill("")
          .map((_, colIndex) => {
            return (
              <div style={{ display: "flex" }}>
                {Array(total / 4)
                  .fill("")
                  .map((_, rowIndex) => {
                    return (
                      <GameBox
                        id={`${rowIndex}-${colIndex}`}
                        backgroundColor={colors[rowIndex * 4 + colIndex]}
                        onClickHandler={handleClick}
                        isBoxSelected={isBoxSelectedChecker(
                          `${rowIndex}-${colIndex}`
                        )}
                      />
                    );
                  })}
              </div>
            );
          })}
      </div>
      {showResult && <div>Game Over In {roundCount} rounds.</div>}
    </div>
  );
};

export default Game;
