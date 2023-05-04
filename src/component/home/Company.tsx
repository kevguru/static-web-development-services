import { useRef, useEffect, useState } from 'react';
import Image from '../Image';
import '../../styles/home/Company.css';

const Company = () => {
  const [companyList, setCompanyList] = useState<NodeListOf<HTMLDivElement>>();

  useEffect(() => {
    const list = document.querySelectorAll('.company__wrap') as NodeListOf<HTMLDivElement>;
    setCompanyList(list);
  }, []);

  useEffect(() => {
    if (companyList) {
      companyList.forEach((element: HTMLDivElement, index: number) => {
        element.dataset.aosDuration = String(400 + index * 400);
        console.log(element);
      });
    }
  }, [companyList]);

  console.log(companyList);
  return (
    <section className="company">
      <h3 className="company__title">You will be in good Company</h3>
      <div className="company__list">
        <div className="company__wrap" data-aos="zoom-in">
          <Image src="/home/company-1.png" alt="Company 1" className="company--image" />
        </div>
        <div className="company__wrap" data-aos="zoom-in">
          <Image src="/home/company-2.png" alt="Company 1" className="company--image" />
        </div>
        <div className="company__wrap" data-aos="zoom-in">
          <Image src="/home/company-3.png" alt="Company 1" className="company--image" />
        </div>
        <div className="company__wrap" data-aos="zoom-in">
          <Image src="/home/company-4.png" alt="Company 1" className="company--image" />
        </div>
      </div>
    </section>
  );
};

export default Company;
