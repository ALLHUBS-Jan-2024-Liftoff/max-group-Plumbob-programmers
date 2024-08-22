export default function ClinicPage(){
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
    
    return (
        data.facility_name
    )
}