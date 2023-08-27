import PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Section} from "./Section";

function Bird(props){
    const {bird} = props;
    return(
        <MyCard>
            <h3>{bird.name}</h3>
            <div>kleur: {bird.color}</div>
            <div>grootte: {bird.size}</div>
        </MyCard>
    );
}

export function Birds(props){
    const {birds} = props;

    return(
        <Section className="d-flex justify-content-center">
            {birds?.map(bird => <Bird key={bird.ref.id} bird={bird}/>)}
        </Section>
    );
}

Birds.protTypes = {
    birds: PropTypes.array,
};