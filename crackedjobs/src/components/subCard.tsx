import React from "react";
import { Card, CardTitle, CardDescription } from "./ui/card";
import '../../src/styles/chart.css';

interface SubCardProps {
  title: string;
  description: string;
  style?: React.CSSProperties;
}

export const SubCard: React.FC<SubCardProps> = ({ title, description, style }) => {
  // Define styles to apply inline
  const titleStyle: React.CSSProperties = {
    fontSize: '40px', // Example font size
    fontWeight: 'bold', // Example font weight
    color: '#333', // Example text color
    marginBottom: '10px', // Example margin bottom
    ...style, // Merge with additional styles passed via props
  };
  const descriptStyle: React.CSSProperties = {
    fontSize: '20px'
  };

  return (
    <Card className="w-70 flex flex-col items-center justify-center border bg-blue-200 shadow-lg" style={{ height: "500px" }}>
      <CardTitle style={titleStyle}>{title}</CardTitle>
      <CardDescription style={descriptStyle}>{description}</CardDescription>
    </Card>
  );
};
