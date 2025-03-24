// src/components/TiptapEditor.jsx
import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TiptapEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    }
  });

  // Update content when editing existing data
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 6, padding: 10, minHeight: 200 }}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
