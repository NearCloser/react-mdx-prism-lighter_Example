---
title: 'React-Mdx-Prism-Lighter'
date: "2021-05-31"
---



# react-mdx-prism-lighter とは

GatsbyJS の mdx 用コードハイライト補助関数を提供するパッケージです。

例えば、以下のようにハイライトしたい箇所を自分で選択することができます。

```js title=Smaple-Code.jsx  highlight={1-3,12}
<div className="max-w-lg mx-auto md:px-0 px-8">
  <div className="mt-20">
    <h1 className="text-3xl font-medium text-primary tracking-wide">
      {mdx.frontmatter.title} 
    </h1> //highlight
    <time className="text-sm text-opacity-60 text-gray-900 ml-0.5">
      posted on {mdx.frontmatter.date} - {mdx.timeToRead} minutes read   //highlight-start
    </time>
    <div className="mt-10 pb-24 text-black"> //highlight-end
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  </div>
</div>
```

提供される関数は２つです。

# LinesNumberToHighlight

指定した行番号をハイライトしてくれます。1行から複数行対応しています。

# LinesToHighlight

コード上で簡単にハイライトしたい行を指定できるものです。これも1行から複数行対応しています。


<!-- 
<LoremIpsum
p={4}
avgWordsPerSentence={10}
avgSentencesPerParagraph={10}
startWithLoremIpsum={false}
/> -->
