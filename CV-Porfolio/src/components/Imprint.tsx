import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "ES" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Imprimir</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Site Notice</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
