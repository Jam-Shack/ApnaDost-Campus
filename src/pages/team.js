/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import adil from '../assests/adil.jpeg'
import harsh from '../assests/harsh.jpg'

const Team = () => {
  return (
    <>
  
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="text-center font-bold text-900 text-5xl mb-3">
          Who Are We?
        </div>
        <div className="text-center text-xl line-height-3 text-600 mb-6">
         The team behind <h3>Apna Dost</h3>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="relative overflow-hidden">
                <h4 style={{
                    textAlign:'center'
                }} >Adil Khatri</h4>
              <img
                src={adil}
                width={40}
                height={250}
                className="w-full block"
                alt="team-5"
              />
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="relative overflow-hidden">
            <h4
             style={{
                textAlign:'center'
            }}
            >Pruthviraj Patil</h4>

              <img
                src="https://gdsckjsit.netlify.app/images/pp.jpg"
                width={40}
                height={250}
                className="w-full block"
                alt="team-6"
              />
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="relative overflow-hidden">
            <h4
             style={{
                textAlign:'center'
            }}
            >Manasvi Shetty</h4>

              <img
              src="https://gdsckjsit.netlify.app/images/my%20img%20(2).jpg"
                className="w-full block"
                width={40}
                height={250}
                alt="team-7"
              />
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="relative overflow-hidden">
            <h4
             style={{
                textAlign:'center',
            }}
            >Harsh Chotaliya</h4>

              <img
               src={harsh}
               width={40}
               height={250}
                className="w-full block"
                alt="team-8"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Team;
