import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

import { Combobox } from "./ui/dropdown";



interface SubCardProps {
  title: string;
  description: string;
}


const SubCard: React.FC<SubCardProps> = ({ title, description }) => {
  return (
    <Card className="w-70 flex flex-col items-center justify-center border" style={{ height: "500px" }}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

interface ForecastCardProps {
  className?: string;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ className }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className={`w-3/4 ${className}`}>
        <CardHeader className="flex items-center space-x-4 p-1 justify-center " style={{ paddingTop: "50px" }}>
          <CardTitle className="text-5xl p-3 font-bold">CrackedDev Job Forecast</CardTitle>
          <Combobox />
        </CardHeader>
        <CardContent className="grid grid-cols-5 gap-4 p-5">
          <SubCard  title="React" description="React looking grim" />
          <SubCard title="Angular" description="Angular forecast" />
          <SubCard title="Vue" description="Vue forecast" />
          <SubCard title="Node.js" description="Node.js forecast" />
          <SubCard title="GraphQL" description="GraphQL forecast" />
        </CardContent>
      </Card>      
    </div>
  );
};

export default ForecastCard;
