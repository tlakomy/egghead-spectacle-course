const counterDemo = `function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <section className="counter">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </section>
    );
};
`;

export default counterDemo;
