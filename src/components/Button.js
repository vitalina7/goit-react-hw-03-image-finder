import { Btn,Container } from "./Button.styled"
export const Button = ({ clickLoad }) => {
    return (
        <Container>
            <Btn onClick={clickLoad}>Load more</Btn>
        </Container>
    )
}