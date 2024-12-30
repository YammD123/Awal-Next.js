import React from "react";

interface CardListProps {
  children: React.ReactNode;
}

const CardList: React.FC<CardListProps> = ({ children }) => {
  return <div className="bg-[tomato] w-full p-4">{children}</div>;
};

export default CardList;
