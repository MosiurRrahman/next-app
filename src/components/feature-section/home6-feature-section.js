import Link from 'next/link'
import React from 'react'

const Home6FeatureSection = () => {
  return (
    <>
      <div className="home6-feature-section mb-130" id="feature-section">
  <div className="container-lg container-fluid">
    <div className="row justify-content-center mb-70">
      <div className="col-lg-6">
        <div className="section-title3 text-center text-animation">
          <h2>Key Features</h2>
          <p>These features collectively contribute to a well-rounded Project Management System
            that helps teams efficiently plan, execute.</p>
        </div>
      </div>
    </div>
    <div className="row g-4 mb-50">
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-card magnetic-item">
          <div className="icon">
            <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.9375 12.75V15.25C9.9375 15.9959 10.2338 16.7113 10.7613 17.2387C11.2887 17.7662 12.0041 18.0625 12.75 18.0625H15.25C15.9959 18.0625 16.7113 17.7662 17.2387 17.2387C17.7662 16.7113 18.0625 15.9959 18.0625 15.25V12.75C18.0625 12.0041 17.7662 11.2887 17.2387 10.7613C16.7113 10.2338 15.9959 9.9375 15.25 9.9375H12.75C12.0041 9.9375 11.2887 10.2338 10.7613 10.7613C10.2338 11.2887 9.9375 12.0041 9.9375 12.75ZM11.8125 12.75C11.8125 12.5013 11.9113 12.2625 12.0875 12.0875C12.1743 12.0003 12.2776 11.931 12.3913 11.8838C12.505 11.8366 12.6269 11.8124 12.75 11.8125H15.25C15.4987 11.8125 15.7375 11.9113 15.9125 12.0875C16.0887 12.2625 16.1875 12.5013 16.1875 12.75V15.25C16.1875 15.4987 16.0887 15.7375 15.9125 15.9125C15.8257 15.9997 15.7224 16.069 15.6087 16.1162C15.495 16.1634 15.3731 16.1876 15.25 16.1875H12.75C12.6269 16.1876 12.505 16.1634 12.3913 16.1162C12.2776 16.069 12.1743 15.9997 12.0875 15.9125C12.0003 15.8257 11.931 15.7224 11.8838 15.6087C11.8366 15.495 11.8124 15.3731 11.8125 15.25V12.75ZM0.5625 3.375V5.875C0.5625 6.62092 0.858816 7.33629 1.38626 7.86374C1.91371 8.39118 2.62908 8.6875 3.375 8.6875H5.875C6.62092 8.6875 7.33629 8.39118 7.86374 7.86374C8.39118 7.33629 8.6875 6.62092 8.6875 5.875V3.375C8.6875 2.62908 8.39118 1.91371 7.86374 1.38626C7.33629 0.858816 6.62092 0.5625 5.875 0.5625H3.375C2.62908 0.5625 1.91371 0.858816 1.38626 1.38626C0.858816 1.91371 0.5625 2.62908 0.5625 3.375ZM2.4375 3.375C2.4375 3.12625 2.53625 2.8875 2.7125 2.7125C2.79935 2.62525 2.90259 2.55604 3.01629 2.50885C3.12999 2.46165 3.2519 2.4374 3.375 2.4375H5.875C6.12375 2.4375 6.3625 2.53625 6.5375 2.7125C6.71375 2.8875 6.8125 3.12625 6.8125 3.375V5.875C6.8125 6.12375 6.71375 6.3625 6.5375 6.5375C6.45065 6.62475 6.34741 6.69396 6.23371 6.74115C6.12001 6.78835 5.9981 6.8126 5.875 6.8125H3.375C3.2519 6.8126 3.12999 6.78835 3.01629 6.74115C2.90259 6.69396 2.79935 6.62475 2.7125 6.5375C2.62525 6.45065 2.55604 6.34741 2.50885 6.23371C2.46165 6.12001 2.4374 5.9981 2.4375 5.875V3.375ZM19.3125 22.125V24.625C19.3125 25.3709 19.6088 26.0863 20.1363 26.6137C20.6637 27.1412 21.3791 27.4375 22.125 27.4375H24.625C25.3709 27.4375 26.0863 27.1412 26.6137 26.6137C27.1412 26.0863 27.4375 25.3709 27.4375 24.625V22.125C27.4375 21.3791 27.1412 20.6637 26.6137 20.1363C26.0863 19.6088 25.3709 19.3125 24.625 19.3125H22.125C21.3791 19.3125 20.6637 19.6088 20.1363 20.1363C19.6088 20.6637 19.3125 21.3791 19.3125 22.125ZM21.1875 22.125C21.1875 21.8762 21.2862 21.6375 21.4625 21.4625C21.5493 21.3753 21.6526 21.306 21.7663 21.2588C21.88 21.2117 22.0019 21.1874 22.125 21.1875H24.625C24.8738 21.1875 25.1125 21.2862 25.2875 21.4625C25.4638 21.6375 25.5625 21.8762 25.5625 22.125V24.625C25.5625 24.8738 25.4638 25.1125 25.2875 25.2875C25.2007 25.3747 25.0974 25.444 24.9837 25.4912C24.87 25.5383 24.7481 25.5626 24.625 25.5625H22.125C22.0019 25.5626 21.88 25.5383 21.7663 25.4912C21.6526 25.444 21.5493 25.3747 21.4625 25.2875C21.3753 25.2007 21.306 25.0974 21.2588 24.9837C21.2117 24.87 21.1874 24.7481 21.1875 24.625V22.125Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.75 5.5625H24C24.4142 5.56316 24.8112 5.72799 25.1041 6.02088C25.397 6.31376 25.5618 6.7108 25.5625 7.125V11.5C25.5618 11.9142 25.397 12.3112 25.1041 12.6041C24.8112 12.897 24.4142 13.0618 24 13.0625H20.25C20.0014 13.0625 19.7629 13.1613 19.5871 13.3371C19.4113 13.5129 19.3125 13.7514 19.3125 14C19.3125 14.2486 19.4113 14.4871 19.5871 14.6629C19.7629 14.8387 20.0014 14.9375 20.25 14.9375H24C24.9112 14.9375 25.7862 14.575 26.4312 13.9312C27.0753 13.286 27.4371 12.4117 27.4375 11.5V7.125C27.4375 6.21375 27.075 5.33875 26.4312 4.69375C25.786 4.04974 24.9117 3.68788 24 3.6875H7.75C7.50136 3.6875 7.2629 3.78627 7.08709 3.96209C6.91127 4.1379 6.8125 4.37636 6.8125 4.625C6.8125 4.87364 6.91127 5.1121 7.08709 5.28791C7.2629 5.46373 7.50136 5.5625 7.75 5.5625ZM15.25 22.4375H4C3.5858 22.4368 3.18876 22.272 2.89588 21.9791C2.60299 21.6862 2.43816 21.2892 2.4375 20.875V16.5C2.43816 16.0858 2.60299 15.6888 2.89588 15.3959C3.18876 15.103 3.5858 14.9382 4 14.9375H10.875C11.1236 14.9375 11.3621 14.8387 11.5379 14.6629C11.7137 14.4871 11.8125 14.2486 11.8125 14C11.8125 13.7514 11.7137 13.5129 11.5379 13.3371C11.3621 13.1613 11.1236 13.0625 10.875 13.0625H4C3.08875 13.0625 2.21375 13.425 1.56875 14.0688C0.924744 14.714 0.562883 15.5883 0.5625 16.5V20.875C0.5625 21.7862 0.925 22.6612 1.56875 23.3062C2.21403 23.9503 3.08834 24.3121 4 24.3125H15.25C15.4986 24.3125 15.7371 24.2137 15.9129 24.0379C16.0887 23.8621 16.1875 23.6236 16.1875 23.375C16.1875 23.1264 16.0887 22.8879 15.9129 22.7121C15.7371 22.5363 15.4986 22.4375 15.25 22.4375Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M23.4119 15.8375L21.5757 14L23.4119 12.1625C23.4989 12.0755 23.5679 11.9722 23.615 11.8586C23.6621 11.7449 23.6863 11.6231 23.6863 11.5C23.6863 11.377 23.6621 11.2552 23.615 11.1415C23.5679 11.0278 23.4989 10.9245 23.4119 10.8375C23.3249 10.7505 23.2216 10.6815 23.108 10.6344C22.9943 10.5873 22.8725 10.5631 22.7494 10.5631C22.6264 10.5631 22.5045 10.5873 22.3909 10.6344C22.2772 10.6815 22.1739 10.7505 22.0869 10.8375L19.5869 13.3375C19.4998 13.4245 19.4308 13.5278 19.3836 13.6414C19.3365 13.7551 19.3122 13.877 19.3122 14C19.3122 14.1231 19.3365 14.2449 19.3836 14.3586C19.4308 14.4723 19.4998 14.5756 19.5869 14.6625L22.0869 17.1625C22.1739 17.2495 22.2772 17.3185 22.3909 17.3656C22.5045 17.4127 22.6264 17.4369 22.7494 17.4369C22.8725 17.4369 22.9943 17.4127 23.108 17.3656C23.2216 17.3185 23.3249 17.2495 23.4119 17.1625C23.4989 17.0755 23.5679 16.9722 23.615 16.8586C23.6621 16.7449 23.6863 16.6231 23.6863 16.5C23.6863 16.377 23.6621 16.2552 23.615 16.1415C23.5679 16.0278 23.4989 15.9245 23.4119 15.8375ZM14.6619 26.5375L17.1619 24.0375C17.249 23.9506 17.3181 23.8473 17.3652 23.7336C17.4123 23.6199 17.4366 23.4981 17.4366 23.375C17.4366 23.252 17.4123 23.1301 17.3652 23.0164C17.3181 22.9028 17.249 22.7995 17.1619 22.7125L14.6619 20.2125C14.4862 20.0368 14.2479 19.9381 13.9994 19.9381C13.7509 19.9381 13.5126 20.0368 13.3369 20.2125C13.1612 20.3882 13.0625 20.6265 13.0625 20.875C13.0625 21.1235 13.1612 21.3618 13.3369 21.5375L15.1732 23.375L13.3369 25.2125C13.2499 25.2995 13.1809 25.4028 13.1338 25.5165C13.0867 25.6302 13.0625 25.752 13.0625 25.875C13.0625 25.9981 13.0867 26.1199 13.1338 26.2336C13.1809 26.3472 13.2499 26.4505 13.3369 26.5375C13.4239 26.6245 13.5272 26.6935 13.6409 26.7406C13.7545 26.7877 13.8764 26.8119 13.9994 26.8119C14.1225 26.8119 14.2443 26.7877 14.358 26.7406C14.4716 26.6935 14.5749 26.6245 14.6619 26.5375Z" />
            </svg>
          </div>
          <div className="content">
            <h5>Task &amp; Project Planning</h5>
            <p>Intuitive task creation and assignment Gantt charts for visual project timelines
              and dependencies.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-card magnetic-item">
          <div className="icon">
            <svg width={30} height={30} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.03 28.9">
              <path className="cls-1" d="M18.36,26.62a10.16,10.16,0,0,1-6.71,0,7.48,7.48,0,0,1-1.56,1.81,12.44,12.44,0,0,0,9.82,0A7.44,7.44,0,0,1,18.36,26.62ZM8.4,9.38a7.73,7.73,0,0,1-.79-2.25A12.41,12.41,0,0,0,2.7,15.64a7.31,7.31,0,0,1,2.35-.45A10.13,10.13,0,0,1,8.4,9.38ZM25,15.19a7.25,7.25,0,0,1,2.34.45,12.38,12.38,0,0,0-4.91-8.51,7.44,7.44,0,0,1-.79,2.25A10.19,10.19,0,0,1,25,15.19Z" transform="translate(0.02 -0.54)" />
              <path className="cls-1" d="M15,.54a5.27,5.27,0,1,0,5.27,5.27A5.27,5.27,0,0,0,15,.54Zm0,8.52A3.27,3.27,0,1,1,18.28,5.8,3.26,3.26,0,0,1,15,9.06Z" transform="translate(0.02 -0.54)" />
              <path className="cls-1" d="M24.75,17.42A5.27,5.27,0,1,0,30,22.69,5.27,5.27,0,0,0,24.75,17.42Zm0,8.52A3.27,3.27,0,1,1,28,22.68,3.26,3.26,0,0,1,24.76,25.94Z" transform="translate(0.02 -0.54)" />
              <path className="cls-1" d="M5.25,17.42a5.27,5.27,0,1,0,5.27,5.27A5.27,5.27,0,0,0,5.25,17.42Zm0,8.52a3.27,3.27,0,1,1,3.27-3.26A3.26,3.26,0,0,1,5.26,25.94Z" transform="translate(0.02 -0.54)" />
            </svg>
          </div>
          <div className="content">
            <h5>Collaboration with Teams</h5>
            <p>Real-time chat, comments, and file sharing within tasks. Activity feed for
              tracking project.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-card magnetic-item">
          <div className="icon">
            <svg width={30} height={29} viewBox="0 0 30 29" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.6602 23.5608C26.0623 23.5618 25.4824 23.7654 25.0149 24.1382C24.5475 24.511 24.2202 25.0312 24.0863 25.6139H20.4399C20.3502 25.6137 20.2643 25.578 20.2008 25.5145C20.1374 25.4511 20.1017 25.3652 20.1014 25.2755V21.7289C21.6316 19.8068 22.4657 17.4231 22.4677 14.9663C22.4677 14.7487 22.3813 14.5401 22.2274 14.3862C22.0736 14.2324 21.8649 14.146 21.6474 14.146H12.4974V4.93128C12.4974 4.71372 12.411 4.50507 12.2571 4.35123C12.1033 4.19739 11.8946 4.11097 11.6771 4.11097H11.6119C9.46696 4.10886 7.36954 4.74272 5.58477 5.93241C3.79999 7.12211 2.40799 8.81424 1.58472 10.7949C0.761454 12.7756 0.543875 14.9558 0.95949 17.0601C1.3751 19.1644 2.40525 21.0983 3.91972 22.6172C3.92957 22.6285 3.93707 22.6407 3.94785 22.6519C3.9591 22.6632 3.97269 22.6711 3.98441 22.6819C5.71258 24.4011 7.97202 25.4843 10.3946 25.755C10.8048 25.8 11.2171 25.8225 11.6297 25.8225C14.1219 25.8268 16.5375 24.9616 18.4603 23.3761V25.275C18.461 25.7998 18.6697 26.303 19.0408 26.6741C19.4119 27.0452 19.9151 27.2539 20.4399 27.2546H24.2368C24.4265 27.6917 24.7309 28.0694 25.1178 28.3476C25.5047 28.6258 25.9596 28.7942 26.4344 28.8349C26.9092 28.8756 27.3862 28.7872 27.8148 28.5789C28.2434 28.3707 28.6077 28.0504 28.8691 27.6519C29.1305 27.2535 29.2793 26.7918 29.2997 26.3157C29.32 25.8396 29.2113 25.3668 28.9849 24.9475C28.7585 24.5282 28.4229 24.1779 28.0136 23.9338C27.6044 23.6897 27.1367 23.5608 26.6602 23.5608ZM4.74144 8.82659C6.31569 7.06734 8.50409 5.978 10.8568 5.78253V14.625L4.55675 20.8889C3.1299 19.1931 2.36293 17.0393 2.39678 14.8234C2.43062 12.6074 3.263 10.478 4.74097 8.82659H4.74144ZM17.7633 21.8288C16.1172 23.3066 13.9939 24.142 11.7821 24.182C9.57037 24.222 7.4182 23.464 5.71972 22.0467L12.016 15.7866H20.7905C20.5814 18.1108 19.4995 20.2696 17.7633 21.8288ZM26.6602 27.2053C26.4621 27.2053 26.2684 27.1466 26.1037 27.0365C25.9389 26.9265 25.8105 26.77 25.7347 26.587C25.6589 26.4039 25.6391 26.2025 25.6777 26.0082C25.7164 25.8139 25.8118 25.6354 25.9519 25.4953C26.092 25.3552 26.2705 25.2598 26.4648 25.2212C26.6591 25.1825 26.8605 25.2023 27.0435 25.2782C27.2266 25.354 27.383 25.4824 27.4931 25.6471C27.6032 25.8118 27.6619 26.0055 27.6619 26.2036C27.6614 26.4691 27.5557 26.7236 27.3679 26.9112C27.1802 27.0989 26.9257 27.205 26.6602 27.2053Z" />
              <path d="M15.0091 12.9277H23.9791C24.1966 12.9277 24.4053 12.8413 24.5591 12.6874C24.7129 12.5336 24.7994 12.3249 24.7994 12.1074C24.7963 11.3554 24.7108 10.6061 24.5444 9.87284H25.5006C26.0254 9.87222 26.5286 9.66346 26.8997 9.29236C27.2708 8.92126 27.4795 8.41812 27.4802 7.8933V6.12799C28.078 5.93278 28.5867 5.53074 28.9147 4.99413C29.2427 4.45752 29.3687 3.82151 29.2698 3.2004C29.171 2.57928 28.8539 2.01377 28.3755 1.60548C27.8971 1.1972 27.2888 0.9729 26.6598 0.9729C26.0309 0.9729 25.4226 1.1972 24.9442 1.60548C24.4658 2.01377 24.1487 2.57928 24.0499 3.2004C23.951 3.82151 24.0769 4.45752 24.405 4.99413C24.733 5.53074 25.2417 5.93278 25.8395 6.12799V7.8933C25.8394 7.98315 25.8037 8.06928 25.7401 8.13281C25.6766 8.19634 25.5905 8.23209 25.5006 8.23221H24.0358C23.5797 7.10725 22.9281 6.07191 22.1111 5.17409L22.1102 5.17362C21.1526 4.13003 19.9907 3.29452 18.6966 2.719C17.4025 2.14348 16.0039 1.84025 14.5877 1.82815C14.3704 1.83338 14.1627 1.9183 14.0041 2.06674C13.9273 2.1429 13.8663 2.23351 13.8247 2.33336C13.7831 2.4332 13.7617 2.5403 13.7617 2.64846V11.6799C13.7621 12.0104 13.8936 12.3274 14.1273 12.5611C14.3611 12.7949 14.678 12.9264 15.0086 12.9267L15.0091 12.9277ZM26.6598 2.61565C26.858 2.61574 27.0516 2.67458 27.2163 2.78473C27.381 2.89488 27.5093 3.05138 27.585 3.23446C27.6608 3.41753 27.6805 3.61896 27.6418 3.81325C27.603 4.00755 27.5075 4.18599 27.3674 4.32602C27.2272 4.46605 27.0487 4.56137 26.8543 4.59993C26.66 4.63849 26.4586 4.61856 26.2756 4.54265C26.0926 4.46675 25.9362 4.33829 25.8262 4.1735C25.7162 4.00872 25.6576 3.81502 25.6577 3.6169C25.6582 3.35134 25.7639 3.09681 25.9518 2.90912C26.1397 2.72143 26.3943 2.6159 26.6598 2.61565ZM15.4023 3.51424C17.3893 3.71739 19.2443 4.60307 20.6515 6.02044C22.0587 7.43781 22.931 9.29919 23.1198 11.2875H15.4023V3.51424Z" />
            </svg>
          </div>
          <div className="content">
            <h5>Resource Allocation</h5>
            <p>Easily allocate and manage team resources. View and balance workloads to optimize
              team</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-card magnetic-item">
          <div className="icon">
            <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M-0.121094 15C-0.121094 23.3188 6.68121 30.1211 15 30.1211C23.3187 30.1211 30.121 23.3188 30.121 15C30.121 6.6813 23.3187 -0.121008 15 -0.121008C6.68121 -0.121008 -0.121094 6.6813 -0.121094 15ZM15 28.1211C7.78578 28.1211 1.87891 22.2142 1.87891 15C1.87891 7.78587 7.78578 1.87899 15 1.87899C22.2141 1.87899 28.121 7.78587 28.121 15C28.121 22.2142 22.2141 28.1211 15 28.1211Z" />
                <path d="M6.92149 21.8365C7.26473 21.4933 7.8212 21.4933 8.16444 21.8365C8.50768 22.1798 8.50768 22.7362 8.16444 23.0795C7.8212 23.4227 7.26473 23.4227 6.92149 23.0795C6.57825 22.7362 6.57825 22.1798 6.92149 21.8365Z" />
                <path d="M21.8356 6.92052C22.1787 6.57728 22.7353 6.57728 23.0785 6.92052C23.4217 7.26376 23.4217 7.82023 23.0785 8.16347C22.7353 8.50671 22.1787 8.50671 21.8356 8.16347C21.4923 7.82023 21.4923 7.26376 21.8356 6.92052Z" />
                <path d="M8.16444 6.92052C8.50768 7.26376 8.50768 7.82023 8.16444 8.16347C7.82126 8.50671 7.26473 8.50671 6.92149 8.16347C6.57825 7.82023 6.57825 7.26376 6.92149 6.92052C7.26473 6.57728 7.82126 6.57728 8.16444 6.92052Z" />
                <path d="M23.0785 21.8365C23.4217 22.1798 23.4217 22.7362 23.0785 23.0795C22.7353 23.4227 22.1788 23.4227 21.8356 23.0795C21.4923 22.7362 21.4923 22.1798 21.8356 21.8365C22.1788 21.4933 22.7353 21.4933 23.0785 21.8365Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.9999 7.21094C15.5522 7.21094 15.9999 6.76322 15.9999 6.21094V4.45313C15.9999 3.90085 15.5522 3.45313 14.9999 3.45313C14.4477 3.45313 13.9999 3.90085 13.9999 4.45313V6.21094C13.9999 6.76322 14.4477 7.21094 14.9999 7.21094Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.9999 26.5469C15.5522 26.5469 15.9999 26.0992 15.9999 25.5469V23.7891C15.9999 23.2368 15.5522 22.7891 14.9999 22.7891C14.4477 22.7891 13.9999 23.2368 13.9999 23.7891V25.5469C13.9999 26.0992 14.4477 26.5469 14.9999 26.5469Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M3.45312 15C3.45312 15.5523 3.90084 16 4.45312 16H6.21093C6.76322 16 7.21093 15.5523 7.21093 15C7.21093 14.4477 6.76322 14 6.21093 14H4.45312C3.90084 14 3.45312 14.4477 3.45312 15Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22.789 15C22.789 15.5523 23.2367 16 23.789 16H25.5468C26.0991 16 26.5468 15.5523 26.5468 15C26.5468 14.4477 26.0991 14 25.5468 14H23.789C23.2367 14 22.789 14.4477 22.789 15Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M20.9805 20.9805C21.371 20.59 21.371 19.9569 20.9805 19.5663L15.9999 14.5858V9.72659C15.9999 9.17431 15.5522 8.72659 14.9999 8.72659C14.4477 8.72659 13.9999 9.17431 13.9999 9.72659V15C13.9999 15.2652 14.1053 15.5196 14.2928 15.7071L19.5663 20.9805C19.9568 21.3711 20.5899 21.3711 20.9805 20.9805Z" />
              </g>
            </svg>
          </div>
          <div className="content">
            <h5>Project Time Tracking</h5>
            <p>Accurate time tracking for tasks &amp; projects. Generate reports for project
              analysis and billing purposes.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-card magnetic-item">
          <div className="icon">
            <svg width={30} height={28} viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.54675 21.4842C1.13686 21.4831 0.744077 21.3198 0.454243 21.03C0.164408 20.7401 0.00109596 20.3473 0 19.9375L0 2.03393C0.00109596 1.62404 0.164408 1.23126 0.454243 0.941426C0.744077 0.651591 1.13686 0.488279 1.54675 0.487183H28.4539C28.8637 0.488461 29.2563 0.651854 29.546 0.941669C29.8357 1.23148 29.9989 1.62416 30 2.03393V19.9375C29.9989 20.3473 29.8356 20.7401 29.5458 21.03C29.2559 21.3198 28.8631 21.4831 28.4532 21.4842H1.54675ZM2.00904 19.4752H27.991V2.49623H2.00904V19.4752ZM10.3601 27.5127V24.7763H19.6392V27.5127H10.3601Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M12.5985 24.9431H17.4034L16.6242 21.3174H13.3784L12.5985 24.9431ZM12.5625 11.9705C12.8296 10.203 13.865 9.78705 14.1826 9.21887C14.2077 9.17821 14.221 9.13136 14.221 9.08357C14.221 9.03578 14.2077 8.98893 14.1826 8.94828C13.8643 8.3801 12.8296 7.96417 12.5632 6.19666H17.4394C17.1723 7.96417 16.137 8.3801 15.8193 8.94828C15.7943 8.98886 15.7811 9.03557 15.7811 9.08323C15.7811 9.13088 15.7943 9.1776 15.8193 9.21818C16.1377 9.78705 17.1723 10.203 17.4394 11.9705H12.5625Z" />
              <path d="M17.9576 4.21533H12.0412C11.8631 4.21533 11.7188 4.35972 11.7188 4.53783V5.20774C11.7188 5.38585 11.8631 5.53024 12.0412 5.53024H17.9576C18.1358 5.53024 18.2801 5.38585 18.2801 5.20774V4.53783C18.2801 4.35972 18.1358 4.21533 17.9576 4.21533Z" />
              <path d="M17.9576 12.637H12.0412C11.8631 12.637 11.7188 12.7814 11.7188 12.9595V13.6294C11.7188 13.8075 11.8631 13.9519 12.0412 13.9519H17.9576C18.1358 13.9519 18.2801 13.8075 18.2801 13.6294V12.9595C18.2801 12.7814 18.1358 12.637 17.9576 12.637Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M6.57176 15.2626H23.4282C23.6469 15.2626 23.8261 15.4418 23.8261 15.6605V17.3581C23.8258 17.4635 23.7837 17.5646 23.7092 17.6391C23.6346 17.7136 23.5336 17.7557 23.4282 17.7561H6.57176C6.46634 17.7557 6.36533 17.7136 6.29078 17.6391C6.21624 17.5646 6.17419 17.4635 6.17383 17.3581V15.6605C6.17383 15.4418 6.35307 15.2626 6.57176 15.2626ZM7.2742 16.1761H17.282V16.8425H7.27489L7.2742 16.1761Z" />
            </svg>
          </div>
          <div className="content">
            <h5>Progress Monitoring</h5>
            <p>Real-time project status updates. Visual indicators for task completion and
              overall project</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-card magnetic-item">
          <div className="icon">
            <svg width={28} height={22} viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4188 9.47188C19.4966 9.56777 19.5548 9.67811 19.5899 9.79656C19.625 9.915 19.6363 10.0392 19.6232 10.162C19.6102 10.2849 19.573 10.4039 19.5137 10.5123C19.4545 10.6208 19.3744 10.7164 19.2781 10.7938L12.95 15.9125C12.7825 16.0468 12.5741 16.1197 12.3594 16.1188C12.2292 16.1196 12.1004 16.0934 11.9809 16.0418C11.8615 15.9901 11.7541 15.9142 11.6656 15.8188L9.55625 13.5031C9.46503 13.4136 9.39307 13.3064 9.34478 13.1881C9.29649 13.0698 9.27291 12.9429 9.27546 12.8151C9.27802 12.6874 9.30667 12.5615 9.35965 12.4452C9.41263 12.3289 9.48882 12.2247 9.58355 12.1389C9.67827 12.0532 9.78953 11.9877 9.9105 11.9465C10.0315 11.9053 10.1596 11.8892 10.2869 11.8993C10.4143 11.9094 10.5383 11.9455 10.6513 12.0052C10.7642 12.065 10.8637 12.1472 10.9437 12.2469L12.4531 13.8969L18.0781 9.33125C18.1745 9.25045 18.2862 9.18986 18.4064 9.1531C18.5267 9.11633 18.6532 9.10415 18.7783 9.11727C18.9033 9.13039 19.0245 9.16855 19.1345 9.22947C19.2446 9.29039 19.3412 9.37283 19.4188 9.47188ZM27.125 4.4375V18.5C27.125 19.2459 26.8287 19.9613 26.3012 20.4887C25.7738 21.0162 25.0584 21.3125 24.3125 21.3125H3.6875C2.94158 21.3125 2.22621 21.0162 1.69876 20.4887C1.17132 19.9613 0.875 19.2459 0.875 18.5V3.5C0.875 2.75408 1.17132 2.03871 1.69876 1.51126C2.22621 0.983819 2.94158 0.687502 3.6875 0.687502H10.9625C11.3588 0.686983 11.7508 0.770235 12.1127 0.9318C12.4746 1.09336 12.7983 1.32959 13.0625 1.625H24.3125C25.0584 1.625 25.7738 1.92132 26.3012 2.44876C26.8287 2.97621 27.125 3.69158 27.125 4.4375ZM24.3125 3.5H14.1125L14.3188 3.92188C14.3974 4.07791 14.518 4.20887 14.6671 4.29998C14.8162 4.39109 14.9878 4.43872 15.1625 4.4375H24.3125C24.6323 4.44004 24.9494 4.49711 25.25 4.60625V4.4375C25.25 4.18886 25.1512 3.95041 24.9754 3.77459C24.7996 3.59877 24.5611 3.5 24.3125 3.5ZM25.25 8.1875V7.25C25.25 7.00136 25.1512 6.76291 24.9754 6.58709C24.7996 6.41127 24.5611 6.3125 24.3125 6.3125H15.1625C14.639 6.31353 14.1255 6.16841 13.68 5.89346C13.2344 5.61852 12.8745 5.22467 12.6406 4.75625L11.8062 3.07813C11.7276 2.92209 11.607 2.79114 11.4579 2.70003C11.3088 2.60892 11.1372 2.56129 10.9625 2.5625H3.6875C3.43886 2.5625 3.2004 2.66127 3.02459 2.83709C2.84877 3.01291 2.75 3.25136 2.75 3.5V18.5C2.75 18.7486 2.84877 18.9871 3.02459 19.1629C3.2004 19.3387 3.43886 19.4375 3.6875 19.4375H24.3125C24.5611 19.4375 24.7996 19.3387 24.9754 19.1629C25.1512 18.9871 25.25 18.7486 25.25 18.5V8.1875Z" />
            </svg>
          </div>
          <div className="content">
            <h5>Document Management</h5>
            <p>Centralized document storage with version control. Integration with cloud storage
              services.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-card magnetic-item">
          <div className="icon">
            <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M-0.121094 20.7422C-0.121094 22.2653 1.11365 23.5 2.63671 23.5H27.3632C28.8863 23.5 30.121 22.2653 30.121 20.7422V3.63287C30.121 2.10981 28.8863 0.875061 27.3632 0.875061H2.63671C1.11365 0.875061 -0.121094 2.10981 -0.121094 3.63287V20.7422ZM2.63671 21.5C2.21822 21.5 1.87891 21.1607 1.87891 20.7422V3.63287C1.87891 3.21437 2.21822 2.87506 2.63671 2.87506H27.3632C27.7817 2.87506 28.121 3.21437 28.121 3.63287V20.7422C28.121 21.1607 27.7817 21.5 27.3632 21.5H2.63671Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.487 28.7714C10.677 28.9957 10.956 29.125 11.25 29.125H18.75C19.0439 29.125 19.323 28.9957 19.513 28.7714C19.703 28.5471 19.7847 28.2506 19.7363 27.9606L18.7989 22.3356C18.7185 21.8534 18.3013 21.5 17.8125 21.5H12.1875C11.6986 21.5 11.2814 21.8534 11.2011 22.3356L10.2636 27.9606C10.2153 28.2506 10.297 28.5471 10.487 28.7714ZM12.4304 27.125L13.0346 23.5H16.9653L17.5695 27.125H12.4304Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.37497 28.125C8.37497 28.6773 8.82268 29.125 9.37497 29.125H20.6249C21.1772 29.125 21.6249 28.6773 21.6249 28.125C21.6249 27.5727 21.1772 27.125 20.6249 27.125H9.37497C8.82268 27.125 8.37497 27.5727 8.37497 28.125Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M3.6875 16.875C3.6875 17.4273 4.13522 17.875 4.6875 17.875H12.1875C12.7398 17.875 13.1875 17.4273 13.1875 16.875C13.1875 16.3227 12.7398 15.875 12.1875 15.875H5.6875V7.50003C5.6875 6.94774 5.23978 6.50003 4.6875 6.50003C4.13522 6.50003 3.6875 6.94774 3.6875 7.50003V16.875Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.43747 17.875C8.98975 17.875 9.43747 17.4273 9.43747 16.875V10.3125C9.43747 9.76023 8.98975 9.31252 8.43747 9.31252C7.88518 9.31252 7.43747 9.76023 7.43747 10.3125V16.875C7.43747 17.4273 7.88518 17.875 8.43747 17.875Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.1875 17.875C12.7398 17.875 13.1875 17.4273 13.1875 16.875V13.125C13.1875 12.5727 12.7398 12.125 12.1875 12.125C11.6352 12.125 11.1875 12.5727 11.1875 13.125V16.875C11.1875 17.4273 11.6352 17.875 12.1875 17.875Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.8749 12.1875C15.8749 15.0698 18.2114 17.4062 21.0937 17.4062C23.9759 17.4062 26.3124 15.0698 26.3124 12.1875C26.3124 9.30525 23.9759 6.96877 21.0937 6.96877C18.2114 6.96877 15.8749 9.30525 15.8749 12.1875ZM21.0937 15.4062C19.316 15.4062 17.8749 13.9652 17.8749 12.1875C17.8749 10.4098 19.316 8.96877 21.0937 8.96877C22.8714 8.96877 24.3124 10.4098 24.3124 12.1875C24.3124 13.9652 22.8714 15.4062 21.0937 15.4062Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M20.0937 12.1875C20.0937 12.7398 20.5414 13.1875 21.0937 13.1875H25.3124C25.8647 13.1875 26.3124 12.7398 26.3124 12.1875C26.3124 11.6352 25.8647 11.1875 25.3124 11.1875H22.0937V7.96876C22.0937 7.41648 21.646 6.96876 21.0937 6.96876C20.5414 6.96876 20.0937 7.41648 20.0937 7.96876V12.1875Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17.4042 15.878C17.7947 16.2685 18.4279 16.2685 18.8184 15.878L21.8014 12.895C22.192 12.5045 22.192 11.8713 21.8014 11.4808C21.4109 11.0903 20.7777 11.0903 20.3872 11.4808L17.4042 14.4638C17.0137 14.8543 17.0137 15.4875 17.4042 15.878Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15 4.75C15.5523 4.75 16 4.30228 16 3.75V1.87501C16 1.32272 15.5523 0.875005 15 0.875005C14.4477 0.875005 14 1.32272 14 1.87501V3.75C14 4.30228 14.4477 4.75 15 4.75Z" />
              </g>
            </svg>
          </div>
          <div className="content">
            <h5>Customizable Dashboards</h5>
            <p>Personalized dashboards for each user. Quick access to project overviews,
              upcoming tasks.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="feature-card magnetic-item">
          <div className="icon">
            <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.2422 26.5449V29.1211H14.2422V23.9771L12.9063 24.4535C12.7324 24.5155 12.5491 24.5471 12.3645 24.5469L12.3633 24.5469C11.4593 24.5469 10.7266 23.8141 10.7266 22.9102C10.7266 22.0062 11.4593 21.2735 12.3633 21.2735C12.5559 21.2735 12.7379 21.3067 12.9058 21.3666L14.2422 21.8441V14.2403C16.1946 14.1764 17.7578 12.5735 17.7578 10.6055C17.7578 8.63754 16.1946 7.03467 14.2422 6.97079V4.3946H12.2422V9.53862L13.5781 9.06217C13.752 9.00016 13.9352 8.96858 14.1198 8.96881H14.1211C15.025 8.96881 15.7578 9.70158 15.7578 10.6055C15.7578 11.5095 15.025 12.2422 14.1211 12.2422L14.1198 12.2422C13.9352 12.2425 13.752 12.2109 13.5781 12.1489L12.2422 11.6724V19.2754C10.2897 19.3393 8.72656 20.9422 8.72656 22.9102C8.72656 24.8782 10.2897 26.481 12.2422 26.5449ZM12.3633 26.5469C12.3634 26.5469 12.3631 26.5469 12.3633 26.5469V25.5469L12.362 26.5469C12.3623 26.5469 12.363 26.5469 12.3633 26.5469ZM14.1224 14.2422C14.1226 14.2422 14.1221 14.2422 14.1224 14.2422L14.1211 13.2422V14.2422C14.1212 14.2422 14.1222 14.2422 14.1224 14.2422Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.7597 17.7578C15.8236 19.7103 17.4265 21.2734 19.3945 21.2734C21.3625 21.2734 22.9653 19.7103 23.0292 17.7578H25.6054V15.7578H20.4614L20.9378 17.0938C20.9998 17.2676 21.0314 17.4509 21.0312 17.6354V17.6367C21.0312 18.5407 20.2984 19.2734 19.3945 19.2734C18.4905 19.2734 17.7578 18.5407 17.7578 17.6367L17.7578 17.6354C17.7575 17.4509 17.7891 17.2676 17.8511 17.0938L18.3276 15.7578H10.7246C10.6607 13.8054 9.05781 12.2422 7.08983 12.2422C5.12184 12.2422 3.51897 13.8054 3.45509 15.7578H0.878906V17.7578H6.02295L5.54646 16.4219C5.48445 16.248 5.45288 16.0648 5.45311 15.8802L5.45312 15.8789C5.45311 14.975 6.18588 14.2422 7.08983 14.2422C7.99377 14.2422 8.72654 14.975 8.72654 15.8789L8.72654 15.8802C8.72678 16.0648 8.6952 16.248 8.63319 16.4219L8.1567 17.7578H15.7597ZM15.7578 17.638C15.7578 17.6383 15.7578 17.6378 15.7578 17.638L16.7578 17.6367H15.7578C15.7578 17.6369 15.7578 17.6378 15.7578 17.638ZM3.45311 15.8789C3.45311 15.8791 3.45311 15.8787 3.45311 15.8789H4.45311L3.45312 15.8776C3.45312 15.8779 3.45311 15.8787 3.45311 15.8789ZM10.7265 15.8776C10.7265 15.8774 10.7265 15.8779 10.7265 15.8776L9.72654 15.8789H10.7265C10.7265 15.8787 10.7265 15.8778 10.7265 15.8776Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.2421 28.1211C6.99875 28.1211 1.87891 23.0012 1.87891 16.7579C1.87891 10.5145 6.99875 5.39461 13.2421 5.39461H18.3534L17.869 4.05464C17.7932 3.84504 17.7578 3.6743 17.7578 3.5157C17.7578 2.61176 18.4905 1.87899 19.3945 1.87899C20.2984 1.87899 21.0312 2.61176 21.0312 3.5157C21.0312 3.6743 20.9957 3.84503 20.9199 4.05464L20.4356 5.39461H24.6054V9.56445L25.9454 9.08005C26.155 9.00428 26.3257 8.96881 26.4843 8.96881C27.3882 8.96881 28.121 9.70158 28.121 10.6055C28.121 11.5095 27.3882 12.2422 26.4843 12.2422C26.3257 12.2422 26.155 12.2068 25.9454 12.131L24.6054 11.6466V16.7579C24.6054 23.0012 19.4855 28.1211 13.2421 28.1211ZM-0.121094 16.7579C-0.121094 24.1058 5.89418 30.1211 13.2421 30.1211C20.5901 30.1211 26.6054 24.1058 26.6054 16.7579V14.2403C28.5578 14.1764 30.121 12.5735 30.121 10.6055C30.121 8.63754 28.5578 7.03467 26.6054 6.97079V3.39461H23.0292C22.9653 1.44215 21.3625 -0.121008 19.3945 -0.121008C17.4265 -0.121008 15.8236 1.44215 15.7597 3.39461H13.2421C5.89418 3.39461 -0.121094 9.40988 -0.121094 16.7579Z" />
              </g>
            </svg>
          </div>
          <div className="content">
            <h5>Integration with Third-Party</h5>
            <p>Seamless integration with popular tools like <span>Google Calendar, Dropbox, &amp;
                Slack.</span> API support for custom.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-area">
      <p>Have an questions? </p>
      <Link href="/contact">
        Contact Now
        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </Link>
    </div>
  </div>
</div>
    </>
  )
}

export default Home6FeatureSection
