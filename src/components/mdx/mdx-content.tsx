import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { Callout } from "@/components/mdx/callout";
import { slugify } from "@/lib/utils";

const components = {
  Callout,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 id={slugify(String(props.children))} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 id={slugify(String(props.children))} {...props} />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [
            rehypeKatex,
            [
              rehypePrettyCode,
              {
                theme: "github-light",
              },
            ],
          ],
        },
      }}
    />
  );
}
