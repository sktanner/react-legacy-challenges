import React, { Component } from 'react';
import CatIndex from './CatIndex';
 
class CatList extends Component  {
  


  render() {
    // console.log(this.state)
 return (
   <ul>
     {this.props.cat.map((cat) => <li>{cat}</li> )}
   </ul>
 )
}
}
 
export default CatList