import React, { useState } from "react";
import Header from "../components/Header";
import ImageUploader from "../components/ImageUploader";
import PredictionResult from "../components/PredictionResult";
import Footer from "../components/Footer";
import "../styles.css";

const Home = () => {
    const [prediction, setPrediction] = useState("");

    return (
        <div className="container">
            <Header />
            <ImageUploader setPrediction={setPrediction} />
            <PredictionResult prediction={prediction} />
            <Footer />
        </div>
    );
};

export default Home;
