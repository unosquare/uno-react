import context from './TestContextHelper';

export const DataSourceContext = {
  Consumer(props) {
    return props.children(context);
  },
};