import React, { useRef, useEffect, useState } from "react";
import Tag from "./Tag";
import TagMd from "./TagMd";

const Tags = ({ tags, setTags }) => {
  const scrollRef = useRef(null);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const [showLeftGradient, setShowLeftGradient] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const atStart = el.scrollLeft <= 1;
      const atEnd = el.scrollWidth - el.scrollLeft <= el.clientWidth + 1;
      setShowLeftGradient(!atStart);
      setShowRightGradient(!atEnd);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTags = (date) => {
    setTags((prev) =>
      prev.map((tag) =>
        tag.date === date ? { ...tag, active: true } : { ...tag, active: false }
      )
    );
  };

  return (
    <>
      <div className="hidden md:flex flex-col gap-2">
        {tags.map((t) => (
          <TagMd
            key={t.date}
            date={t.date}
            active={t.active}
            onClick={toggleTags}
          >
            {t.label}
          </TagMd>
        ))}
      </div>
      <div className="relative">
        {showLeftGradient && (
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />
        )}
        {showRightGradient && (
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />
        )}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-2.5 overflow-x-auto no-scrollbar"
        >
          {tags.map((t) => (
            <Tag
              key={t.date}
              date={t.date}
              active={t.active}
              onClick={toggleTags}
            >
              {t.label}
            </Tag>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;
