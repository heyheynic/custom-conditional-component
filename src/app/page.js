// //This line at the top of the file is specific to Next.js. It designates this file as a client component rather than a server component. This is important in Next.js because client components can use React hooks like useState and useEffect, which aren't allowed in server components.
// "use client"


// import { useState } from "react";
// import Popup from "@/components/Popup";
// import If from "@/components/If";

// export default function Home() {
//   const [notClicked, setNotClicked] = useState(true);
//   // Function to hide popup when button is clicked
//   const handleButtonClick = () => {
//     setNotClicked(false); // Updates state to hide the popup
//   };

//   return (
//     <div className="relative h-screen w-screen">
//       <If notClicked={notClicked}>
//         <Popup
//           styling="absolute bottom-4 right-4"
//           onClose={handleButtonClick}
//         />
//       </If>
//     </div>
//   );
// }




import Popup from "@/components/Popup";
import If from "@/components/If";

export default function Home() {


  return (
    <div className="relative h-screen w-screen">
      <If condition={true}>
        <Popup
          styling="absolute bottom-4 right-4"
         
        />
      </If>
    </div>
  );
}

