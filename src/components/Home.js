import React from "react";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";
import Cdata from "../Cdata";
const Home = () => {
  return (
    <>
      <Breadcrumb />
      <div className="contacts-area mg-b-15">
        <div className="container">
              <div className="row">
            {Cdata.map((data, ind) => {
              return (
                <Card
                  key={ind}
                  img={data.img}
                  name={data.name}
                  country={data.country}
                />
              );
            })}
            </div>
      
        </div>
      </div>
    </>
  );
};

export default Home;
