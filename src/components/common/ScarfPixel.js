import React from "react";

const ScarfPixel = () => {
  return (
    <>
      {typeof window !== "undefined" &&
      window.location.hostname === "sdv.dev" ? (
        <img
          referrerpolicy="no-referrer-when-downgrade"
          src="https://static.scarf.sh/a.png?x-pxid=af9a538f-69ef-4e05-8553-76897f21be21"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default ScarfPixel;
