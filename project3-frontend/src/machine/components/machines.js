import React from 'react';
import Machine from './machine'
import { getAllmachine} from '../machineAPI'; 



export default class Machines extends React.Component{
   
    componentDidMount(){
     
        getAllmachine() 
        .then ((response)=>{
            this.props.setMachines(response.data.machine)

        })
        .catch((error) =>{
            console.log('API error' , error)
        })


    }



render(){
       
    let allmachine = <h4> No machine item </h4>

     if(this.props.machines.length > 0){
        allmachine = this.props.machines.map((item , index ) => {
        return <Machine name={item.name} 
        description={item.description}
        type={item.type}
        price={item.price}
        img={item.img}
        id={item._id}
        key={index}
        />
    })

     }

    
     
    
  return( <div>
<h3> All machine </h3>
{allmachine}

</div>
  )
}


}
