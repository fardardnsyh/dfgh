import { FC, memo } from "react";
import Markdown, { Options } from "react-markdown";

export const MemoizedReactMarkdown: FC<Partial<Options>> = memo(
    Markdown,
    (prevProps, nextProps) =>
        prevProps.children === nextProps.children && prevProps.className === nextProps.className
);
