import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./Result.css";
import { GET_ANIMAL } from "../utils/queries";

function Result() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { loading, data } = useQuery(GET_ANIMAL);
  const animal = data?.animal || {};

  const handleRestartQuiz = () => {
    navigate("/quiz");
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="result-container">
      <h1 className="result-title">Quiz Result</h1>

      
      <button className="restart-button" onClick={handleRestartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
