import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Carddata from "./CardData";
import './styles.css'
import {ADD} from '../Redux/actions/action'
const Cards = () => {
  const dispatch=useDispatch();
  const send =(e)=>{
    dispatch(ADD(e))
  }
    const [data,setdata]=useState(Carddata)
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center"> 
      {
        data.map((element,id)=>{
            return(
                <Card style={{ width: "22rem" ,border:'none'}} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={element.imgdata} style={{height:'16rem'}} />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price: Rs {element.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button variant="primary"
                  onClick={()=>send(element)}
                  className="col-lg-12">Add to Cart</Button>
                  </div>
                 
                </Card.Body>
              </Card>
            )
        })
      }
       
      </div>
    </div>
  );
};

export default Cards;
