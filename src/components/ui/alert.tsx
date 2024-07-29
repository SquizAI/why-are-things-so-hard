import React from "react";

export const Alert: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-red-500 text-white p-4 rounded-md">{message}</div>
);

export const AlertDescription: React.FC<{ description: string }> = ({
  description,
}) => <p className="text-white">{description}</p>;

export const AlertTitle: React.FC<{ title: string }> = ({ title }) => (
  <h4 className="text-lg font-bold text-white">{title}</h4>
);
