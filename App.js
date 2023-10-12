//1
const heading = React.createElement('h1', {}, 'Hello Everyone!!');
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//2
const heading1 = React.createElement('h1', { id: 'title1' }, 'Heading1');
const heading2 = React.createElement('h2', { id: 'title2' }, 'Heading2');
const container = React.createElement(
  'div',
  { id: 'container', className: 'bordering' },
  [heading1, heading2]
);
root.render(container);

//3
// root.render(container1); // it will display not rendered
