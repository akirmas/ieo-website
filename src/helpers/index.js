import React, { Fragment } from "react";

export const resolvePath = (
  filePath,
  prefix = process.env.PUBLIC_URL.concat("/")
) => (filePath.startsWith("http") ? filePath : prefix.concat(filePath));

export const classnames = (...classList) =>
  classList
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

export const renderText = (text, align) => {
  return Array.isArray(text)
    ? text.map((sentence, index) => (
        <Fragment key={sentence}>
          {sentence}
          {index < text.length - 1 && !align && <br />}
        </Fragment>
      ))
    : text;
};

export const headTextOnClick = (text, link) => {
  window.dataLayer.push({
    event: "click",
    pageLink: link,
    pageText: text
  });
};

export const renderHeadText = (text, align, link) => {
  return link ? (
    <a
      href={link}
      onClick={() => {
        headTextOnClick(text, link);
      }}
      target="_blank"
    >
      {renderText(text, align)}
    </a>
  ) : (
    renderText(text, align)
  );
};

// TODO: Each child in a list should have a unique "key" prop
export const renderContent = (content, blockName, variant, align) =>
  content.map(contentGroup => {
    return Object.entries(contentGroup).map(([key, value]) => {
      switch (key) {
        case "title":
          return (
            <h3
              key={value}
              className={classnames(
                `${blockName}__title`,
                variant ? `${blockName}__title--theme-${variant}` : ""
              )}
            >
              {renderHeadText(value, align, contentGroup["to"])}
            </h3>
          );
        case "text":
          return (
            <div className={`${blockName}__text-group`}>
              {Array.isArray(value)
                ? value.map(text => (
                    <p
                      key={text}
                      className={`${blockName}__text ${blockName}__text--${align}`}
                    >
                      {renderText(text, align)}
                    </p>
                  ))
                : renderText(value)}
            </div>
          );
        default:
          return "";
      }
    });
  });
