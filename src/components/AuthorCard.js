import React from "react";

export default function AuthorCard({ post }) {
  const { authors } = post;

  if (typeof authors[1] === "object") {
    return (
      <section className="flex flew-row mb-6">
        <div className="relative mr-3" style={{
              width: "49px",
              height: "49px",
            }}>
          <div
            className="rounded-full bg-sdv-highlight top-0 left-0  h-full w-full"
          >
            <div
              className="overflow-hidden rounded-full absolute bottom-0 right-0"
              style={{
                width: "46px",
                height: "46px",
              }}
            >
              {authors[0].profile_image ? (
                <img
                  width={46}
                  height={46}
                  className="block rounded-full relative z-10"
                  src={authors[0].profile_image}
                  alt={authors[0].name}
                />
              ) : (
                <img
                  width={46}
                  height={46}
                  className="block rounded-full relative z-10"
                  src="/blog/images/icons/avatar.svg"
                  alt={authors[0].name}
                />
              )}
            </div>
          </div>
        </div>

        <div className="relative" style={{
              width: "49px",
              height: "49px",
            }}>
          <div
            className="rounded-full bg-sdv-highlight top-0 left-0 h-full w-full"
            
          >
            <div
              className="overflow-hidden rounded-full absolute bottom-0 right-0"
              style={{
                width: "46px",
                height: "46px",
              }}
            >
              {authors[1].profile_image ? (
                <img
                  width={46}
                  height={46}
                  className="block rounded-full relative z-10"
                  src={authors[1].profile_image}
                  alt={authors[1].name}
                />
              ) : (
                <img
                  width={46}
                  height={46}
                  className="block rounded-full relative z-10"
                  src="/blog/images/icons/avatar.svg"
                  alt={authors[1].name}
                />
              )}
            </div>
          </div>
        </div>

        <div className="px-4 flex flex-col justify-center">
          <p className="text-sm">
            by <strong className="font-bold">{authors[0].name}</strong> and <strong className="font-bold">{authors[1].name}</strong>
          </p>
          <p className="font-light text-xs">{post.published_at_pretty}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flew-row mb-6">
      <div className="relative">
        <div
          className="rounded-full bg-sdv-highlight top-0 left-0"
          style={{
            width: "49px",
            height: "49px",
          }}
        >
          <div
            className="overflow-hidden rounded-full absolute bottom-0 right-0"
            style={{
              width: "46px",
              height: "46px",
            }}
          >
            {post.primary_author.profile_image ? (
              <img
                width={46}
                height={46}
                className="block rounded-full relative z-10"
                src={post.primary_author.profile_image}
                alt={post.primary_author.name}
              />
            ) : (
              <img
                width={46}
                height={46}
                className="block rounded-full relative z-10"
                src="/blog/images/icons/avatar.svg"
                alt={post.primary_author.name}
              />
            )}
          </div>
        </div>
      </div>
      <div className="px-4 flex flex-col justify-center">
        <p className="font-bold text-sm">{post.primary_author.name}</p>
        <p className="font-light text-xs">{post.published_at_pretty}</p>
      </div>
    </section>
  );
}
