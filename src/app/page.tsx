"use client";
import React, { useRef, useState } from "react";
import MemberShipForm from "./memberShipForm/page";
import MemberShipCard from "./memberShipCard/page";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Home() {
  const [formData, setFormData] = useState(null);
  const cardRef = useRef(null); 

  const handleFormSubmit = async (data: any) => {
    setFormData(data);
    setTimeout(() => downloadCardAsPDF(), 500);
  };

  const downloadCardAsPDF = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const imgData = canvas.toDataURL("image/png/base64/jpeg");
      const pdf = new jsPDF("portrait", "pt", "a4");
      const imgWidth = 300;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 20, 20, imgWidth, imgHeight);
      pdf.save("MemberShipCard.pdf");
    }
  };

  return (
    <div>
      <MemberShipForm onSubmit={handleFormSubmit} />
      {formData && (
        <div ref={cardRef}>
          <MemberShipCard data={formData} />
        </div>
      )}
    </div>
  );
}
