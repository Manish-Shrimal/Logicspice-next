import React from 'react'

const ClientSay = () => {
  return (
    <section className="client-say">
        <div className="container">
          <div className="headings">
            <h2>WHAT OUR CLIENTS SAY</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <iframe
                id="you_iframe"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/DwZRqMYOmZo?rel=0"
                allow="encrypted-media"
                allowfullscreen=""
                title="Youtube-Video"
                height="300"
                width="100%"
                frameborder="0"
              ></iframe>
            </div>
            <div className="col-md-6">
              <p>
                Logicspice offers <span>Cost Effective</span> Solution and the{" "}
                <span>quality</span> of their work is very good. Logicspice has
                very <span>good reviews</span> and 100&apos;s of different
                project of different areas and work with detailed feedback about
                our request with very <span>standardized process.</span>{" "}
              </p>
              <p>
                Very friendly environment and I highly recommend Logicspice for
                Android &amp; iPhone app development...
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ClientSay
