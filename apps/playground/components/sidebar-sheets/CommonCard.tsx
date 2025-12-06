import { MONTHS, YEARS } from "@/lib/dummy";
import { DATA, Education, Experience } from "@workspace/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Textarea } from "@workspace/ui/components/textarea";
import { Trash } from "@workspace/ui/icons";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
export const CommonCard = ({
  dataType,
  data,
  setUser,
}: {
  data: Experience | Education;
  dataType: "Experience" | "Education";
  setUser: Dispatch<SetStateAction<DATA>>;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (
    field: keyof Experience | keyof Education,
    value: string
  ) => {
    dataType == "Experience"
      ? setUser((prev) => ({
          ...prev,
          experience: prev.experience.map((e) =>
            e.id === data.id ? { ...e, [field]: value } : e
          ),
        }))
      : setUser((prev) => ({
          ...prev,
          education: prev.education.map((e) =>
            e.id === data.id ? { ...e, [field]: value } : e
          ),
        }));
  };
  const getDateParts = (dateString: string) => {
    if (!dateString || dateString === "Present") return { month: "", year: "" };
    const [month, year] = dateString.split(" ");
    return { month: month || "", year: year || "" };
  };
  const handleDateChange = (
    type: "start" | "end",
    field: "month" | "year",
    value: string
  ) => {
    if (!data) return;

    const currentDate = type === "start" ? data.start_date : data.end_date;
    const { month, year } = getDateParts(currentDate);

    const newMonth = field === "month" ? value : month;
    const newYear = field === "year" ? value : year;

    const newDate = [newMonth, newYear].filter(Boolean).join(" "); // allow partial like "June" or "2024"

    dataType == "Experience"
      ? setUser((prev) => ({
          ...prev,
          experience: prev.experience.map((e) =>
            e.id === data.id
              ? {
                  ...e,
                  [type === "start" ? "start_date" : "end_date"]: newDate,
                }
              : e
          ),
        }))
      : setUser((prev) => ({
          ...prev,
          education: prev.education.map((e) =>
            e.id === data.id
              ? {
                  ...e,
                  [type === "start" ? "start_date" : "end_date"]: newDate,
                }
              : e
          ),
        }));
  };
  const handleOngoingChange = (checked: boolean) => {
    if (!data) return;

    dataType == "Experience"
      ? setUser((prev) => ({
          ...prev,
          experience: prev.experience.map((e) =>
            e.id === data.id
              ? {
                  ...e,
                  onGoing: checked,
                  end_date: checked ? "Present" : "",
                }
              : e
          ),
        }))
      : setUser((prev) => ({
          ...prev,
          education: prev.education.map((e) =>
            e.id === data.id
              ? {
                  ...e,
                  onGoing: checked,
                  end_date: checked ? "Present" : "",
                }
              : e
          ),
        }));
  };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        dataType == "Experience"
          ? setUser((prev) => ({
              ...prev,
              experience: prev.experience.map((e) =>
                e.id === data.id ? { ...e, logo: reader.result as string } : e
              ),
            }))
          : setUser((prev) => ({
              ...prev,
              education: prev.education.map((e) =>
                e.id === data.id ? { ...e, logo: reader.result as string } : e
              ),
            }));
      }
    };
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Add Experience Details</CardTitle>
        <Button
          variant={"outline"}
          size={"icon-sm"}
          className="cursor-pointer"
          onClick={() =>
            dataType == "Experience"
              ? setUser((prev) => ({
                  ...prev,
                  experience: prev.experience.filter((e) => e.id !== data.id),
                }))
              : setUser((prev) => ({
                  ...prev,
                  education: prev.education.filter((e) => e.id !== data.id),
                }))
          }
        >
          <Trash />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <Input
            ref={ref}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileUpload}
          />
          <Label>Company Logo</Label>
          <div className="flex gap-2 items-center">
            <Avatar className="size-20">
              <AvatarImage src={data.logo} alt="logo" />
              <AvatarFallback>
                {"company" in data
                  ? data.company[0]?.toUpperCase()
                  : (data.institution[0]?.toUpperCase() ?? "CN")}
              </AvatarFallback>
            </Avatar>
            <Button
              variant={"outline"}
              size={"sm"}
              className="cursor-pointer"
              onClick={() => ref.current?.click()}
            >
              {" "}
              Upload Logo
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label>
            {dataType == "Experience" ? "Company" : "Institute"} Name
          </Label>
          <Input
            placeholder={
              dataType == "Experience" ? "eg: Google" : "eg.Boston University"
            }
            value={"company" in data ? data.company : data.institution}
            onChange={(e) =>
              handleChange(
                dataType == "Experience" ? "company" : "institution",
                e.target.value
              )
            }
          />
        </div>
        <div className="space-y-2">
          <Label>
            {dataType == "Experience" ? "Job Role:" : "Degree/Title"}
          </Label>
          <Input
            placeholder={
              dataType == "Experience"
                ? "eg: Software Engineer"
                : "eg: Bachelor of Science in Computer Science"
            }
            value={"role" in data ? data.role : data.title}
            onChange={(e) =>
              handleChange(
                dataType == "Experience" ? "role" : "title",
                e.target.value
              )
            }
          />
        </div>

        <div className="w-full space-y-2">
          <Label>Start Date</Label>
          <div className="grid grid-cols-2 gap-2">
            <Select
              value={getDateParts(data.start_date).month}
              onValueChange={(value) =>
                handleDateChange("start", "month", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((month) => {
                  return (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <Select
              value={getDateParts(data.start_date).year}
              onValueChange={(value) =>
                handleDateChange("start", "year", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {YEARS.map((year) => {
                  return (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>End Date</Label>
          <div className="grid grid-cols-2 gap-2">
            <Select
              disabled={data.onGoing}
              value={getDateParts(data.end_date).month}
              onValueChange={(value) => handleDateChange("end", "month", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((month) => {
                  return (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <Select
              value={getDateParts(data.end_date).year}
              onValueChange={(value) => handleDateChange("end", "year", value)}
              disabled={data.onGoing}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {YEARS.map((year) => {
                  return (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-x-2 flex items-center">
          <Checkbox
            id="ongoing"
            checked={data.onGoing}
            onCheckedChange={handleOngoingChange}
          />
          <Label htmlFor="ongoing">
            Currently {dataType == "Experience" ? "working" : "studing"} here
          </Label>
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea
            placeholder={
              dataType == "Experience"
                ? "eg: Worked on the frontend of the product"
                : "eg: Completed a Bachelor of Science in Computer Science"
            }
            value={data.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};
