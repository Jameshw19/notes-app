"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DoumentIdPage = ({ params }: DocumentIdPageProps) => {
  return <div>doucment id</div>;
};

export default DoumentIdPage;
