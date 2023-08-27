import {Section} from "../components/Section";
import {MyCard} from "../components/MyCard";
import {useState} from "react";
import {useBirdContext} from "../contexts/birdContext";
import {Button, Form} from "react-bootstrap";


export function MakeBirdPage(){
    const {onNewBird} = useBirdContext();
    const [birdToAdd, setBirdToAdd] = useState({name: "", size: "", color: ""});

    return(
        <Section className="d-flex justify-content-center">
            <MyCard>
                <Form>
                    <Form.Label>Naam:</Form.Label>
                    <Form.Control
                        className="w-auto"
                        value={birdToAdd.name}
                        onChange={e => setBirdToAdd({...birdToAdd, name: e.target.value})} placeholder="vogel naam"/>
                    <Form.Label>Kleur:</Form.Label>
                    <Form.Control
                        className="w-auto"
                        value={birdToAdd.color}
                        onChange={e => setBirdToAdd({...birdToAdd, color: e.target.value})} placeholder="vogel kleur"/>
                    <Form.Label>Grootte:</Form.Label>
                    <Form.Select
                        className="w-auto"
                        value={birdToAdd.size}
                        onChange={e => setBirdToAdd({...birdToAdd, size: e.target.value})}>
                        <option value="small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </Form.Select>
                </Form>
                <div className="d-flex justify-content-center p-2">
                    <Button className="m-1" size="lg" onClick={() => onNewBird(birdToAdd)}>Opslaan</Button>
                </div>
            </MyCard>
        </Section>
    );
}