import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./Result.css";
import { GET_ANIMAL } from "../utils/queries";
// import NavBar from "../components/NavBar/NavBar";
// import Footer from "../components/Footer/Footer";
import { motion } from 'framer-motion';

function Result() {
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  const { loading, data } = useQuery(GET_ANIMAL, {
    variables: { name: result },
    skip: !result,
  });

  const animal = data?.animal || {};

  const handleRestartQuiz = () => {
    navigate("/quiz");
  };

  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="result-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <div className="navbar">
        <NavBar />
      </div> */}

      <div className="result-content">
        <motion.div className="result-card" variants={itemVariants}>
          <motion.h1 className="result-title" variants={itemVariants}>
            Quiz Result
          </motion.h1>
          {animal && (
            <motion.div className="animal-info" variants={itemVariants}>
              <motion.h2 className="animal-name" variants={itemVariants}>
                {animal.name}
              </motion.h2>
              <motion.div
                className="animal-image-container"
                variants={itemVariants}
              >
                <motion.img
                  src={animal.image}
                  alt={animal.altText}
                  className="animal-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <motion.p className="animal-description" variants={itemVariants}>
                {animal.description}
              </motion.p>
            </motion.div>
          )}
          <motion.button
            className="restart-button"
            onClick={handleRestartQuiz}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Restart Quiz
          </motion.button>
        </motion.div>
      </div>

      {/* <div className="footer">
        <Footer />
      </div> */}
    </motion.div>
  );
}

export default Result;