import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export function EmailCaptureSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the logic to generate referral link
    console.log("Email submitted:", email);
  };

  return (
    <></>  
  );
}