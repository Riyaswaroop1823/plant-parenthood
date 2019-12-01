import React from 'react';
import {
  Card, CardImg, CardText, 
  CardBody, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";
import { PinDropRounded } from '@material-ui/icons';

const PlantDisplayCard = (props) => {
  return (
    <div>
      <Card>
            <CardBody>
                <CardImg src={props.plantPic} className="float-left mr-3 plant-img" alt="Plant Image" />  
                <CardText>{props.plantName}</CardText>
                <CardText>{props.children}</CardText>
                { props.plantNickname && <CardText> Nickname: {props.plantNickname}</CardText> }
                <CardText>Sun: {props.sun}</CardText>
                <CardText>Soil: {props.soil}</CardText>
                <CardText>Water every {props.water} days.</CardText>
                <Button className="float-right" onClick={props.onClick}>{props.label}</Button>
            </CardBody>
      </Card>
    </div>
  );
};

export default PlantDisplayCard;