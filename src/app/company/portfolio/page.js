"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust this to the number of items you want per page

  // let categoryList = useRef();
  // let technologyList = useRef();
  let portfolioData = useRef();
  let portfolioImagePath = useRef();

  const [categoryList, setCategoryList] = useState([]);
  const [technologyList, setTechnologyList] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(BaseAPI + "/portfolios");
      portfolioImagePath.current = response.data.portfolioImage;
      // categoryList.current = response.data.indusno;
      setCategoryList(response.data.indusno);
      technologyList.current = response.data.techs;
      portfolioData.current = response.data.portfolio;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Portfolio </h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li class="current" title="Portfolio">
                  {" "}
                  Portfolio
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="nav-portfolio-top">
        <ul class="nav">
          <li class="drop-down-port">
            <a href="javascript:void(0);" id="technologytab">
              Technology <span class="caret"></span>
            </a>
            <div class="subMenus-port dropdown-menu" id="technologytabshow">
              <ul>
                {/* {Object.entries(technologyList)?.map(([key, value]) => {
                  return (
                    <>
                      <li
                        id="technoli20"
                        data-value="20"
                        onclick='if (!window.__cfRLUnblockHandlers) return false; getdata(20, "tech")'
                      >
                        <a id="techno20" href="javascript:void(0);" value="20">
                          {value}
                        </a>
                      </li>
                    </>
                  );
                })} */}
              </ul>
            </div>
          </li>
          <li class="drop-down-port">
            <a
              class="dropdown-toggle"
              href="javascript:void(0);"
              id="categorytab"
            >
              Category <span class="caret"></span>
            </a>
            <div class="subMenus-port dropdown-menu" id="categorytabshow">
              <ul>
                {/* {Object.entries(categoryList)?.map(([key, value]) => (
                  <>
                    <li
                      id="catli49"
                      data-value="49"
                      onclick='if (!window.__cfRLUnblockHandlers) return false; getdata(49, "cat")'
                    >
                      <a id="cat49" href="javascript:void(0);" value="49">
                        {value}
                      </a>
                    </li>
                  </>
                ))} */}
              </ul>
            </div>
          </li>
        </ul>
        <div class="add_sttc" id="Show_cop">
          <div class="add_sttc" id="show_section"></div>
        </div>
      </section>
      <section class="sec_dv">
        <h2 class="hr_thy">
          We deliver cost effective and top-notch mobile app &amp; web solutions
          with ontime delivery and support.
        </h2>
      </section>
      <section class="content_area right_part LogicspicePortfolioSection">
        <div class="container">
          <div class="row">
            {portfolioData.current &&
              portfolioData.current?.map((i) => {
                return (
                  <>
                    <div class="col-md-4 col-sm-6">
                      <div class="portfolio_single_item portfolio_cols afclr exponent_two1 exponent_three1">
                        <div class="portfolio_cols_bdd">
                          <div class="portfolio_single_content afclr">
                            <div class="port_base_img">
                              <Link
                                href={portfolioImagePath + i.image}
                                data-lightbox="image-1"
                              >
                                <Image
                                  width={300}
                                  height={100 / (100 / 100)}
                                  src={portfolioImagePath.current + i.image}
                                  alt="Logicspice projects portfolio"
                                  class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                                />
                              </Link>{" "}
                            </div>
                            <div class="sml_icons">
                              <ul></ul>
                            </div>
                            <div class="portfolio_cols_hor_spa"></div>
                            <div class="portfolio_cols_hor">
                              <div class="portfolio_cols_hor_tabs">
                                <div class="portfolio_cols_hor_tabs_cell">
                                  <div class="port_web_name">
                                    <p>Afodel</p>
                                  </div>
                                  <div class="more_btn">
                                    <Link
                                      href={`/case-studies/${i.slug}`}
                                      target="_blank"
                                      class="btn btn-primary"
                                    >
                                      <span>Case Study</span>
                                    </Link>
                                  </div>
                                  <div class="web_links">
                                    <Link href={i.website_link} target="_blank">
                                      <i
                                        class="fa fa-link"
                                        aria-hidden="true"
                                      ></i>
                                    </Link>
                                    <Link
                                      class="fancybox"
                                      href={
                                        portfolioImagePath.current + i.image
                                      }
                                    >
                                      <i
                                        class="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
