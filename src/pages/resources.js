import React from "react";
import { Link } from "gatsby";
import { Article } from "../components/common";
import { Helmet } from 'react-helmet'

import Cta from "../components/Cta";

import config from "../utils/siteConfig"

const ResourcesPage = () => (
  <Article hasMoreArticles={false}>
    <Helmet
        title={config.siteTitleMeta}
        description={config.siteDescriptionMeta}
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
                  Research papers
                </h1>
                <p className="text-xl">
                  The SDV is based on over 5 years of research & development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <section className=" py-12">
        <div className="text-lg my-10">
          <Link
            className="text-sdv-secondary underline hover:no-underline hover:opacity-80"
            to="https://dai.lids.mit.edu/wp-content/uploads/2020/02/Lei_SMThesis_neo.pdf"
          >
            Synthesizing Tabular Data using Conditional GAN
          </Link>
          <p>S.M Thesis, Dept. of EECS, MIT, February 2020</p>
          <p>Lei Xu</p>
        </div>

        <div className="text-lg my-10">
          <Link
            className="text-sdv-secondary underline hover:no-underline hover:opacity-80"
            to="https://arxiv.org/pdf/1907.00503.pdf"
          >
            Modeling Tabular data using Conditional GAN (CTGAN)
          </Link>
          <p>
            NeurIPS|2019, Proc. of Advances in Neural Information Processing
            Systems, 2019
          </p>
          <p>
            Lei Xu, Maria Skoularidou, Alfredo Cuesta-Infante, Kalyan
            Veeramachaneni
          </p>
        </div>

        <div className="text-lg my-10">
          <Link
            className="text-sdv-secondary underline hover:no-underline hover:opacity-80"
            to="https://dai.lids.mit.edu/wp-content/uploads/2019/01/1812.01226.pdf"
          >
            Learning Vine Copula Models For Synthetic Data Generation
          </Link>
          <p>
            AAAI-19, In Proc. 33rd AAAI Conference on Artificial Intelligence,
            2019
          </p>
          <p>Yi Sun, Alfredo Cuesta-Infante, Kalyan Veeramachaneni</p>
        </div>

        <div className="text-lg my-10">
          <Link
            className="text-sdv-secondary underline hover:no-underline hover:opacity-80"
            to="https://arxiv.org/pdf/1811.11264.pdf"
          >
            Synthesizing Tabular Data using Generative Adversarial Networks
            (TGAN)
          </Link>
          <p>Preprint, 27 November 2018</p>
          <p>Lei Xu, Kalyan Veeramachaneni</p>
        </div>

        <div className="text-lg my-10">
          <Link
            className="text-sdv-secondary underline hover:no-underline hover:opacity-80"
            to="https://dai.lids.mit.edu/wp-content/uploads/2018/12/Andrew_MEng.pdf"
          >
            SDV: An Open Source Library for Synthetic Data Generation
          </Link>
          <p>M.Eng Thesis, Dept. of EECS, MIT, August 2018</p>
          <p>Andrew Montanez</p>
        </div>

        <div className="text-lg my-10">
          <Link
            className="text-sdv-secondary underline hover:no-underline hover:opacity-80"
            to="https://dai.lids.mit.edu/wp-content/uploads/2018/03/SDV.pdf"
          >
            The synthetic data vault
          </Link>
          <p>
            DSAA -16, International Conference on Data Science and Advance
            Analytics, October 2016
          </p>
          <p>Neha Patki, Roy Wedge, Kalyan Veeramachaneni</p>
        </div>

        <div className="text-lg my-10">
          <Link
            className="text-sdv-secondary underline hover:no-underline hover:opacity-80"
            to="https://dspace.mit.edu/handle/1721.1/109616"
          >
            The Synthetic Data Vault: Generative Modeling for Relational
            Databases.
          </Link>
          <p>M.Eng. Thesis, Dept. of EECS, MIT, June 2016</p>
          <p>Neha Patki</p>
        </div>
      </section>
    </div>

    <Cta />
  </Article>
);

export default ResourcesPage;
