import TestHydra from "@/components/TestHydra";
import dynamic from "next/dynamic";
import React from "react";
const TestHydraNoSSr = dynamic(() => import("../../components/TestHydra"), {
  ssr: false,
});
const a = Math.random();

function Page3() {
  /* const [isClient, setIsClient] = useState(false);
  useEffect(() => {
   // le traiment qu<on a jouter se fait au chargement de la page 
    setIsClient(true);
  }, []);*/
  console.log(a);
  return (
    <div>
      <p>Page de contact</p>
      <button>Cliquer ici </button>
      <TestHydraNoSSr></TestHydraNoSSr>
    </div>
  );
}

export default Page3;
