import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 gap-6 bg-gray-50">
      <h1 className="text-2xl font-semibold">Landing Page</h1>

      {/* Multiple Button instances */}
      <div className="flex gap-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>

      {/* Render multiple Card components */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
