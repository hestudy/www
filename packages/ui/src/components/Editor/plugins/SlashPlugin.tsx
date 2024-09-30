import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TextNode } from "lexical";
import { useEffect } from "react";
import { $createSlashNode, SlashNode } from "../nodes/SlashNode";

const SlashPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([SlashNode])) {
      throw new Error(
        "SlashPlugin: SlashNode not registered on editor (initialConfig.nodes)"
      );
    }

    return editor.registerNodeTransform(TextNode, (textNode) => {
      const text = textNode.getTextContent();
      if (text === "/") {
        textNode.replace($createSlashNode());
      }
    });
  }, [editor]);
  return null;
};

export default SlashPlugin;
