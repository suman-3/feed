"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const TopicCreator = ({}: {}) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="mt-12 flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white min-w-64"
          placeholder="Enter topic here..."
        />
        <Button>Create</Button>
      </div>
    </div>
  );
};
