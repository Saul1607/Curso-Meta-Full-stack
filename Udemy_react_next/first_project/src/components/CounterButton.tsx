interface Props {
    handleClick: () => void;
    counter: number;
}

const CounterButton = ({ handleClick, counter }: Props) => {
    return (
        <button onClick={handleClick}>{counter}</button>
    )
}
export default CounterButton