
import React from 'react';
import { Card, Header, Divider } from 'semantic-ui-react';


function RecipeCard(props){
    return(
        <Card centered style={cardStyle} data-testid="card">
            <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>{props.course}</Card.Meta>
            <Card.Meta>Technique: {props.technique}</Card.Meta>
            <Divider horizontal />
            <Card.Description>
                <Header as="h5">Ingredients:</Header>
                {props.ingredients.map((ingredient)=><div>{ingredient}</div>)}
            </Card.Description>
            </Card.Content>
        </Card>
    )
}

const cardStyle = {
    maxWidth: "250px"
}

export default RecipeCard;