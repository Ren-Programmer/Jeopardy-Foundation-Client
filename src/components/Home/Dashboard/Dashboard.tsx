import AuthenticationContext from "Contexts/AuthenticationContext";
import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "shared/components/button/regular-button/Button";
import CustomTextArea from "shared/components/input/text-area/CustomTextArea";

export default function Dashboard() {
  
  const { isCrudAdmin } = useContext(AuthenticationContext);
  useEffect(() => {}, []);

  useEffect(() => {
    console.log("Started ");
  });

  if (isCrudAdmin) {
    return (
      <>
        Crud Admin
       
      </>
    );
  }

  return <>Regular Member</>;

  //return <>Dashboard</>;
}
