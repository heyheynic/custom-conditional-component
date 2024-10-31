// const If = ({ notClicked, children }) => {
//   if (notClicked) {
//     return <> {children} </>;
//   }
//   return null;
// };

// export default If;

/////////////////

const If = ({ condition, children }) => {

    return <> {condition && children} </>;

};

export default If;
