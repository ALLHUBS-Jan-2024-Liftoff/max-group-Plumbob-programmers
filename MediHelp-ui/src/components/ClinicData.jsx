import React, { useEffect, useState } from 'react';
import logo from "../images/Logo.png";

export default function ClinicData() {
    const [data, setData] = useState([]); 
    const [error, setError] = useState(null);
    // const [allData, setAllData] = useState([]);
    let allData =[];
    let allDataPage1 =[];
    useEffect(() => {
        
        let fetchAttempt = 0
        let offset = 0
        const fetchData = async () => {
            
            while (fetchAttempt < 2){
            try {
                const response = await fetch(`https://cors-anywhere.herokuapp.com/https://data.cms.gov/provider-data/api/1/datastore/query/xubh-q36u/0?offset=${offset}&limit=100`, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json(); 
                setData(data.results)
                console.log(data.results)
                
             
                
                
               
                
            } catch (error) {
                setError(error); 
                console.error('Error fetching data:', error);
            }
            
            fetchAttempt++;
            offset += 100;
        };}
        fetchData();
     

    }, []); 

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div >
        {data ? (
            <div >
                {data.map((item, index) => (
                    <div key={index} className='inline-flex w-2/4 p-6 h-64'>
                        <div className='grid grid-rows-3 grid-flow-col px-4 py-4 leading-10 border-solid border-2 bg-gray-700 bg-opacity-5 text-left w-full gap-1 '>
                            {/* <img src={logo} alt="Logo" className='' height={50} width={150}/> */}
                            <h3 className='row-span-1 col-span-10 text-xl '>{item.facility_name}</h3>
                            <h3 className='row-span-1 ' >{item.address}</h3>
                            <div className='col-span-1 row-span-1 '>
                                <p >{item.citytown}</p>
                                <p >{item.state}</p>
                            </div>
                            <h3 className='col-span-10 row-span-2 row-start-4 text-right text-2xl'>
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
