"use client";
import { useEffect } from "react";
import Userback from "@userback/widget";

// THIS ENTIRE COMPONENT IS FOR THE USERBACK WIDGET

export default function UserbackWidget() {
  useEffect(() => {
    Userback("A-xR2sRnfARSR0GYXNdJtmvfXXZ");
  }, []);
  return null;
}
