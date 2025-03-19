import React, {useState , useEffect} from 'react'
import './Account.css'
import axios from 'axios'
import Loader from './Loader'

export default function Account() {
  
    let cartHistory = localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : []
    let n = cartHistory.length
    
    const name = localStorage.getItem('name')
    const city = localStorage.getItem('city')
    const email = localStorage.getItem('email')

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const api = 'f54949e0abfa4eb28c441755241803'
  
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=no`);
          setWeather(response.data);
          console.log(weather.location.name)
        } catch (error) {
          setError(error);
        }finally{
          setLoading(false)
        }
      };

      fetchWeather();
    }, []);
  
    return (
      <div>
        {loading ? <Loader/> : <>
        <div className="account-details d-flex justify-content-between">
          <div>
            <h2 className='display-6'>My Account</h2>
            <div className="line2"></div>
            <p className='mt-3 text-black'> name : {name}</p>
            <p className='text-black'> Email : {email}</p>
          </div>
          {weather ? <div className="weather py-3 px-4 bg-dark text-light text-center">
            <p className='weather-location'>{weather.location.name}</p>
            <p className='weather-temp'>{weather.current.temp_c} <sup>°C</sup></p>
            <img src={weather.current.condition.icon} className='weather-icon mb-3' alt="" />
            <p className='weather-condition mb-0 pb-0'>{weather.current.condition.text}</p>
          </div> : <div>No weather data available</div>}
        </div>
        <div className="orders-history">
          <h2>Your Orders</h2>
          <p>This table contains your all orders: </p>
          <div className='orders-box mt-4 mb-5'>
            {n != 0 ? 
            
            cartHistory.map((subArray)=>{
              console.log(JSON.parse(subArray)[1].total)
              return(<table className="table table-bordered mb-5">
                <thead className='text-center'>
                  <tr className='table-dark'>
                    <th scope="col">Image</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {JSON.parse(subArray)[0].items.map((item)=>{
                    return(
                      <tr>
                        <td><img className='cart-image' src={item.img} alt={item.alt} /></td>
                        <td><div className='fs-3'>{item.name}</div></td>
                        <td><div className='fs-3'>{item.count}</div></td>
                        <td><div className='fw-bold'>{item.price} JD</div></td>
                      </tr>
                    )
                  })}
                  <tr scope='row'>
                      <td className='fw-bold fs-4' colSpan={4}>Total Price : {JSON.parse(subArray)[1].total} JD</td>
                  </tr>
                </tbody>
              </table>)
            })
            :
            <p className='text-center display-5'>You have no orders Yet!</p>
            }
          </div>
        </div>
        </>
        }
      </div>
    )
}
