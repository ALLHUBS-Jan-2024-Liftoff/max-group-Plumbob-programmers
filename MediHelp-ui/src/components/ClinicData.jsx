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
}
