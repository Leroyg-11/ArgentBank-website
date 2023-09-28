import React from 'react';
const url = 'http://localhost:3001/api/v1/user/login';

const fetch = () => {
    const [data, setData] = useState();

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            url
          )
        ).json();
  
        // set state when the data received
        setData(data);
      };
  
      dataFetch();
    }, []);
  
    return <>...</>
};

export default fetch;