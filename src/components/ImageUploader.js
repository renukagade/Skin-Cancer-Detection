// import React, { useState } from "react";
// import axios from "axios";

// const ImageUploader = ({ setPrediction }) => {
//     const [file, setFile] = useState(null);

//     const handleUpload = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleSubmit = async () => {
//         if (!file) {
//             alert("Please select an image.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const response = await axios.post("http://127.0.0.1:5000/predict", formData);
//             setPrediction(response.data.prediction);
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <div className="upload-container">
//             <input type="file" onChange={handleUpload} />
//             <button onClick={handleSubmit}>Predict</button>
//         </div>
//     );
// };

// export default ImageUploader;
import React, { useState } from "react";
import axios from "axios";
import "./ImageUploader.css";
import PredictionResult from "./PredictionResult";

const ImageUploader = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [prediction, setPrediction] = useState(""); // Ensure state is updated

    const handleUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setPreview(URL.createObjectURL(uploadedFile));
        }
    };

    const handleSubmit = async () => {
        if (!file) {
            alert("Please select an image.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", formData);
            console.log("Prediction Response:", response.data); // Log entire response
            if (response.data && response.data.prediction) {
                setPrediction(response.data.prediction); // Ensure correct key
            } else {
                setPrediction("Invalid response format"); // Debugging message
            }
        } catch (error) {
            console.error("Error:", error);
            setPrediction("Error occurred while predicting.");
        }
    };

    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <h2 className="title">Upload an Image for Prediction</h2>
            <div className="upload-form">
                <input type="file" className="file-input" onChange={handleUpload} accept="image/*" />
                {preview && <img src={preview} alt="Preview" className="image-preview" />}
                <button className="upload-button" onClick={handleSubmit}>Predict</button>
            </div>
            <PredictionResult prediction={prediction} /> {/* Pass prediction correctly */}
        </div>
    );
};

export default ImageUploader;
