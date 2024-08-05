import React, { useEffect, useState } from 'react';

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
            
            while (fetchAttempt < 1){
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
                
                // console.log(data.results)
                if(data.results.state = "AL"){
                    allData.push(data.results)
                }
                
                
               
                
            } catch (error) {
                setError(error); 
                console.error('Error fetching data:', error);
            }
            
            fetchAttempt++;
            offset += 500;
            // console.log(allData[1])
            allDataPage1 = allData[1]
            console.log(allDataPage1)
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
                    <div key={index} className='inline-flex w-2/4 '>
                        <div className='grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 leading-10 border-solid border-2 bg-gray-700 bg-opacity-5'>
                        <h3 className='row-span-3 bg-gray-500 bg-opacity-5 '>{item.facility_name}</h3>
                        <h3 className='col-span-2 bg-gray-500 bg-opacity-5' >{item.address}</h3>
                        <div className='row-span-2 col-span-2 bg-gray-500 bg-opacity-5 '>
                        <h3 >{item.citytown}</h3>
                        <h3 >{item.state}</h3>
                        </div>
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
