"use client";
import Folder from "@/components/Folder";
import explorer from "@/data/structure";
import { useState } from "react";

export default function Home() {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  );
}
