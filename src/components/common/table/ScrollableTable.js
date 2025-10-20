import React, { useRef, useEffect, useState } from "react";

export default function ScrollableTable({ children, tableColDimensions }) {
  const tableScrollRef = useRef(null);
  const [thumbStyle, setThumbStyle] = useState({ width: "0%", left: "0%" });

  const customStyles = {
    "--table-col-dimensions": `${tableColDimensions ?? "minmax(0, 1fr)"}`,
    gridTemplateAreas: `"header" "body"`,
    boxShadow: "2.135px 8.539px 21.347px 0px rgba(0, 0, 54, 0.12)",
  };

  useEffect(() => {
    const table = tableScrollRef.current;
    if (!table) return;

    const updateThumb = () => {
      const { scrollWidth, clientWidth, scrollLeft } = table;
      if (scrollWidth <= clientWidth) {
        setThumbStyle({ width: "100%", left: "0%" });
        return;
      }

      const ratio = clientWidth / scrollWidth;
      const width = `${ratio * 100}%`;
      const left = `${
        (scrollLeft / (scrollWidth - clientWidth)) * (100 - ratio * 100)
      }%`;
      setThumbStyle({ width, left });
    };

    updateThumb();
    table.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);

    return () => {
      table.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  return (
    <>
      <style>{`
        .fake-scrollbar-container {
            border: 1px solid #D5DAE8;
            border-radius: 20px;
            margin-top: 20px;
        }
        .fake-scrollbar {
          height: 12px;
          border-radius: 20px;
          background: #E8EBF3;
          position: relative;
          margin: 6px;
          overflow: hidden;
        }
        .fake-scrollbar-thumb {
          height: 100%;
          background-color: #727C9E;
          border-radius: 20px;
          position: absolute;
          top: 0;
          transition: left 0.1s;
        }
        .fake-scrollbar-thumb:hover {
          background-color: #4b5563;
        }
        .scrollable-table-grid > div:first-child > div:first-child {
          box-shadow: 7px 0px 20px -10px rgba(0, 0, 54, 0.14);
        }
        .scrollable-table-grid > div:last-child > div.grid > div:first-child {
          box-shadow: 7px 0px 20px -10px rgba(0, 0, 54, 0.14);
        }
        @media (min-width: 640px) {
          .fake-scrollbar-container {
            display: none;
          }
          .scrollable-table-grid > div:first-child > div:first-child {
            box-shadow: none;
          }
          .scrollable-table-grid > div:last-child > div.grid > div:first-child {
            box-shadow: none;
          }
        }
      `}</style>

      <div className="max-w-full lg:max-w-[850px]">
        <div
          className="border border-midnight-50 rounded-[36px] p-5 md:p-9"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, var(--primary-dark-midnight-0, rgba(255, 255, 255, 0.10)) 0.15417183400131762deg, rgba(234, 252, 251, 0.10) 67.58502066135406deg, var(--primary-teal-400, rgba(1, 224, 201, 0.10)) 126.67272806167603deg, var(--primary-blue-500, rgba(3, 175, 241, 0.10)) 232.73083448410034deg, rgba(236, 249, 254, 0.10) 295.11245012283325deg), var(--primary-dark-midnight-25, #F6F6F9)`,
          }}
        >
          <div
            ref={tableScrollRef}
            className="overflow-x-auto lg:overflow-x-visible rounded-20 max-w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div
              style={customStyles}
              className="scrollable-table-grid min-w-[510px] lg:min-w-0 lg:max-w-[750px] grid rounded-20 bg-white overflow-hidden border border-midnight-200"
            >
              {children}
            </div>
          </div>
        </div>

        <div className="fake-scrollbar-container">
          <div className="fake-scrollbar">
            <div className="fake-scrollbar-thumb" style={thumbStyle}></div>
          </div>
        </div>
      </div>
    </>
  );
}
