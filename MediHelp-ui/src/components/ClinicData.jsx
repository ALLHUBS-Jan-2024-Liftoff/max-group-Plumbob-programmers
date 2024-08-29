<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import logo from "../images/Logo.png";
import genHospital from "../images/genHospital.png";
import childrenHospital from "../images/childrenHospital.png";
import psychiatric from "../images/psychiatric.png";
import DoD from "../images/DoD.png";
import veteransHospital from "../images/veteransHospital.png";
import criticalHospital from "../images/criticalHospital.png";

import PopUp from "./PopUp";

export default function ClinicData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [openPopUp, setOpenPopUp] = useState(false);
  const HandleRemovePopUp = () => setOpenPopUp(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://data.cms.gov/provider-data/api/1/datastore/query/xubh-q36u/0?offset=${offset}&limit=50`,
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.results);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [offset]);

  function hospitalType(hospital_type) {
    if (hospital_type === "Acute Care Hospitals") {
      return (
        <img
          src={genHospital}
          alt="General Hospital"
          className="col-start-10"
          height={50}
          width={150}
        />
      );
    } else if (hospital_type === "Childrens") {
      return (
        <img
          src={childrenHospital}
          alt="Children's Hospital"
          className="col-start-10"
          height={50}
          width={150}
        />
      );
    } else if (hospital_type === "Psychiatric") {
      return (
        <img
          src={psychiatric}
          alt="Psychiatric Hospital"
          className="col-start-10"
          height={50}
          width={150}
        />
      );
    } else if (hospital_type === "Critical Access Hospitals") {
      return (
        <img
          src={criticalHospital}
          alt="Psychiatric Hospital"
          className="col-start-10"
          height={50}
          width={150}
        />
      );
    } else if (hospital_type === "Acute Care - Veterans Administration") {
      return (
        <img
          src={veteransHospital}
          alt="Psychiatric Hospital"
          className="col-start-10"
          height={50}
          width={150}
        />
      );
    } else if (hospital_type === "Acute Care - Department of Defense") {
      return (
        <img
          src={DoD}
          alt="Psychiatric Hospital"
          className="col-start-10"
          height={50}
          width={150}
        />
      );
    }
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  const nextPage = () => {
    setOffset((prevOffset) => prevOffset + 50);
  };

  const previousPage = () => {
    setOffset((prevOffset) => (prevOffset > 0 ? prevOffset - 50 : 0));
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-opacity-20 p-8 ">
        <button
          onClick={previousPage}
          className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Previous Page
        </button>

        <button
          onClick={nextPage}
          className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Next Page
        </button>
      </div>
      {data ? (
        <div>
          {data.map((facility, index) => (
            <div key={index} className="inline-flex w-2/4 p-6 h-64">
              <div
                onClick={() => {
                  setOpenPopUp(true);
                  setIndex(index);
                }}
                className="grid grid-rows-3 grid-flow-col px-4 py-4 leading-10 border-solid border-2 bg-gray-700 bg-opacity-5 text-left w-full gap-1 rounded-lg 
                        transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:border-black"
              >
                {hospitalType(facility.hospital_type)}
                <h3 className="row-span-1 text-xl ">
                  {facility.facility_name}
                </h3>
                <div className="col-span-1 row-span-1 ">
                  <h3 className="row-span-1 ">{facility.address}</h3>
                  <p>City: {facility.citytown}</p>
                  <p>State: {facility.state}</p>
                </div>
                <h3 className="col-span-10 row-span-2 row-start-5 text-right text-2xl">
                  Rating:
                  {facility.hospital_overall_rating}/5
                </h3>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center bg-opacity-20 p-8 ">
            <button
              onClick={previousPage}
              className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Previous Page
            </button>

            <button
              onClick={nextPage}
              className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Next Page
            </button>
          </div>
          <PopUp
            openPopUp={openPopUp}
            closePopUp={HandleRemovePopUp}
            data={data[index]}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
=======
import React, { useEffect, useState } from 'react';

export default function ClinicData() {
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(() => {
        
        let fetchAttempt = 0
        let offset = 0
        const fetchData = async () => {
            let allData = [];
            while (fetchAttempt < 5){
            try {
                const response = await fetch(`https://cors-anywhere.herokuapp.com/https://data.cms.gov/provider-data/api/1/datastore/query/xubh-q36u/0?offset=${offset}&limit=500`, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json(); 
                
                setData(data);
            } catch (error) {
                setError(error); 
                console.error('Error fetching data:', error);
            }
          
            fetchAttempt++;
            offset += 500;
        };}

        fetchData();
    }, []); 

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div>
            {data ? (
                <div>
                  
                    {data.results.map((item, index) => (
                        <div key={index}>
                            <h3>{item.facility_name}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
>>>>>>> 3550b99 (Fetched External API data)
}
