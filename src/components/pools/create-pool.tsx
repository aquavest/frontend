"use client";

import { FormEvent, useState } from "react";

import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function CreatePool() {
  const [showCreatePool, setShowCreatePool] = useState(false);
  const [maxFishTokens, setMaxFishTokens] = useState("");

  const handleShowCreatePool = () => setShowCreatePool(true);

  const handleCreatePool = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement create pool logic here
    console.log(`Creating a new pool with ${maxFishTokens} max FISH tokens`);
    setShowCreatePool(false);
    setMaxFishTokens("");
  };

  return (
    <>
      <Button onClick={handleShowCreatePool} className="mb-6">
        Create a Pool
      </Button>

      <Dialog open={showCreatePool} onOpenChange={setShowCreatePool}>
        <DialogContent aria-describedby="create-pool-description">
          <DialogHeader>
            <DialogTitle>Create a New Pool</DialogTitle>

            <DialogDescription>
              Specify the number of FISH tokens you want to assign to this pool.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleCreatePool}>
            <div>
              <Label htmlFor="maxFishTokens">Max FISH Tokens</Label>
              <Input
                id="maxFishTokens"
                type="number"
                value={maxFishTokens}
                onChange={(e) => setMaxFishTokens(e.target.value)}
              />
            </div>
            <Button type="submit">Create Pool</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
