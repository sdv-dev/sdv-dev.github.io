import React from 'react'

export default function AuthorPost({post}) {

    const {authors} = post

    if (typeof authors[1] === "object") {
        return (
            <div className="flex flex-start">
                {post.authors.map((item, idx) => {
                    return (
                        <section className="flex flew-row mb-6 mr-4">
                            <div className="relative">
                                <div
                                    className="rounded-full bg-sdv-link top-0 left-0"
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                    }}
                                >
                                    <div
                                        className="overflow-hidden rounded-full absolute bottom-0 right-0"
                                        style={{
                                            width: "46px",
                                            height: "46px",
                                        }}
                                    >
                                        {item.profile_image ? (
                                            <img
                                                width={46}
                                                height={46}
                                                className="block rounded-full relative z-10"
                                                src={
                                                    item.profile_image
                                                }
                                                alt={item.name}
                                            />
                                        ) : (
                                            <img
                                                width={46}
                                                height={46}
                                                className="block rounded-full relative z-10"
                                                src="/blog/images/icons/avatar.svg"
                                                alt={item.name}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs px-4 flex flex-col justify-center">
                                <p className="text-sm">
                                    by <strong className="font-bold ">{item.name}</strong>
                                </p>
                            </div>
                        </section>
                    )
                })}
            </div>
        )
    }

  return (
    <section className="flex flew-row mb-6">
      <div className="relative">
          <div
              className="rounded-full bg-sdv-link top-0 left-0"
              style={{
                  width: "48px",
                  height: "48px",
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
                          src={
                              post.primary_author
                                  .profile_image
                          }
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
      <div className="text-xs px-4 flex flex-col justify-center">
          <p className="text-sm">
            by <strong className="font-bold ">{post.primary_author.name}</strong>
          </p>
      </div>
  </section>
  )
}