import { useFloating } from "@floating-ui/react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getAdjacentNode,
  $getSelection,
  $isTextNode,
  TextNode,
} from "lexical";
import { useEffect, useState } from "react";

const SlashPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    placement: "bottom-end",
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        const nodes = selection?.getNodes();
        const node = nodes?.[0];
        if (node && $isTextNode(node)) {
          const text = node.getTextContent();
          if (text.endsWith("/")) {
            const element = editor.getElementByKey(node.getKey());
            refs.setReference(element);
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }
      });
    });
  }, [editor]);

  return (
    <div ref={refs.setFloating} style={floatingStyles}>
      demo
    </div>
  );
};

export default SlashPlugin;
