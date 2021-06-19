import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "@components/Code/index"

const BasicComponents = {
  pre: ({ children }) => {
    const child = children.props
    if (child.mdxType === "code") {
      return (
        <CodeBlock
          codeString={child.children.trim()}
          language={child.className.replace("language-", "")}
          title={child.title}
          highlight={child.highlight}
        />
      )
    } else return null
  },
  h1: (props) => (
    <h1
      className="mb-6 mt-4 text-2xl  text-primary pl-4 leading-6"
      style={{ borderLeft: "4px solid #31386F " }}
      {...props}>
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2
      className="mb-4 mt-4 text-2xl text-opacity-90 text-primary font-medium"
      {...props}>
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 className="mb-2 mt-3 text-opacity-80 text-primary" {...props}>
      {props.children}
    </h3>
  ),
  h4: (props) => (
    <h4 className="mb-2 mt-2 text-opacity-80 text-primary" {...props}>
      {props.children}
    </h4>
  ),
  p: (props) => <p style={{ marginBottom: "1.5rem" }} {...props} />,
  ul: (props) => <ul style={{ marginLeft: " 1.5rem" }} {...props} />,
  ol: (props) => <ol style={{ marginLeft: "1.5rem" }} {...props} />,
  li: (props) => <li style={{ marginBottom: "calc(1.5rem / 2)" }} {...props} />,
}

const OtherComponents = {
  Link,
}

const Root = ({ element }) => {
  return (
    <MDXProvider components={{ ...OtherComponents, ...BasicComponents }}>
      {element}
    </MDXProvider>
  )
}

export default Root
