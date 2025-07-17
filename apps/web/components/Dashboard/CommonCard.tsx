import { DeleteType, Education, Experience } from "@/app/types/types";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Briefcase, Calendar, Edit, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export const CardWrapper = ({
  data,
  handleEdit,
  handleDelete,
  setIsOpen,
  setEditing,
}: {
  data: Experience | Education;
  handleEdit: (data: Experience | Education) => void;
  handleDelete: (type: DeleteType, id: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setEditing: Dispatch<SetStateAction<Experience | Education | null>>;
}) => {
  return (
    <Card
      onClick={() => {
        setIsOpen(true);
        setEditing(data);
      }}
    >
      <CardContent className="md:p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {"role" in data ? data.role : data.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {"company" in data ? data.company : data.institution}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {data.start_date} - {data.end_date}
              </span>
            </div>
          </div>

          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={(event) => {
                event.stopPropagation();
                handleEdit(data);
              }}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(event) => {
                event?.stopPropagation();
                handleDelete(
                  "company" in data
                    ? DeleteType.EXPERIENCE
                    : DeleteType.EDUCATION,
                  data.id
                );
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-4 border-l-2 dark:border-primary">
          <p className="md:text-sm text-xs leading-relaxed">
            {data.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};