import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 gap-6 bg-gray-50">
      <h1 className="text-2xl font-semibold">Landing Page</h1>

      {/* Render multiple Card components */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
