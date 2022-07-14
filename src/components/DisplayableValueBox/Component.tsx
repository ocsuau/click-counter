import './Component.css';

type Properties = {
    value: number | string;
};

const component = (props: Properties) => (
    <div className="displayable-value-container">
        {props.value}
    </div>
);

export default component;