import React from "react";

type Props = {
  title: string;
  textSize?: string;
};

const TitleText = ({ title, textSize }: Props) => {
  return <h3 className={`mb-3 font-bold ${textSize ? textSize : 'text-3xl'}`}>{title}</h3>;
};

export default TitleText;
