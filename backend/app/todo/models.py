from typing import Optional, List
import uuid, datetime
from pydantic import BaseModel, Field


class SubTask(BaseModel):
    subname: str = Field(...)
    completed: bool = False

class TaskModel(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    description: str = Field(...)
    create_at: str = Field(...)
    update_at: str = Field(...)
    completed: bool = False
    subtasks: List[SubTask] = []

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "name": "Learn FARM Stack",
                "description": "Mô tả công việc",
                "create_at": str(datetime.datetime.now().isoformat()),
                "update_at": str(datetime.datetime.now().isoformat()),
                "completed": False,
                "subtasks": []

            }
        }


class UpdateTaskModel(BaseModel):
    name: Optional[str]
    description: Optional[str]
    completed: Optional[bool]
    update_at: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                "name": "Learn FARM Stack",
                "description": "Mô tả công việc",
                "update_at": str(datetime.datetime.now().isoformat()),
                "completed": True,
            }
        }


