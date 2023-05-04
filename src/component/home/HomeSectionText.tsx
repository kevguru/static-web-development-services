import React, { ReactNode } from 'react';
import { RiBugLine } from 'react-icons/ri';

interface dataType {
  title: string | ReactNode;
  desc: string;
}

interface Props {
  data: dataType;
}

const HomeSectionText = ({ data }: Props) => {
  return (
    <div className="section__text">
      <div className="text__head">
        <div className="text__head--icon-bg">
          <RiBugLine className="text__head--icon" />
        </div>
        <div className="text__head--right">
          <h3 className="text__head--title">Lorem ipsum dolor sit amet consectetur.</h3>
          <span className="text__head--desc">Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <h3 className="section__text--title">{data.title}</h3>
      <span className="section__text--desc">{data.desc}</span>
    </div>
  );
};

export default HomeSectionText;
