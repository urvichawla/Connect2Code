import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="bg-white shadow-lg rounded-lg p-4">{children}</div>;
};

interface CardHeaderProps {
  title: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title }) => {
  return <h2 className="text-lg font-semibold">{title}</h2>;
};

interface CardContentProps {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="mt-2">{children}</div>;
};
