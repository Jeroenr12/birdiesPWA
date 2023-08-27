import {Birds} from "../components/Birds";
import {useBirdContext} from "../contexts/birdContext";
import {Section} from "../components/Section";


export function ViewBirdPage(){
    const {birds} = useBirdContext();
    return(
        <Section>
            <Birds birds={birds}/>
        </Section>
    );
}