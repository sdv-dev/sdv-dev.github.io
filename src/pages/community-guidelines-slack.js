import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { Article } from "../components/common";
import { Helmet } from "react-helmet";
import Cta from "../components/Cta";

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

      <div
        className="relative pt-20 md:pt-20 bg-sdv-highlight mx-auto"
        style={{
          maxWidth: "1680px",
        }}
      >
        <div className=" w-full feature-image relative h-48">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4 lg:-mx-6 justify-center items-center">
                <div className="w-full lg:w-6/12 px-6 md:mt-0 text-white text-center">
                  <h1 className="leading-none text-white text-4xl lg:text-5xl mb-3">
                    SDV Slack Community Guidelines
                  </h1>
                  <p className="text-xl">
                    Last Update: <i>October 12, 2023</i>
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
              platform for synthetic data. Since we started the{" "}
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
                1. Discuss and participate openly
              </p>
              <p>
              We created our Slack Community as an open place to discuss the SDV. Anyone can join our community by creating a profile. Whether it's through asking questions, having detailed discussions or reacting to existing conversations, you are welcome to engage with the community in any way you feel comfortable. Feel free to answer questions by replying in a thread, especially if you've run into the same problems in the past or have workarounds.
              </p>
              <p>
                The guidance below allows us to keep the community safe:
              </p>
              <ul>
                <li>We encourage  SDV Slack members to create profiles that accurately represent who they are, including their name, profile image and email. Please do not deliberately change your identity in order to mislead the community, for example by providing a temporary email or a fake name or profile photo. Impersonating others could also result in your expulsion.</li>
                <li>We encourage everyone to communicate in public channels instead of through private Direct Messages (DMs). When you keep discussions in the public space, everyone in the community can benefit from the solutions that you find, and others can also join in. This also applies to communicating with SDV team members — we try to respond to questions on a first-come, first-serve basis, and generally get to everything within a few business days. <strong>You will <i>not</i> receive a faster response by directly messaging individual members of the SDV team.</strong></li>
              </ul>
            </div>
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                2. Keep the workspace organized
              </p>
              <p>
                Before starting a discussion, check to see if there is already
                material that covers the topic. We have many resources
                including:{" "}
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
                  href="https://docs.sdv.dev/sdv"
                >
                  SDV User Guides
                </a>{" "}
                and the{" "}
                <a
                  target={`_blank`}
                  rel="noopener"
                  href="https://datacebo.com/blog/"
                >
                  DataCebo Blog
                </a>
                .
              </p>
              <p>
                If you cannot find any related material, post your question in
                the appropriate channel depending on the use – for eg.
                #single-table, #multi-table, #timeseries, etc. For general
                questions, use #sdv-dev. We recommend you use only 1 block of
                text to write your initial question. The text will become the
                start of a new thread, and new replies will appear nested
                underneath it:
              </p>
              <div className="max-w-2xl mb-6">
                <Img
                  fluid={data.placeholderImage.childImageSharp.fluid}
                  alt="join our community map"
                  loading={`lazy`}
                />
              </div>
              <p>
                (We recognize that there may be bots or Apps that you use in
                other Slack spaces. Currently, we are not accepting any requests
                to add external Slack Apps to the SDV space.)
              </p>
            </div>
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                3. Continue with involved discussions on GitHub
              </p>
              <p>
                While Slack is a great place for initial connection and
                conversation, we are using GitHub for more involved topics,
                which require a more permanent location for tracking and
                updating. In certain scenarios, a member of the SDV team may ask
                you to continue a Slack discussion on GitHub instead:
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
                  . We prioritize new features based on the demand and the
                  utility for synthetic data use cases. If you'd like to call
                  attention to a particular feature request, we encourage you to
                  add more information about how you're planning to use the
                  synthetic data, and why the feature would be helpful.
                </li>
              </ul>
            </div>
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                4. Keep the focus on SDV usage
              </p>
              <p>
                The primary focus of the SDV Slack is to discus the{" "}
                <a href="https://sdv.dev/">SDV software</a>. Due to recent
                growth in users and usage questions, and our goal of supporting
                users in every way possible, we are adopting a new policy: Slack
                members must stick to posting{" "}
                <strong className="font-bold">
                  SDV usage questions and discussions only
                </strong>
                . Here's what this means:
              </p>
              <ul>
                <li>
                  While we recognize that there are a lot of discussions, news
                  and articles about synthetic data and generative AI in general
                  happening right now, please refrain from posting them to any
                  of the SDV channels (including the "random" channel). These
                  include any{" "}
                  <strong className="font-bold">
                    general industry news about synthetic data; third party
                    vendor evaluations, or successful case studies. This rule
                    applies to the SDV itself: we will not post (or allow others
                    to post) coverage of the SDV
                  </strong>{" "}
                  <a href="https://www.fastcompany.com/90940897/banks-synthetic-data-explained">
                    in business news
                  </a>
                  , articles about industry usage of the SDV, successful case
                  studies of the SDV, or{" "}
                  <a href="https://www.databricks.com/blog/2023/04/12/synthetic-data-better-machine-learning.html">
                    evaluations by other vendors or third parties
                  </a>
                  .{" "}
                  <strong className="font-bold">
                    We believe this content is more suitable for LinkedIn and
                    other venues
                  </strong>
                  .
                </li>
                <li>
                  Please refrain from advertising or soliciting anywhere in the
                  SDV Slack, as this creates a bad experience for the community.
                  Promotion of a specific business or research project may
                  result in your expulsion from the Slack space. If you are
                  receiving solicitations or spam from someone, please get in
                  touch with the SDV team at info@sdv.dev for a resolution.
                </li>
              </ul>
            </div>
            <div className="text-lg my-10 post">
              <p className="text-3xl lg:text-4xl font-bold text-sdv-dark">
                5. Be respectful
              </p>
              <p>
                We are thrilled to have a global community that represents many
                different industries, backgrounds and experiences. It is
                important for everyone to keep this diversity in mind while
                communicating. A question that might seem obvious to you may not
                be to someone else, and you may receive faster replies if you
                explain any industry-specific terms. While others may not share
                your understanding of physics, chemistry, finance, healthcare,
                etc., we all share a love for data!
              </p>
              <p>
                We ask that you also extend this respect to the SDV team. As the
                core maintainers of this project, we are a passionate but small
                team responding to a variety of requests and questions. Please
                be mindful of this as you communicate with and wait for
                responses from us.
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
