import React from "react";
import "./SingleBlogPreview.css";
import blogimg from "../../Assets/Blog img/blogimg1.png";
import userlogo from "../../Assets/Navbar img/user.png";
import nextimg from "../../Assets/next.png";
const SingleBlogPreview = () => {
  return (
    <>
      {/* contains single blog preview */}
      {/* div for flex container it contains details about a single blog */}
      <div className="flex-container-for-single-preview-blog">
        {/* div for specific width */}
        <div
          style={{ width: "75em" }}
          className="75em-width-for-the-blog-screen-page"
        >
          <div className="all-the-content-of-the-blog">
            {/* div for heading of the Signle blog */}
            <div className="heading-of-the-single-blog">
              <h1>How to Diagnose Potential Clients’ Problems</h1>
            </div>
            {/* main image after heading of the blog */}
            <div className="contains-full-image-of-the-single-blog">
              <img style={{ width: "75em" }} src={blogimg} alt="" srcset="" />
            </div>

            {/* section for all the content after image */}
            <div className="all-the-details-texts-about-blog">
              {/* first paragraph section after main image */}
              <div className="first-contains-para-in-blogs">
                <p>
                  Usually, if a potential client is reaching out to you, they
                  already know what they need from you. Or, at least, they think
                  they know what they need from you. You’ll listen to that, take
                  it into consideration, and supplement it with a conversational
                  series of questions.
                </p>
                <p>
                  What do we mean by “conversational”? Just keep it cool and
                  caj. Try to find that sweet spot between “interrogation” and
                  “five-year-old who just wants to know why why why?” and work
                  your magic from there.
                </p>
                <p>
                  Alright, we can’t really guarantee that last one, but we’re
                  pretty into problem-solving over here, so we can’t help but
                  get excited about it.
                </p>
                <p>
                  So how do you stop pitching and start pitching in? By asking a
                  lot of questions and being an excellent listener, obvi!
                </p>
              </div>
              {/* div for sub-heading of the single blog */}
              <div className="sub-heading-of-the-single-blog">
                <h1>
                  <strong>Questions To Ask and Answers To Listen For</strong>
                </h1>
              </div>
              {/* second paragraph section after subheading */}
              <div className="second-contains-para-in-blogs">
                <p>
                  We hate to be the Bad News Bears, but people straight up do
                  not like to be sold to. Fortunately for you and everyone else
                  in the business of selling things, people do love it when you
                  solve their problems. So that’s what we suggest you do
                  instead.
                </p>
                <p>
                  For real, for real, we want you to spend less time on your
                  “sales calls” selling and pitching and more time helping.
                  You’ll build more genuine connections with potential clients,
                  you’ll have more success, and heck, you’ll even have more fun!
                </p>
                {/* <p>
                Alright, we can’t really guarantee that last one, but we’re
                pretty into problem-solving over here, so we can’t help but get
                excited about it.
              </p>
              <p>
                So how do you stop pitching and start pitching in? By asking a
                lot of questions and being an excellent listener, obvi!
              </p> */}
              </div>
              {/* iframe used for youtube video */}
              <div className="youtube-video-section-middle-of-the-blog">
                {/* contains youtube video */}
                <div>
                  <iframe
                    style={{ width: "75em", height: "30em" }}
                    src="https://www.youtube.com/embed/Ke90Tje7VS0"
                    title="React JS - React Tutorial for Beginners"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              {/* question answer section after youtube video */}
              {/* second paragraph section after subheading */}
              <div className="question-and-answer-in-blogs">
                <div className="question-and-answer-in-blogs-first">
                  <p>
                    Let’s take a closer look at this role-played customer call:
                  </p>
                  <p>
                    Q: I’m a little curious, why are you calling about web
                    comps?
                  </p>
                  <p>
                    A: I’ve seen the work you’ve done in the past and thought
                    you could help with our brand
                  </p>
                  <p>
                    Takeaway: The customer is familiar with your work and
                    prepared to trust you
                  </p>
                </div>
                <div className="question-and-answer-in-blogs-second">
                  <p>
                    Q: Right, but why do you, specifically, believe you need web
                    comps?
                  </p>
                  <p>
                    A: We want to increase engagement. We’ve had some success in
                    the past… but have seen our sales going down, and we’re not
                    sure why. We want repeat customers, but it’s very
                    competitive in our industry.
                  </p>
                  <p>
                    Takeaway: Whoa! This client gave so much information in
                    answering this one question. We now have a pain point, a
                    proposed reason for it, the desired result of fixing it, and
                    a roadblock that they feel is getting in the way.
                  </p>
                  <p>
                    Make sure you jot down those pain points, the proposed
                    problems, and the peripheral info, too! “We’ve had trouble…
                    We don’t know why… We’re not sure… It’s a pretty competitive
                    industry.”
                  </p>
                </div>
              </div>
              {/* div for another subheading */}
              <div className="second-subheading-in-blog-section">
                <h1>
                  <strong>Shift to Sale</strong>
                </h1>
              </div>
              {/* details about subheading */}
              <div className="question-and-answer-in-blogs">
                <div className="question-and-answer-in-blogs-second">
                  <p>Time for some quick math!</p>
                  <p>
                    Take a look at the numbers they gave you, the revenue
                    increase they expect, and extrapolate that over a larger
                    time frame, like 12 months
                  </p>
                  <p>
                    And just to prove that it pays to be curious, we’re back for
                    one more round of questions!
                  </p>
                  <p>Q: Is this an accurate estimate?</p>{" "}
                  <p>
                    Q: What do you think a fair price would be against this
                    number?{" "}
                  </p>
                  <p>
                    The next bit is all up to how they’ve responded. For a more
                    in-depth review of what to do when someone lowballs you,
                    check this out! For now, though, let’s focus on a
                    negotiation based on the estimated revenue increase that you
                    agreed on earlier.
                  </p>
                </div>
              </div>
              {/* div for another subheading */}
              <div className="second-subheading-in-blog-section">
                <h1>
                  <strong>Play With Percentages</strong>
                </h1>
              </div>
              {/* details about subheading */}
              <div className="question-and-answer-in-blogs">
                <div className="question-and-answer-in-blogs-second">
                  <p>
                    Clients don’t always think about the return on their
                    investment in terms of percentages. Sometimes they just
                    guess the price based on what number “feels comfortable” for
                    them. And that’s okay. But that’s not where the conversation
                    ends.
                  </p>
                  <p>
                    Demonstrate what percentage they’re offering to pay you. If
                    the revenue increase is estimated to be $480k and the client
                    is only willing to spend $10k, they are offering just 2.5%.
                    Spelling it out like that might just be enough to get you
                    back in the game.
                  </p>
                  <p>
                    Want to know more about closing the deal? Check this out!
                  </p>
                </div>
              </div>
              {/* div for another subheading */}
              <div className="second-subheading-in-blog-section">
                <h1>
                  <strong>Why Is The Curiosity Method So Effective?</strong>
                </h1>
              </div>
              {/* details about subheading */}
              <div className="question-and-answer-in-blogs">
                <div className="question-and-answer-in-blogs-second">
                  <p>
                    This not-very-sales-y sales tactic helps your potential
                    client feel like they are an active part of this
                    problem-solving because they are! And it makes them feel
                    like you care and understand because you do!
                  </p>
                  <p>
                    This also sets you up for a negotiation in which your
                    customer already knows why what you’re providing is valuable
                    to them. You can close the deal without ever being even a
                    teensy tiny bit “pitchy.”
                  </p>
                  <p>
                    Remember to put your own personal pizzazz on these
                    questions, though; you want the conversation to feel natural
                    and breezy, not like a recitation of a script. We have no
                    doubt that you’ll get there- it just takes some practice.
                  </p>
                </div>
              </div>
              {/* div for another subheading */}
              <div className="second-subheading-in-blog-section">
                <h1>
                  <strong>You Got It, Friend!</strong>
                </h1>
              </div>
              {/* details about subheading */}
              <div className="question-and-answer-in-blogs">
                <div className="question-and-answer-in-blogs-second">
                  <p>
                    Dang, we have covered a lot in such a short time. Still
                    hungry for more?
                  </p>
                  <p>
                    Feeling ~curious~ about our sales style? We gotchu. Check
                    out all these rad resources and videos and learn to your
                    hearts’ content.
                  </p>
                  <p>
                    Or are you already onboard and ready to practice these new
                    wicked sales skills?
                  </p>
                  <p>
                    We gotchu there, too! Take our negotiation course or check
                    out the Pro Group today! ‍
                  </p>
                </div>
              </div>
              {/* div for blog writer */}
              <div style={{ borderTop: "3px solid black" }}>
                <div className="details-about-blog-writer">
                  <div className="profile-img-of-blogger">
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={userlogo}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="name-of-blogger-and-read-more-button">
                    <div className="name-of-blogger">
                      <p>About Kristin Lajeunesse</p>
                    </div>
                    <div className="read-more-of-blogger">
                      <div>
                        {" "}
                        <p>Read More</p>
                      </div>
                      <div>
                        <img
                          src={nextimg}
                          style={{ height: "28px", width: "28px" }}
                          alt="arrow img"
                          srcset=""
                        />
                      </div>
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
};

export default SingleBlogPreview;
