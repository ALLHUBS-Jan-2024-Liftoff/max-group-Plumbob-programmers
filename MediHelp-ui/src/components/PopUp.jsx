import React from "react";
import genHospital from "../images/genHospital.png";
import childrenHospital from "../images/childrenHospital.png";
import psychiatric from "../images/psychiatric.png";
import DoD from "../images/DoD.png";
import veteransHospital from "../images/VeteransHospital.png";
import criticalHospital from "../images/criticalHospital.png";
import googleMaps from "../images/google.png";
export default function PopUp({ openPopUp, closePopUp, data }) {
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };
  if (openPopUp !== true) return null;

  function hospitalType(hospital_type) {
    if (hospital_type === "Acute Care Hospitals") {
      return (
        <img
          src={genHospital}
          alt="General Hospital"
          className="col-start-10"
          height={50}
          width={200}
        />
      );
    } else if (hospital_type === "Childrens") {
      return (
        <img
          src={childrenHospital}
          alt="Children's Hospital"
          className="col-start-10"
          height={50}
          width={200}
        />
      );
    } else if (hospital_type === "Psychiatric") {
      return (
        <img
          src={psychiatric}
          alt="Psychiatric Hospital"
          className="col-start-10"
          height={50}
          width={200}
        />
      );
    } else if (hospital_type === "Critical Access Hospitals") {
      return (
        <img
          src={criticalHospital}
          alt="Psychiatric Hospital"
          className="col-start-10"
          height={50}
          width={200}
        />
      );
    } else if (hospital_type === "Acute Care - Veterans Administration") {
      return (
        <img
          src={veteransHospital}
          alt="Psychiatric Hospital"
          className="col-start-10"
          height={50}
          width={200}
        />
      );
    } else if (hospital_type === "Acute Care - Department of Defense") {
      return (
        <img
          src={DoD}
          alt="Psychiatric Hospital"
          className="col-start-10"
          height={50}
          width={200}
        />
      );
    }
  }
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    data.address
  )}`;

  return (
    <div
      onClick={handlelosePopUp}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm "
    >
      <div className="p-2 bg-white w-10/12 md:w-1/3 lg:1/3 shadow-inner rounded-lg border border-solid border-indigo-600">
        <div className=""></div>

        <div>
          {hospitalType(data.hospital_type)}
          <div className="">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 ww"
            >
              <img src={googleMaps} alt={data.address} height={80} width={80} />
              <p>Google Maps</p>
            </a>
          </div>

          <h3 className="row-span-1 text-xl ">{data.facility_name}</h3>
          <h3 className="row-span-1 text-xl">{data.hospital_type}</h3>
          <div className="col-span-1 row-span-1 ">
            <h3 className="row-span-1 ">{data.address}</h3>
            <p>City: {data.citytown}</p>
            <p>State: {data.state}</p>
          </div>
          <h3 className="text-right text-2xl">
            Rating:
            {data.hospital_overall_rating}/5
          </h3>
        </div>

        <button
          onClick={() => closePopUp()}
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}