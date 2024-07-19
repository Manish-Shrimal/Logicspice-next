"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";

const page = () => {
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
                        <li><Link href="https://www.logicspice.com">Home</Link></li>
                        <li class="current" title="Portfolio"> Portfolio</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="nav-portfolio-top">
   
        <ul class="nav">
            <li class="drop-down-port">
                <a href="javascript:void(0);" id="technologytab">Technology <span class="caret"></span></a>
                <div class="subMenus-port dropdown-menu" id="technologytabshow">
                    <ul>
                        <li id="technoli20" data-value="20" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(20, &quot;tech&quot;)"><a id="techno20" href="javascript:void(0);" value="20">Android Portfolio</a></li>
                        <li id="technoli19" data-value="19" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(19, &quot;tech&quot;)"><a id="techno19" href="javascript:void(0);" value="19">iPhone Portfolio</a></li>
                        <li id="technoli11" data-value="11" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(11, &quot;tech&quot;)"><a id="techno11" href="javascript:void(0);" value="11">CakePHP Portfolio</a></li>
                        <li id="technoli15" data-value="15" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(15, &quot;tech&quot;)"><a id="techno15" href="javascript:void(0);" value="15">Codeigniter Portfolio</a></li>
                        <li id="technoli22" data-value="22" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(22, &quot;tech&quot;)"><a id="techno22" href="javascript:void(0);" value="22">Core PHP</a></li>
                        <li id="technoli46" data-value="46" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(46, &quot;tech&quot;)"><a id="techno46" href="javascript:void(0);" value="46">Laravel</a></li>
                        <li id="technoli47" data-value="47" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(47, &quot;tech&quot;)"><a id="techno47" href="javascript:void(0);" value="47">Node.js</a></li>
                        <li id="technoli48" data-value="48" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(48, &quot;tech&quot;)"><a id="techno48" href="javascript:void(0);" value="48">Yii PHP Framework</a></li>
                        <li id="technoli13" data-value="13" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(13, &quot;tech&quot;)"><a id="techno13" href="javascript:void(0);" value="13">Joomla Portfolio</a></li>
                        <li id="technoli17" data-value="17" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(17, &quot;tech&quot;)"><a id="techno17" href="javascript:void(0);" value="17">Wordpress Portfolio</a></li>
                        <li id="technoli14" data-value="14" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(14, &quot;tech&quot;)"><a id="techno14" href="javascript:void(0);" value="14">Magento Portfolio</a></li>
                        <li id="technoli16" data-value="16" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(16, &quot;tech&quot;)"><a id="techno16" href="javascript:void(0);" value="16">OsCommerce Portfolio</a></li>
                        <li id="technoli29" data-value="29" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(29, &quot;tech&quot;)"><a id="techno29" href="javascript:void(0);" value="29">Shopify Portfolio</a></li>
                    </ul>

                </div>
            </li>
            <li class="drop-down-port">
                <a class="dropdown-toggle" href="javascript:void(0);" id="categorytab">Category <span class="caret"></span></a>
                <div class="subMenus-port dropdown-menu" id="categorytabshow">
                    <ul>
                        <li id="catli49" data-value="49" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(49, &quot;cat&quot;)"><a id="cat49" href="javascript:void(0);" value="49">Sport</a></li>
                        <li id="catli45" data-value="45" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(45, &quot;cat&quot;)"><a id="cat45" href="javascript:void(0);" value="45">Automation</a></li>
                        <li id="catli44" data-value="44" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(44, &quot;cat&quot;)"><a id="cat44" href="javascript:void(0);" value="44">Service Provider</a></li>
                        <li id="catli43" data-value="43" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(43, &quot;cat&quot;)"><a id="cat43" href="javascript:void(0);" value="43">Tour &amp; Travel</a></li>
                        <li id="catli42" data-value="42" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(42, &quot;cat&quot;)"><a id="cat42" href="javascript:void(0);" value="42">Social Media &amp; Networking</a></li>
                        <li id="catli41" data-value="41" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(41, &quot;cat&quot;)"><a id="cat41" href="javascript:void(0);" value="41">E-commerce &amp; Shopping</a></li>
                        <li id="catli40" data-value="40" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(40, &quot;cat&quot;)"><a id="cat40" href="javascript:void(0);" value="40">Real Estate &amp; Property</a></li>
                        <li id="catli39" data-value="39" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(39, &quot;cat&quot;)"><a id="cat39" href="javascript:void(0);" value="39">Advertising &amp; Publishing</a></li>
                        <li id="catli38" data-value="38" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(38, &quot;cat&quot;)"><a id="cat38" href="javascript:void(0);" value="38">Account and Financial services</a></li>
                        <li id="catli37" data-value="37" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(37, &quot;cat&quot;)"><a id="cat37" href="javascript:void(0);" value="37">Hotel industry</a></li>
                        <li id="catli36" data-value="36" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(36, &quot;cat&quot;)"><a id="cat36" href="javascript:void(0);" value="36">Events &amp; Tickets</a></li>
                        <li id="catli35" data-value="35" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(35, &quot;cat&quot;)"><a id="cat35" href="javascript:void(0);" value="35">Pharmacy &amp; Healthcare</a></li>
                        <li id="catli34" data-value="34" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(34, &quot;cat&quot;)"><a id="cat34" href="javascript:void(0);" value="34">Food and Beverage</a></li>
                        <li id="catli33" data-value="33" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(33, &quot;cat&quot;)"><a id="cat33" href="javascript:void(0);" value="33">Media &amp; Entertainment</a></li>
                        <li id="catli32" data-value="32" onclick="if (!window.__cfRLUnblockHandlers) return false; getdata(32, &quot;cat&quot;)"><a id="cat32" href="javascript:void(0);" value="32">E-Learning &amp; Education</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        <div class="add_sttc" id="Show_cop">
            <div class="add_sttc" id="show_section">
            </div>
        </div>

        
   
    </section>
    <section class="sec_dv">
        <h2 class="hr_thy">We deliver cost effective and top-notch mobile app &amp; web solutions with ontime delivery and support.</h2>
    </section>
    <section class="content_area right_part LogicspicePortfolioSection">
     <div class="container">
    <div class="row">
        <div class="col-md-4 col-sm-6">
        <div class="portfolio_single_item portfolio_cols afclr exponent_two1 exponent_three1">
    <div class="portfolio_cols_bdd">
        <div class="portfolio_single_content afclr">
            <div class="port_base_img">
                <a href="https://www.logicspice.com/app/webroot/files/portfolio/full/afodel.png" data-lightbox="image-1">
                    <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/afodel.png" alt="Logicspice projects portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" /></a>                                    </div>
            <div class="sml_icons">
                <ul>
                </ul>
            </div>
            <div class="portfolio_cols_hor_spa"></div>
            <div class="portfolio_cols_hor">
                <div class="portfolio_cols_hor_tabs">
                    <div class="portfolio_cols_hor_tabs_cell">
                        <div class="port_web_name"><p>Afodel</p></div>
                        <div class="more_btn"><a href="https://www.logicspice.com/casestudies/view/afodel" target="_blank" class="btn btn-primary"><span>Case Study</span></a></div>
                        <div class="web_links">
                            <a href="https://afodel.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                            <a class="fancybox" href="https://www.logicspice.com/app/webroot/files/portfolio/full//afodel.png"><i class="fa fa-search" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</div>
        </div>
    </div>
    </div>
    </section>
     <Footer />
    </>
  )
}

export default page
