import React from "react";

type Props = {
  title: string;
};

const TitlePage = ({ title }: Props) => {
  return <h1 className="text-center text-2xl font-bold">{title}</h1>;
};

export default TitlePage;
