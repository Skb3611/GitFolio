import React, { Dispatch, SetStateAction, useState } from "react"
import { DeleteType, Education, SavePayload } from "@/app/types/types"
import { Button } from "@workspace/ui/components/button"
import { Calendar, Edit, GraduationCap, Plus, Save, Trash2 } from "lucide-react"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader,DialogDescription, DialogTitle } from "@workspace/ui/components/dialog"
import { Label } from "@workspace/ui/components/label"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { v4 as uuid } from "uuid"
export default function EducationTab({
    education,
    onChange,
    onSave,
    onDelete
  }: {
    education: Education[]
    onChange: Dispatch<SetStateAction<Education[]>>
    onSave: ({type,data}:SavePayload) => void;
    onDelete :(type:DeleteType,id:string)=>void
  }) {
    const [editingEducation, setEditingEducation] = useState<Education|null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
  
    const handleAddEducation = () => {
      const newEdu:Education = {
        id: uuid(),
        title: "",
        institution: "",
        start_date: "",
        end_date: "",
        description: "",
        onGoing: false,
      }
      setEditingEducation(newEdu)
      setIsAdding(true)
      setIsOpen(true)
    }
  
    const handleEditEducation = (edu: any) => {
      setEditingEducation({ ...edu })
      setIsAdding(false)
      setIsOpen(true)
    }
  
    const handleSaveEducation = () => {
      if (editingEducation) {
        if (isAdding) {
          onChange([...education, editingEducation])
        } else {
          onChange(education.map((edu) => (edu.id === editingEducation.id ? editingEducation : edu)))
        }
        const {onGoing,...data}=editingEducation
        onSave({type:"Education",data:data})
        setIsOpen(false)
        setEditingEducation(null)
        setIsAdding(false)
      }
    }
  
    const handleDeleteEducation = (id: string) => {
      onChange(education.filter((edu) => edu.id !== id))
      // onSave({message:"Education",data:{..}})
      onDelete(DeleteType.EDUCATION,id)
    }
  
    const handleCancel = () => {
      setEditingEducation(null)
      setIsAdding(false)
      setIsOpen(false)
    }
    const handleOngoingChange = (checked: boolean) => {
      if (editingEducation) {
        setEditingEducation({...editingEducation, onGoing: checked , end_date:"Present" })
      }
    }
  
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Education</h3>
            <p className="text-sm text-muted-foreground">Your educational background and qualifications</p>
          </div>
          <Button onClick={handleAddEducation}>
            <Plus className="mr-2 h-4 w-4" />
            Add Education
          </Button>
        </div>
  
        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-4 w-4" />
                      <h4 className="font-medium">{edu.title}</h4>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.start_date} - {edu.end_date}
                    </p>
                    <p className="text-sm">{edu.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEditEducation(edu)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteEducation(edu.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
  
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{isAdding ? "Add Education" : "Edit Education"}</DialogTitle>
              <DialogDescription>
                {isAdding ? "Add a new education entry" : "Update your education details"}
              </DialogDescription>
            </DialogHeader>
            {editingEducation && (
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Degree/Title</Label>
                  <Input
                    value={editingEducation.title}
                    onChange={(e) => setEditingEducation({ ...editingEducation, title: e.target.value })}
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
  
                <div className="space-y-2">
                  <Label>Institute/University</Label>
                  <Input
                    value={editingEducation.institution}
                    onChange={(e) => setEditingEducation({ ...editingEducation, institution: e.target.value })}
                    placeholder="Stanford University"
                  />
                </div>
  
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Start Year</Label>
                    <Input
                      value={editingEducation.start_date}
                      onChange={(e) => setEditingEducation({ ...editingEducation, start_date: e.target.value })}
                      placeholder="2020"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Year</Label>
                    <Input
                    disabled={editingEducation.onGoing}
                      value={editingEducation.end_date}
                      onChange={(e) => setEditingEducation({ ...editingEducation, end_date: e.target.value })}
                      placeholder="2024"
                    />
                  </div>
                </div>
                <div className="space-x-2 flex items-center">
                <Checkbox
                id="ongoing"
                  checked={editingEducation.onGoing}
                  onCheckedChange={handleOngoingChange}
                />
                <label htmlFor="ongoing">Currently working here</label>
              </div>
  
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={editingEducation.description}
                    onChange={(e) => setEditingEducation({ ...editingEducation, description: e.target.value })}
                    placeholder="Describe your degree, achievements, relevant coursework..."
                    rows={4}
                  />
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSaveEducation}>
                <Save className="mr-2 h-4 w-4" />
                {isAdding ? "Add Education" : "Save Changes"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }