import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 gap-6 bg-gray-50">
      <h1 className="text-2xl font-semibold">Landing Page</h1>

      {/* Multiple Button instances */}
      <div className="flex gap-4 flex-wrap">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
        <Button
          title="Red Large"
          size="large"
          shape="rounded-full"
          styles="bg-red-500 hover:bg-red-600"
        />
        <Button
          title="Green Medium"
          size="medium"
          shape="rounded-md"
          styles="bg-green-500 hover:bg-green-600"
        />
      </div>

      {/* Render multiple Card components */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
