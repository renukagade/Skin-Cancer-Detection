// import React from "react";

// const PredictionResult = ({ prediction }) => {
//     return (
//         <div className="result-container">
//             {prediction && <h2>Prediction: {prediction}</h2>}
//         </div>
//     );
// };

// export default PredictionResult;

// import React from "react";
// import "./PredictionResult.css"; // Ensure correct CSS import

// const PredictionResult = ({ prediction }) => {
//     console.log("Rendering PredictionResult with:", prediction); // Debugging log
//     return (
//         <div className="result-container">
//             {prediction ? (
//                 <h2>
//                     Prediction: <span className="prediction-text">{prediction}</span>
//                 </h2>
//             ) : (
//                 <h2 className="no-prediction">Waiting for prediction...</h2>
//             )}
//         </div>
//     );
// };

// export default PredictionResult;

import React from "react";
import "./PredictionResult.css";

const PredictionResult = ({ prediction }) => {
    console.log("Rendering PredictionResult with:", prediction); // Debugging log
    return (
        <div className="result-container">
            {prediction ? (
                <h2 className="prediction-result">
                    Prediction: <span className="prediction-text">{prediction}</span>
                </h2>
            ) : (
                <h2 className="no-prediction">Waiting for prediction...</h2>
            )}
        </div>
    );
};

export default PredictionResult;
