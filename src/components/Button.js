import { Btn } from "./Button.styled"
export const Button = ({ clickLoad }) => {
    return (
        <Btn onClick={clickLoad}>Load more</Btn>
    )
}