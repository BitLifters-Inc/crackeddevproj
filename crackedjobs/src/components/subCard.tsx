import React from "react";
import { Card, CardTitle, CardDescription } from "./ui/card";
import '../../src/styles/chart.css';

interface SubCardProps {
  title: string;
  description: string;
}

export const SubCard: React.FC<SubCardProps> = ({ title, description }) => {
  return (
    <Card className="w-70 flex flex-col items-center justify-center border bg-blue-200 shadow-lg" style={{ height: "500px" }}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};
