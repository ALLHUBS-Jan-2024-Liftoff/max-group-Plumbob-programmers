import React, { useEffect, useState } from 'react';
import logo from "../images/Logo.png";
import genHospital from "../images/genHospital.png";
import childrenHospital from "../images/childrenHospital.png";
import psychiatric from "../images/psychiatric.png";
import DoD from "../images/DoD.png";
import veteransHospital from "../images/veteransHospital.png";
import criticalHospital from "../images/criticalHospital.png";

export default function ClinicData() {
    const [data, setData] = useState([]); 
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);
    
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cors-anywhere.herokuapp.com/https://data.cms.gov/provider-data/api/1/datastore/query/xubh-q36u/0?offset=${offset}&limit=100`, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json(); 
                setData(result.results);
            } catch (error) {
                setError(error); 
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [offset]);
           
    
    function hospitalType(hospital_type){
        if (hospital_type === "Acute Care Hospitals") {
            return (
                <img src={genHospital} alt="General Hospital" className='col-start-10' height={50} width={150} />
            );
        } else if (hospital_type === "Childrens") {
            return (
                <img src={childrenHospital} alt="Children's Hospital" className='col-start-10' height={50} width={150} />
            );
        } else if (hospital_type === "Psychiatric") {
            return (
                <img src={psychiatric} alt="Psychiatric Hospital" className='col-start-10' height={50} width={150} />
            );
        } else if (hospital_type === "Critical Access Hospitals") {
            return (
                <img src={criticalHospital} alt="Psychiatric Hospital" className='col-start-10' height={50} width={150} />
            );
        } else if (hospital_type === "Acute Care - Veterans Administration") {
            return (
                <img src={veteransHospital} alt="Psychiatric Hospital" className='col-start-10' height={50} width={150} />
            );
        } else if (hospital_type === "Acute Care - Department of Defense") {
            return (
                <img src={DoD} alt="Psychiatric Hospital" className='col-start-10' height={50} width={150} />
            );
        }
    };
  

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }
    
    const nextPage = () => {
        setOffset(prevOffset => prevOffset + 100);
    };

    const previousPage = () => {
        setOffset(prevOffset => (prevOffset > 0 ? prevOffset - 100 : 0));
    };

    return (
        <div >
            <div className='w-full '>    
            <button onClick={previousPage} className='bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Previous Page</button>
            
            <button onClick={nextPage} className='bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Next Page</button>
            </div>
        {data ? (
            <div >
                {data.map((item, index) => (
                    <div key={index} className='inline-flex w-2/4 p-6 h-64'>
                        <div className='grid grid-rows-3 grid-flow-col px-4 py-4 leading-10 border-solid border-2 bg-gray-700 bg-opacity-5 text-left w-full gap-1 rounded-lg 
                        transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:border-black'>
                            {hospitalType(item.hospital_type)}
                            <h3 className='row-span-1 text-xl '>{item.facility_name}</h3>
                            <div className='col-span-1 row-span-1 '>
                            <h3 className='row-span-1 ' >{item.address}</h3>    
                                <p >City: {item.citytown}</p>
                                <p >State: {item.state}</p>
                            </div>
                            <h3 className='col-span-10 row-span-2 row-start-5 text-right text-2xl'>
                                Rating: 
                                {item.hospital_overall_rating}/5
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div>Loading...</div>
        )}
    </div>
  
        
    );
}