import Link from "next/link";
import { Company } from "./components/Company";
import { Skill } from "./components/Skill";

export default function Home() {
  return (
    <>
      <header className="container font-medium mt-8">
        <p className="text-muted-foreground">
          I work at Ortelius as a frontend and backend developer. I've been
          coding for 4 years. I'm passionate about crafting clean user
          interfaces and thoughtful user experiences.
        </p>
        <p className="mt-4 text-muted-foreground">
          In my free time, I'm learning Korean. I also enjoy sports, music, and
          fashion.
        </p>
      </header>
      <section id="experience" className="container mt-12 sm:mt-16">
        <h2 className="font-medium">
          <Link href="#experience" className="group relative">
            <span className="absolute flex h-[1lh] items-center px-2 opacity-0 transition-opacity group-hover:opacity-100 max-md:left-full md:right-full">
              <svg width="1em" height="1em" className="size-4" data-icon="hash">
                <symbol id="ai:local:hash" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 9h16M4 15h16M10 3 8 21m8-18-2 18"
                  />
                </symbol>
                <use href="#ai:local:hash" />
              </svg>
            </span>
            Experience
          </Link>
        </h2>
        <div className="mt-6 sm:mt-8">
          <Company
            name="Ortelius"
            role="Frontend & Backend Developer"
            period="Mar 2025 - Present"
            description="I build full-stack web applications, from AI-powered assistants to scalable multi-tenant systems, focusing on clean architecture and user experience."
            technologies="React, Node, and Python"
          />
        </div>
      </section>
      <section id="interests" className="container mt-12 sm:mt-16">
        <h2 className="font-medium mb-6 sm:mb-8">
          <Link href="#interests" className="group relative">
            <span className="absolute flex h-[1lh] items-center px-2 opacity-0 transition-opacity group-hover:opacity-100 max-md:left-full md:right-full">
              <svg width="1em" height="1em" className="size-4" data-icon="hash">
                <use href="#ai:local:hash" />
              </svg>
            </span>
            Interests
          </Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-border-default pt-6 sm:pt-8">
          <Skill
            icon={
              <svg
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.5 1.93782C4.70129 1.82161 4.99472 1.7858 5.41315 1.91053C5.83298 2.03567 6.33139 2.31073 6.87627 2.73948C7.01136 2.84578 7.14803 2.96052 7.28573 3.08331C6.86217 3.53446 6.44239 4.04358 6.03752 4.60092C5.35243 4.67288 4.70164 4.78186 4.09916 4.92309C4.06167 4.74244 4.03064 4.56671 4.00612 4.39656C3.90725 3.71031 3.91825 3.14114 4.01979 2.71499C4.12099 2.29025 4.29871 2.05404 4.5 1.93782ZM7.49466 1.95361C7.66225 2.08548 7.83092 2.22804 7.99999 2.38067C8.16906 2.22804 8.33773 2.08548 8.50532 1.95361C9.10921 1.47842 9.71982 1.12549 10.3012 0.952202C10.8839 0.778496 11.4838 0.7738 12 1.0718C12.5161 1.3698 12.812 1.89169 12.953 2.48322C13.0936 3.07333 13.0932 3.77858 12.9836 4.53917C12.9532 4.75024 12.9141 4.9676 12.8665 5.19034C13.0832 5.26044 13.291 5.33524 13.489 5.41444C14.2025 5.69983 14.8134 6.05217 15.2542 6.46899C15.696 6.8868 16 7.404 16 8C16 8.596 15.696 9.11319 15.2542 9.53101C14.8134 9.94783 14.2025 10.3002 13.489 10.5856C13.291 10.6648 13.0832 10.7396 12.8665 10.8097C12.9141 11.0324 12.9532 11.2498 12.9837 11.4608C13.0932 12.2214 13.0936 12.9267 12.953 13.5168C12.812 14.1083 12.5161 14.6302 12 14.9282C11.4839 15.2262 10.8839 15.2215 10.3012 15.0478C9.71984 14.8745 9.10923 14.5216 8.50534 14.0464C8.33775 13.9145 8.16906 13.7719 7.99999 13.6193C7.83091 13.7719 7.66223 13.9145 7.49464 14.0464C6.89075 14.5216 6.28014 14.8745 5.69879 15.0478C5.11605 15.2215 4.51613 15.2262 3.99998 14.9282C3.48383 14.6302 3.18794 14.1083 3.047 13.5168C2.9064 12.9267 2.90674 12.2214 3.01632 11.4608C3.04673 11.2498 3.08586 11.0324 3.13351 10.8097C2.91679 10.7395 2.709 10.6648 2.511 10.5856C1.79752 10.3002 1.18658 9.94783 0.745833 9.53101C0.304028 9.11319 0 8.596 0 8C0 7.404 0.304028 6.8868 0.745833 6.46899C1.18658 6.05217 1.79752 5.69983 2.511 5.41444C2.709 5.33524 2.9168 5.26044 3.13352 5.19034C3.08587 4.9676 3.04675 4.75024 3.01634 4.53917C2.90676 3.77858 2.90642 3.07332 3.04702 2.48321C3.18796 1.89169 3.48385 1.3698 4 1.0718C4.51615 0.773798 5.11607 0.778495 5.69881 0.952201C6.28016 1.12549 6.89077 1.47841 7.49466 1.95361ZM7.36747 4.51025C7.57735 4.25194 7.78881 4.00927 7.99999 3.78356C8.21117 4.00927 8.42263 4.25194 8.63251 4.51025C8.42369 4.50346 8.21274 4.5 8 4.5C7.78725 4.5 7.5763 4.50345 7.36747 4.51025ZM8.71425 3.08331C9.13781 3.53447 9.55759 4.04358 9.96246 4.60092C10.6475 4.67288 11.2983 4.78186 11.9008 4.92309C11.9383 4.74244 11.9693 4.56671 11.9939 4.39657C12.0927 3.71031 12.0817 3.14114 11.9802 2.71499C11.879 2.29025 11.7013 2.05404 11.5 1.93782C11.2987 1.82161 11.0053 1.7858 10.5868 1.91053C10.167 2.03568 9.66859 2.31073 9.12371 2.73948C8.98862 2.84578 8.85196 2.96052 8.71425 3.08331ZM8 5.5C8.48433 5.5 8.95638 5.51885 9.41188 5.55456C9.67056 5.93118 9.9229 6.33056 10.1651 6.75C10.4072 7.16944 10.6269 7.58766 10.8237 7.99998C10.6269 8.41232 10.4072 8.83055 10.165 9.25C9.92288 9.66944 9.67053 10.0688 9.41185 10.4454C8.95636 10.4812 8.48432 10.5 8 10.5C7.51567 10.5 7.04363 10.4812 6.58813 10.4454C6.32945 10.0688 6.0771 9.66944 5.83494 9.25C5.59277 8.83055 5.37306 8.41232 5.17624 7.99998C5.37306 7.58765 5.59275 7.16944 5.83492 6.75C6.07708 6.33056 6.32942 5.93118 6.5881 5.55456C7.04361 5.51884 7.51566 5.5 8 5.5ZM11.0311 6.25C11.1375 6.43423 11.2399 6.61864 11.3385 6.80287C11.4572 6.49197 11.5616 6.18752 11.6515 5.89178C11.3505 5.82175 11.0346 5.75996 10.706 5.70736C10.8163 5.8848 10.9247 6.06576 11.0311 6.25ZM11.0311 9.75C11.1374 9.56576 11.2399 9.38133 11.3385 9.19709C11.4572 9.50801 11.5617 9.81246 11.6515 10.1082C11.3505 10.1782 11.0346 10.24 10.7059 10.2926C10.8162 10.1152 10.9247 9.93424 11.0311 9.75ZM11.9249 7.99998C12.2051 8.62927 12.4362 9.24738 12.6151 9.83977C12.7903 9.78191 12.958 9.72092 13.1176 9.65708C13.7614 9.39958 14.2488 9.10547 14.5671 8.80446C14.8843 8.50445 15 8.23243 15 8C15 7.76757 14.8843 7.49555 14.5671 7.19554C14.2488 6.89453 13.7614 6.60042 13.1176 6.34292C12.958 6.27907 12.7903 6.21808 12.6151 6.16022C12.4362 6.7526 12.2051 7.37069 11.9249 7.99998ZM9.96244 11.3991C10.6475 11.3271 11.2983 11.2181 11.9008 11.0769C11.9383 11.2576 11.9694 11.4333 11.9939 11.6034C12.0928 12.2897 12.0817 12.8589 11.9802 13.285C11.879 13.7098 11.7013 13.946 11.5 14.0622C11.2987 14.1784 11.0053 14.2142 10.5868 14.0895C10.167 13.9643 9.66861 13.6893 9.12373 13.2605C8.98863 13.1542 8.85196 13.0395 8.71424 12.9167C9.1378 12.4655 9.55758 11.9564 9.96244 11.3991ZM8.63249 11.4898C8.42262 11.7481 8.21116 11.9907 7.99999 12.2164C7.78881 11.9907 7.57737 11.7481 7.36749 11.4897C7.57631 11.4965 7.78726 11.5 8 11.5C8.21273 11.5 8.42367 11.4965 8.63249 11.4898ZM4.96891 9.75C5.07528 9.93424 5.18375 10.1152 5.29404 10.2926C4.9654 10.24 4.64951 10.1782 4.34844 10.1082C4.43833 9.81246 4.54276 9.508 4.66152 9.19708C4.76005 9.38133 4.86254 9.56575 4.96891 9.75ZM6.03754 11.3991C5.35244 11.3271 4.70163 11.2181 4.09914 11.0769C4.06165 11.2576 4.03062 11.4333 4.0061 11.6034C3.90723 12.2897 3.91823 12.8589 4.01977 13.285C4.12097 13.7098 4.29869 13.946 4.49998 14.0622C4.70127 14.1784 4.9947 14.2142 5.41313 14.0895C5.83296 13.9643 6.33137 13.6893 6.87625 13.2605C7.01135 13.1542 7.14802 13.0395 7.28573 12.9167C6.86217 12.4655 6.4424 11.9564 6.03754 11.3991ZM4.07507 7.99998C3.79484 8.62927 3.56381 9.24737 3.38489 9.83977C3.20969 9.78191 3.042 9.72092 2.88239 9.65708C2.23864 9.39958 1.75123 9.10547 1.43294 8.80446C1.11571 8.50445 1 8.23243 1 8C1 7.76757 1.11571 7.49555 1.43294 7.19554C1.75123 6.89453 2.23864 6.60042 2.88239 6.34292C3.042 6.27907 3.2097 6.21808 3.3849 6.16022C3.56383 6.75261 3.79484 7.37069 4.07507 7.99998ZM4.66152 6.80287C4.54277 6.49197 4.43835 6.18752 4.34846 5.89178C4.64952 5.82175 4.96539 5.75996 5.29402 5.70736C5.18373 5.8848 5.07526 6.06576 4.96889 6.25C4.86253 6.43423 4.76005 6.61864 4.66152 6.80287ZM9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30965 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30965 9.25 8Z"
                  fill="#149ECA"
                />
                <defs>
                  <rect width="16" height="16" fill="white" />
                </defs>
              </svg>
            }
            title="React"
            description="I build user interfaces with Next.js, and React Router, focusing on component reusability."
          />
          <Skill
            icon={
              <svg
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style={{ color: "currentcolor" }}
              >
                <mask
                  id="mask0_872_3158"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="0"
                  width="14"
                  height="16"
                >
                  <path
                    d="M7.62322 0.101215L1.37744 3.72072C1.1435 3.85617 1 4.10623 1 4.37653V11.6206C1 11.8911 1.1435 12.141 1.37744 12.2764L7.62367 15.8987C7.85716 16.0338 8.14506 16.0338 8.37826 15.8987L14.6234 12.2764C14.8562 12.141 15 11.8909 15 11.6206V4.37653C15 4.10623 14.8562 3.85617 14.622 3.72072L8.37767 0.101215C8.26055 0.0337871 8.13009 0 7.99963 0C7.86917 0 7.73871 0.0337871 7.62159 0.101215"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_872_3158)">
                  <path
                    d="M21.3115 3.10613L3.71197 -5.55525L-5.31201 12.9276L12.2871 21.5894L21.3115 3.10613Z"
                    fill="url(#paint0_linear_872_3158)"
                  />
                </g>
                <mask
                  id="mask1_872_3158"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="0"
                  width="14"
                  height="16"
                >
                  <path
                    d="M1.15454 12.0805C1.21429 12.1584 1.289 12.2258 1.37692 12.2764L6.73468 15.3836L7.62714 15.8986C7.76057 15.976 7.91267 16.0087 8.06211 15.9976C8.11192 15.9936 8.16173 15.9842 8.21036 15.9703L14.7977 3.86019C14.7473 3.80511 14.6883 3.75897 14.6222 3.72027L10.5325 1.34915L8.37077 0.100323C8.30939 0.0646001 8.24282 0.0392964 8.17507 0.0214348L1.15454 12.0805Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_872_3158)">
                  <path
                    d="M-6.45459 5.66793L5.97248 22.555L22.4075 10.3636L9.97968 -6.52305L-6.45459 5.66793Z"
                    fill="url(#paint1_linear_872_3158)"
                  />
                </g>
                <mask
                  id="mask2_872_3158"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="0"
                  width="14"
                  height="16"
                >
                  <path
                    d="M7.92494 0.00417044C7.82013 0.0145897 7.71769 0.0473349 7.62325 0.101217L1.39526 3.7103L8.11099 15.9916C8.20439 15.9782 8.29631 15.947 8.37933 15.8988L14.6251 12.2764C14.8178 12.1642 14.9498 11.9743 14.9898 11.759L8.14361 0.0165236C8.0932 0.00655088 8.0428 0.00134277 7.99091 0.00134277C7.97016 0.00134277 7.9494 0.00238306 7.92865 0.00431807"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask2_872_3158)">
                  <path
                    d="M1.39502 0.00134277V15.9919H14.987V0.00134277H1.39502Z"
                    fill="url(#paint2_linear_872_3158)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_872_3158"
                    x1="12.5064"
                    y1="-1.23818"
                    x2="3.42452"
                    y2="17.2146"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.3" stopColor="#3E863D" />
                    <stop offset="0.5" stopColor="#55934F" />
                    <stop offset="0.8" stopColor="#5AAD45" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_872_3158"
                    x1="-0.166585"
                    y1="14.2083"
                    x2="16.3156"
                    y2="2.07868"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.57" stopColor="#3E863D" />
                    <stop offset="0.72" stopColor="#619857" />
                    <stop offset="1" stopColor="#76AC64" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_872_3158"
                    x1="1.39961"
                    y1="7.99708"
                    x2="14.9896"
                    y2="7.99708"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.16" stopColor="#6BBF47" />
                    <stop offset="0.38" stopColor="#79B461" />
                    <stop offset="0.47" stopColor="#75AC64" />
                    <stop offset="0.7" stopColor="#659E5A" />
                    <stop offset="0.9" stopColor="#3E863D" />
                  </linearGradient>
                </defs>
              </svg>
            }
            title="Node.js"
            description="I build backend services and APIs with Node.js, using frameworks like Hono and Adonis."
          />
          <div className="border-t border-border-default pt-6 sm:pt-8">
            <Skill
              icon={
                <svg
                  data-testid="geist-icon"
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  style={{ color: "currentcolor" }}
                >
                  <path
                    d="M7.90474 0.00013087C7.24499 0.00316291 6.61494 0.0588153 6.06057 0.15584C4.42745 0.441207 4.13094 1.0385 4.13094 2.14002V3.59479H7.9902V4.07971H4.13094H2.68259C1.56099 4.07971 0.578874 4.7465 0.271682 6.01496C-0.0826597 7.4689 -0.0983767 8.37619 0.271682 9.89434C0.546012 11.0244 1.20115 11.8296 2.32276 11.8296H3.64966V10.0856C3.64966 8.82574 4.75179 7.71441 6.06057 7.71441H9.91533C10.9884 7.71441 11.845 6.84056 11.845 5.77472V2.14002C11.845 1.10556 10.9626 0.328487 9.91533 0.15584C9.25237 0.046687 8.56448 -0.00290121 7.90474 0.00013087ZM5.81768 1.17017C6.21631 1.17017 6.54185 1.49742 6.54185 1.89978C6.54185 2.30072 6.21631 2.62494 5.81768 2.62494C5.41761 2.62494 5.09351 2.30072 5.09351 1.89978C5.09351 1.49742 5.41761 1.17017 5.81768 1.17017Z"
                    fill="url(#paint0_linear_872_3163)"
                  />
                  <path
                    d="M12.3262 4.07971V5.77472C12.3262 7.08883 11.1997 8.19488 9.91525 8.19488H6.06049C5.0046 8.19488 4.13086 9.0887 4.13086 10.1346V13.7693C4.13086 14.8037 5.04033 15.4122 6.06049 15.709C7.28211 16.0642 8.45359 16.1285 9.91525 15.709C10.8868 15.4307 11.8449 14.8708 11.8449 13.7693V12.3145H7.99012V11.8296H11.8449H13.7745C14.8961 11.8296 15.3141 11.0558 15.7041 9.89434C16.1071 8.69865 16.0899 7.5488 15.7041 6.01495C15.4269 4.91058 14.8975 4.07971 13.7745 4.07971H12.3262ZM10.1581 13.2843C10.5582 13.2843 10.8823 13.6086 10.8823 14.0095C10.8823 14.4119 10.5582 14.7391 10.1581 14.7391C9.7595 14.7391 9.43397 14.4119 9.43397 14.0095C9.43397 13.6086 9.7595 13.2843 10.1581 13.2843Z"
                    fill="url(#paint1_linear_872_3163)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_872_3163"
                      x1="-4.80577e-08"
                      y1="-4.12903e-08"
                      x2="8.81665"
                      y2="7.59598"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5A9FD4" />
                      <stop offset="1" stopColor="#306998" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_872_3163"
                      x1="10.0654"
                      y1="13.8872"
                      x2="6.91907"
                      y2="9.42956"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFD43B" />
                      <stop offset="1" stopColor="#FFE873" />
                    </linearGradient>
                  </defs>
                </svg>
              }
              title="Python"
              description="I develop backend systems, AI agents, and modern APIs with Python and FastAPI."
            />
          </div>
          <div className="border-t border-border-default pt-6 sm:pt-8">
            <Skill
              icon={
                <svg
                  data-testid="geist-icon"
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  style={{ color: "currentcolor" }}
                >
                  <g clipPath="url(#clip0_872_3147)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_872_3147">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              title="GitHub"
              description="I use GitHub to manage my projects and collaborate with teams on version control."
            />
          </div>
        </div>
      </section>
      <section id="connect" className="container mt-12 sm:mt-16">
        <h2 className="font-medium">
          <Link href="#connect" className="group relative">
            <span className="absolute flex h-[1lh] items-center px-2 opacity-0 transition-opacity group-hover:opacity-100 max-md:left-full md:right-full">
              <svg width="1em" height="1em" className="size-4" data-icon="hash">
                <use href="#ai:local:hash" />
              </svg>
            </span>
            Connect
          </Link>
        </h2>
        <dl className="mt-6 sm:mt-8 grid grid-cols-[auto_1fr] sm:grid-cols-[30%_1fr] md:grid-cols-[25%_1fr] gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-4 border-t border-border-default pt-6 sm:pt-8">
          <dt className="text-muted-foreground">GitHub</dt>
          <dd>
            <a
              href="https://github.com/Gb16702"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @gb16702
            </a>
          </dd>

          <dt className="text-muted-foreground">Mail</dt>
          <dd>
            <a
              href="mailto:delgeoffrey1@gmail.com"
              className="hover:underline break-all sm:break-normal"
            >
              delgeoffrey1@gmail.com
            </a>
          </dd>

          <dt className="text-muted-foreground">LinkedIn</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/geoffrey-delhaye-769b29243/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @geoffreydelhaye
            </a>
          </dd>
        </dl>
      </section>
    </>
  );
}
