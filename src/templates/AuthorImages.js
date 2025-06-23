import React from "react";

const AuthorImages = ({ frontmatter }) => {
  const authors = frontmatter.authors.map((a) => ({
    url: a.website,
    image: a.profile_image,
    name: a.name,
  }));

  return (
    <div className="flex">
      {authors.map((a, index) => (
        <a
          key={a.name}
          href={a.url}
          className={`hover:bg-midnight-100 bg-midnight-50 rounded-full duration-200 ${
            index === 0 && authors.length > 1 ? "-mr-2" : ""
          }`}
        >
          <img
            width={48}
            height={48}
            src={a.image}
            alt={a.name}
            className="block rounded-full relative z-10 object-cover h-full"
          />
        </a>
      ))}
    </div>
  );
};

export default AuthorImages;
