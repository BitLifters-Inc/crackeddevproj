import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

import '../../src/styles/chart.css'
import { Combobox } from "./ui/dropdown";

interface SubCardProps {
  title: string;
  description: string;
}

const SubCard: React.FC<SubCardProps> = ({ title, description }) => {
  return (
    <Card className="w-70 flex flex-col items-center justify-center border bg-blue-200 shadow-lg" style={{ height: "500px" }}>
      <CardTitle style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize: '1.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{title}</CardTitle>
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
      <Card className={`w-3/4 ${className} bg-blue-300 opacity-95 shadow-lg`}>
        <CardHeader className="flex items-center space-x-4 p-1 justify-center " style={{ paddingTop: "50px" }}>
          <CardTitle style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize: '4rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>CrackedDev Job Forecast</CardTitle>

          <Combobox />
        </CardHeader>
        <CardContent className="grid grid-cols-5 gap-4 p-5 ">
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
