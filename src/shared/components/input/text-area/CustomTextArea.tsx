import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import ReactQuill, { ReactQuillProps } from "react-quill";

export interface ICustomTextArea {
  formHook: UseFormReturn<any, any>;
  name: string;
}
export default function CustomTextArea({ formHook, name }: ICustomTextArea) {
  let toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons
    // ["blockquote", "code-block"],

    // [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    // [{ direction: "rtl" }], // text direction

    // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    // [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = formHook;

  useEffect(() => {
    register(name, { required: "Problem is required" });
  }, []);

  const onEditorStateChange = (editorState: any) => {
    console.log(editorState)
    setValue(name, editorState);
  };
  const editorContent = watch(name);
  return (
    <>
      <ReactQuill
        theme="snow"
        // value={value}
        // onChange={setValue}
        value={editorContent}
        onChange={onEditorStateChange}
        modules={{
          toolbar: toolbarOptions,
        }}
      />
      <button onClick={()=>console.log(editorContent)}>sdvsdv</button>
    </>
  );
}
