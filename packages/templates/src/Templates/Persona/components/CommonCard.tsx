"use client";
import React, { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { ExternalLink } from "@workspace/ui/icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Education, Experience } from "@workspace/types";
import { Badge } from "@workspace/ui/components/badge";
import { motion } from "motion/react";
const CommonCard = ({ data }: { data: (Experience | Education)[] }) => {
  const [selectedItem, setSelectedItem] = useState<
    ((Experience | Education) & { type: string }) | null
  >(null);
  const openModal = (item: Experience | Education, type: string) => {
    setSelectedItem({ ...item, type });
  };
  return (
    <div className="my-8">
      <div className="space-y-2">
        {data.map((item,index) => (
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
            key={item.id}
            className="group flex items-center justify-between py-2 px-2 rounded-lg transition-colors cursor-pointer"
            onClick={() =>
              openModal(item, "company" in item ? "experience" : "education")
            }
          >
            <div className="flex items-center gap-4">
              <img
                src={item.logo || "/placeholder.svg"}
                alt={"company" in item ? item.company : item.institution}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-balance">
                  {"role" in item ? item.role : item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {"company" in item ? item.company : item.institution}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.start_date} - {item.onGoing ? "Present" : item.end_date}
                </p>
                {/* <p className="text-sm text-muted-foreground max-w-xl">
                  {item.description}
                </p> */}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </div>
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              {selectedItem && (
                <>
                  <img
                    src={selectedItem.logo || "/placeholder.svg"}
                    alt={
                      selectedItem.type === "experience"
                        ? (selectedItem as Experience).company
                        : (selectedItem as Education).institution
                    }
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <DialogTitle className="text-xl text-balance">
                      {selectedItem.type === "experience"
                        ? (selectedItem as Experience).role
                        : (selectedItem as Education).title}
                    </DialogTitle>
                    <p className="text-muted-foreground">
                      {selectedItem.type === "experience"
                        ? (selectedItem as Experience).company
                        : (selectedItem as Education).institution}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge
                        variant={
                          selectedItem.type === "experience"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {selectedItem.type === "experience"
                          ? "Experience"
                          : "Education"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {selectedItem.start_date} -{" "}
                        {selectedItem.onGoing
                          ? "Present"
                          : selectedItem.end_date}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </DialogHeader>
          {selectedItem && (
            <div className="mt-4">
              <p className="leading-relaxed text-pretty">
                {selectedItem.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommonCard;
