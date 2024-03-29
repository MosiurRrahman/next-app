"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Import ScrollTrigger from the correct location

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const Home6ProjecManagement = () => {
  useEffect(() => {
    const drawLine2 = gsap.timeline();

    // Define the SVG path animation
    drawLine2.fromTo(
      "#route-2",
      { drawSVG: "0%" },
      { duration: 6, drawSVG: "100%" }
    );

    // Create a ScrollTrigger to trigger animation at a certain scroll position
    ScrollTrigger.create({
      trigger: "#solution-section",
      animation: drawLine2,
      start: "top center", // Trigger animation when the top of the trigger element hits the center of the viewport
      end: "bottom center", // End animation when the bottom of the trigger element hits the center of the viewport
      scrub: 4, // Smoothly scrub through the animation over a duration of 4
    });
  }, []);
  return (
    <>
      <div
        className="home6-project-management-section mb-130"
        id="solution-section"
      >
        <svg
          className="scroll-svg"
          viewBox="0 0 1578 1063"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="route-2"
            d="M10.5 10C99.5 153 388.2 168.8 787 172C1185.8 175.2 1426.17 281.667 1496.5 334.5C1611.5 420.886 1574.58 547.5 684.5 547.5C-208 547.5 -60.5 999 486.5 900C958.47 814.579 1497 872 1567.5 1053"
            strokeWidth={20}
            strokeLinecap="round"
          />
        </svg>
        <div className="container-lg container-fluid">
          <div className="row mb-70">
            <div className="col-lg-8">
              <div className="section-title3 text-animation">
                <h2>Meet Your Smart Assistant.</h2>
                <p>
                  Streamlines project planning, task assignment, and tracking,
                  ensuring teams stay organized and meet deadlines.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-5 position-relative">
            <div className="col-lg-6">
              <div className="single-project magnetic-item">
                <div className="content">
                  <h3>1. Collaboration with Teams</h3>
                  <ul>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>{" "}
                      Real-time chat, comments, and file sharing within tasks.
                    </li>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>{" "}
                      Activity feed for tracking project updates and changes.
                    </li>
                  </ul>
                  <a href="#">
                    Get Free Trial
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="single-project-img">
                  <img src="assets/img/home6/single-project-img1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-project magnetic-item">
                <div className="content">
                  <h3>2. Project Time Tracking</h3>
                  <ul>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Accurate time tracking for tasks and projects.
                    </li>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>{" "}
                      Generate reports for project analysis and billing
                      purposes.
                    </li>
                  </ul>
                  <a href="#">
                    Get Free Trial
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="single-project-img">
                  <img src="assets/img/home6/single-project-img2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-project magnetic-item">
                <div className="content">
                  <h3>3. Progress Monitoring</h3>
                  <ul>
                    <li>
                      {" "}
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Real-time project status updates.
                    </li>
                    <li>
                      {" "}
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Visual indicators for task completion and overall project.
                    </li>
                  </ul>
                  <a href="#">
                    Get Free Trial
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="single-project-img">
                  <img src="assets/img/home6/single-project-img3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-project magnetic-item">
                <div className="content">
                  <h3>4. Customizable Dashboards </h3>
                  <ul>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Personalized dashboards for each user.
                    </li>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Quick access to project overviews, upcoming tasks.
                    </li>
                  </ul>
                  <a href="#">
                    Get Free Trial
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="single-project-img">
                  <img src="assets/img/home6/single-project-img4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6ProjecManagement;
