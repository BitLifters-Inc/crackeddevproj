import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";

interface SubCardProps {
  title: string;
  description: string;
}

const SubCard: React.FC<SubCardProps> = ({ title, description }) => {
  return (
    <Card className="w-32 h-32 flex flex-col items-center justify-center border p-4">
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
    <Card className={`w-3/4 mx-auto ${className}`}>
      <CardHeader className="flex items-center space-x-4 rounded-t-md border p-4">
        <CardTitle>Cracked Dev Job Forecast</CardTitle>
        <CardDescription>To suit your forecast needs!</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center space-x-4 p-4">
        <SubCard title="React" description="React looking grim" />
        <SubCard title="Angular" description="Angular forecast" />
        <SubCard title="Vue" description="Vue forecast" />
        <SubCard title="Node.js" description="Node.js forecast" />
        <SubCard title="GraphQL" description="GraphQL forecast" />
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
