import React from "react";
import Layout from "../../components/Layout/layout";
import TeamCard from "../../components/common/teamCard";

const About = () => {
  const team = [
    {
      id: "4",
      name: "Nagarjun A",
      imgSrc: "/src/pages/aboutUs/images/nagarjun.jpg",
      desc: "mood account halfway once north blank village concerned purpose live beauty onto wonder jet soft warn care doctor necessary average child planned price floor",
    },
    {
      id: "29",
      name: "Lokeshwar Reddy",
      imgSrc: "/src/pages/aboutUs/images/nagarjun.jpg",
      desc: "ever has bridge pink stage quite clothing play flame slight every church camp dig same flag tower dirt liquid sail fence welcome fell entire",
    },
  ];
  return (
    <Layout title={"Learnyte | About Us"}>
      <div className="container">
        <div className="pt-3">
          <h1 className="text-center">Our Team</h1>
        </div>
        <div className="row teamRow p-5 justify-content-center">
          {team.map((p) => {
            return <TeamCard title={p.name} desc={p.desc} imgSrc={p.imgSrc} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default About;
