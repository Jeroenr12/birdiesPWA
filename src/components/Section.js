import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

function SectionContent(props) {
    const {children} = props;
    return (
        <Container className="max-w-100">
            <Row>
                {children}
            </Row>
        </Container>
    );
}


export function Section(props) {
    const {children} = props;
    return (
        <section className="max-w-100">
            <SectionContent>{children}</SectionContent>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node
}