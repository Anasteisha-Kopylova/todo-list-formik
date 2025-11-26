import * as Yup from "yup";

export const editTitle = Yup.string()
	.min(3, "Too short!")
	.required("Title is required");

export const editDescription = Yup.string()
	.min(5, "Too short!")
	.notRequired();

export const editState = Yup.mixed()
	.oneOf(["in_progress", "completed"], "Invalid state")
	.required("State is required");

const editTaskSchema = Yup.object({
	title: editTitle,
	description: editDescription,
	state: editState,
});

export default editTaskSchema;
