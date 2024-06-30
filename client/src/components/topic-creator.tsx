"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createTopic } from "@/app/action";

export const TopicCreator = () => {
  const [input, setInput] = useState<string>("");

  const { mutate, error, isPending } = useMutation({
    mutationFn: createTopic,
  });

  return (
    <div className="mt-12 flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white min-w-64"
          placeholder="Enter topic here..."
        />
        <Button
          disabled={isPending}
          onClick={() => mutate({ topicName: input })}
        >
          Create
        </Button>
      </div>

      {error && <p className="text-red-600 text-sm">{error.message}</p>}
    </div>
  );
};
