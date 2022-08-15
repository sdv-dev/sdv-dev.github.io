import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { Article } from "../components/common";
import { Helmet } from "react-helmet";
import Cta from "../components/Cta";

import config from "../utils/siteConfig";

const ResourcesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "Slack-conversation-example.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Article hasMoreArticles={false}>
      <Helmet
        title="SDV Slack Community Guidelines"
        description="Welcome to the Synthetic Data Vault! Here, you will find a group of passionate creators and builders who want to put synthetic data to use."
        type="website"
      />

      <div className=" pt-20">
        <div
          className="bg-sdv-highlight w-full feature-image relative h-48"
          style={{
            background: "linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-6 justify-center items-center">
                <div className="w-full lg:w-6/12 px-6 md:mt-0 text-white text-center">
                  <h1 className="leading-none text-white text-4xl lg:text-5xl mb-3">
                    SDV Slack Community Guidelines
                  </h1>
                  <p className="text-xl">
                    Last Update: <i>July 2022</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl bg-white px-6 md:px-10 lg:px-20">
        <section className=" py-12">
          <div className="text-lg my-10 post">
            <p className="font-semibold">Dear SDV Community,</p>
            <p>
              Welcome to the Synthetic Data Vault! Here, you will find a group
              of passionate creators and builders who want to put synthetic data
              to use.
            </p>
            <p>
              Our goal at the SDV is to be the most comprehensive and trusted
              open source platform for synthetic data. Since we started the{" "}
              <a
                target={`_blank`}
                rel="noopener"
                href="https://bit.ly/sdv-slack-invite"
              >
                SDV Slack Community
              </a>{" "}
              in July 2020, we've seen unprecedented innovation and
              collaboration in this space. As we continue to improve the
              software and discover new insights about synthetic data, we want
              to make sure our community is set up for responsible growth.
            </p>
            <p>
              To that end, we are introducing some SDV Slack Community
              Guidelines, aimed to foster more of the great engagement we've
              been seeing. Below, you'll find 5 key principles that we expect
              all Slack Community members to follow.
            </p>
          </div>

          <div className="sm:pl-8 md:pl-16 xl:pl-20">
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                1. Keep the workspace organized
              </p>
              <p>
                Before starting a discussion, check to see if there is already
                material that covers the topic. We have many resources including:{" "}
                <a
                  target={`_blank`}
                  rel="noopener"
                  href="https://github.com/sdv-dev/SDV/issues"
                >
                  GitHub Issues
                </a>
                ,{" "}
                <a
                  target={`_blank`}
                  rel="noopener"
                  href="https://github.com/sdv-dev/SDV/discussions"
                >
                  GitHub Discussions
                </a>
                ,{" "}
                <a
                  target={`_blank`}
                  rel="noopener"
                  href="https://sdv.dev/SDV/user_guides/index.html"
                >
                  SDV User Guides
                </a>{" "}
                and the{" "}
                <a target={`_blank`} rel="noopener" href="https://sdv.dev/blog/">
                  SDV Blog
                </a>
                .
              </p>
              <p>
                If you cannot find any related material, post your question in the
                appropriate channel depending on the use – for eg. #single-table,
                #multi-table, #timeseries, etc. For general questions, use
                #sdv-dev. We recommend you use only 1 block of text to write your
                initial question. The text will become the start of a new thread,
                and new replies will appear nested underneath it:
              </p>
              <div className="max-w-2xl">
                <Img
                  fluid={data.placeholderImage.childImageSharp.fluid}
                  alt="join our community map"
                  loading={`lazy`}
                />
              </div>
            </div>
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                2. Discuss and participate openly
              </p>
              <p>
                Whether it's through asking questions, having detailed discussions
                or reacting to existing conversations, you are welcome to engage
                with the community in any way you feel comfortable. Feel free to
                answer questions by replying in a thread, especially if you've run
                into the same problems in the past or have workarounds.
              </p>
              <p>
                We encourage everyone to communicate in public channels instead of
                through private Direct Messages (DMs). When you keep discussions
                in the public space, everyone in the community can benefit from
                the solutions that you find, and others can also join in. This
                also applies to communicating with SDV team members — we try to
                respond to questions on a first-come, first-serve basis, and
                generally get to everything within a few business days. You will
                not receive a faster response by directly messaging individual
                members of the SDV team.
              </p>
            </div>
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                3. Continue with involved discussions on GitHub
              </p>
              <p>
                While Slack is a great place for initial connection and
                conversation, we are using GitHub for more involved topics, which
                require a more permanent location for tracking and updating. In
                certain scenarios, a member of the SDV team may ask you to
                continue a Slack discussion on GitHub instead:
              </p>
              <ul>
                <li>
                  <a
                    target={`_blank`}
                    rel="noopener"
                    href="https://github.com/sdv-dev/SDV/issues?q=is%3Aissue+is%3Aopen+label%3Abug"
                  >
                    Debugging problems
                  </a>{" "}
                  is easier on GitHub if there are many code samples or stack
                  traces being shared. If the bug cannot easily be reproduced or
                  fixed, we'll track its updates using GitHub too.
                </li>
                <li>
                  We also use GitHub to keep track of{" "}
                  <a
                    target={`_blank`}
                    rel="noopener"
                    href="https://github.com/sdv-dev/SDV/issues?q=is%3Aissue+is%3Aopen+label%3A%22feature+request%22"
                  >
                    new feature requests
                  </a>
                  . We prioritize new features based on the demand and the utility
                  for synthetic data use cases. If you'd like to call attention to
                  a particular feature request, we encourage you to add more
                  information about how you're planning to use the synthetic data,
                  and why the feature would be helpful.
                </li>
              </ul>
            </div>
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                4. Be respectful
              </p>
              <p>
                We are thrilled to have a global community that represents many
                different industries, backgrounds and experiences. It is important
                for everyone to keep this diversity in mind while communicating. A
                question that might seem obvious to you may not be to someone
                else, and you may receive faster replies if you explain any
                industry-specific terms. While others may not share your
                understanding of physics, chemistry, finance, healthcare, etc., we
                all share a love for data!
              </p>
              <p>
                We ask that you also extend this respect to the SDV team. As the
                core maintainers of this project, we are a passionate but small
                team responding to a variety of requests and questions. Please be
                mindful of this as you communicate with and wait for responses
                from us.
              </p>
            </div>
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                5. Keep conversation focused
              </p>
              <p>
                The primary focus of the SDV Slack is discussing the open source
                SDV software for creating and evaluating synthetic data. However,
                we recognize that synthetic data can be useful in a variety of
                applications. Feel free to use the #random channel for general
                industry news about synthetic data. (The SDV team will not be
                actively participating in this channel.)
              </p>
              <p>
                Please refrain from advertising or soliciting anywhere in the SDV
                Slack, as this creates a bad experience for the community.
                Promotion of a specific business or research may result in your
                expulsion from the Slack space. If you are receiving solicitation
                or spam from someone else, please get in touch with the SDV team
                at info@sdv.dev for a resolution.
              </p>
            </div>
          </div>

          <div className="text-lg my-10 post">
            <p>
              Thank you for taking the time to read our community guidelines.
              With these in mind, we hope the SDV Slack will continue to grow as
              an open space for discussion and collaboration around synthetic
              data solutions.
            </p>
            <p>
              Happy synthesizing! <br />
              <i className="text-sdv-dark font-bold">- The SDV Team</i>
            </p>
          </div>
        </section>
      </div>

      <Cta />
    </Article>
  );
};

export default ResourcesPage;
