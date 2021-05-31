import React from "react"
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
} from "draft-js"
import "draft-js/dist/Draft.css"
import { inlineStyleButtons, blockTypeButtons } from "admin/Editor/index"

const MyEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  )

  const toggleInlineStyleHandler = (e) => {
    e.preventDefault()
    let style = e.currentTarget.getAttribute("data-style")
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }
  const renderInlineStyleButton = (value, style, icon) => {
    const currentInlineStyle = editorState.getCurrentInlineStyle()
    let isAcive = ""
    if (currentInlineStyle.has(style)) {
      isAcive = "bg-gray-200"
    } else {
      isAcive = ""
    }

    return (
      <div
        data-style={style}
        onMouseDown={toggleInlineStyleHandler}
        key={style}
        className={`cursor-pointer group hover:bg-gray-100 transition-colors p-2 ${isAcive}`}>
        {icon()}
      </div>
    )
  }

  const toggleBlockTypeHandler = (e) => {
    e.preventDefault()

    let block = e.currentTarget.getAttribute("data-block")
    setEditorState(RichUtils.toggleBlockType(editorState, block))
  }

  const renderBlocksButton = (value, block, icon) => {
    const currentBlockType = RichUtils.getCurrentBlockType(editorState)

    let isAcive = ""
    if (currentBlockType === block) {
      isAcive = "bg-gray-200"
    } else {
      isAcive = ""
    }

    return (
      <div
        data-block={block}
        onMouseDown={toggleBlockTypeHandler}
        key={block}
        className={`cursor-pointer group hover:bg-gray-100 transition-colors p-2 ${isAcive}`}>
        {icon()}
      </div>
    )
  }

  const handleKeyCommand = (command) => {
    let newEditorState = RichUtils.handleKeyCommand(editorState, command)
    if (!newEditorState && command === "strikethrough") {
      newEditorState = RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH")
    }
    if (newEditorState) {
      setEditorState(newEditorState)
      return "handled"
    }

    return "not-handled"
  }
  const keyBindingFunction = (event) => {
    if (
      KeyBindingUtil.hasCommandModifier(event) &&
      event.shiftKey &&
      event.key === "x"
    ) {
      return "strikethrough"
    }

    return getDefaultKeyBinding(event)
  }

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex gap-2">
        {inlineStyleButtons.map((button) => {
          return renderInlineStyleButton(
            button.value,
            button.style,
            button.icon
          )
        })}
      </div>
      <div className="flex gap-2">
        {blockTypeButtons.map((button) => {
          return renderBlocksButton(button.value, button.block, button.icon)
        })}
      </div>
      <div className="cursor-text border-2 rounded-lg py-2 px-3">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFunction}
          placeholder="Write something!"
        />
      </div>
    </div>
  )
}

export default MyEditor
