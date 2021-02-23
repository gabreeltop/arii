import { useEffect, useState } from "react";
import { Header, Loading } from "../../components";

export default function Curso() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <h1>Oi Curso</h1>
          </div>
        </>
      )}
    </>
  );
}