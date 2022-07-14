import './Component.css';

type ElementClassName = {
  classNames?: string;
};

type Properties = {
  text: string;
  onClick: () => void;
} & ElementClassName;

const defaultClassNames = 'success';

const component = ({ classNames, text, onClick }: Properties) => (
  <button 
    className={`button ${classNames ? classNames : defaultClassNames }`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default component;