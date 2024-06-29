import React from "react";

const AddEmprunt = ({ setOpen }) => {
  return (
    <h6
      onClick={() => setOpen(true)}
      className=" text-mainLight opacity-80 text-sm cursor-pointer hover:opacity-100 my-6 "
    >
      {" "}
      Ajouter un emprunt +
    </h6>
  );
};

export default AddEmprunt;
