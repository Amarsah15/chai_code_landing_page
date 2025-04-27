const toogle = document.getElementById("toogle");
toogle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const video = document.getElementById("scaleVideo");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.classList.remove("scale-down");
        video.classList.add("scale-up");
      } else {
        video.classList.remove("scale-up");
        video.classList.add("scale-down");
      }
    });
  },
  {
    threshold: 0.5, // Adjusts when scaling happens
  }
);

observer.observe(video);

// Function to Render Courses

const courses = [
  {
    title: "Web Dev Cohort - Live 1.0",
    video: "https://www.youtube.com/embed/yG8JMlldoCE",
    outline: [
      "💻 Web Development Essentials",
      "🧩 Frontend Frameworks",
      "🖥️ Backend Development",
      "☁️ DevOps & Deployment",
      "🛠️ Modern Dev Workflows",
      "🤖 AI Integration",
    ],
    price: "6,999 INR",
    original: "8999 INR",
    discount: "Save 22%",
    buynow:
      "https://courses.chaicode.com/learn/fast-checkout/214297?priceId=176851&cpst=1744718631127&bundleId=214297",
    learnmore: "https://courses.chaicode.com/learn/batch/about?bundleId=214297",
  },

  {
    title: "Full Stack Data Science 1.0",
    video: "https://www.youtube.com/embed/Kjd-SWpe1do",
    outline: [
      "🧑‍💻 Python Programming",
      "🧠 Statistics & Math",
      "🤖 Machine Learning",
      "🧩 Deep Learning",
      "🛠️ Modern Dev Workflows",
      "🤖 AI Integration",
    ],
    price: "6,999 INR",
    original: "8999 INR",
    discount: "Save 22%",
    buynow:
      "https://courses.chaicode.com/learn/fast-checkout/227817?priceId=191900&cpst=1744718674448&bundleId=227817",
    learnmore: "https://courses.chaicode.com/learn/batch/about?bundleId=227817",
  },

  {
    title: "GenAI with Python ",
    video: "https://www.youtube.com/embed/VNb_LawBBWU",

    outline: [
      "💻 Web Development Essentials",
      "🧩 Frontend Frameworks",
      "🖥️ Backend Development",
      "☁️ DevOps & Deployment",
      "🛠️ Modern Dev Workflows",
      "🤖 AI Integration",
    ],
    price: "4,999 INR",
    original: "7999 INR",
    discount: "Save 38%",
    buynow:
      "https://courses.chaicode.com/learn/fast-checkout/227321?priceId=191137&cpst=1744718696016&bundleId=227321",
    learnmore: "https://courses.chaicode.com/learn/batch/about?bundleId=227321",
  },
  {
    title: "Web Dev Cohort - Live 1.0",
    video: "https://www.youtube.com/embed/yG8JMlldoCE",
    outline: [
      "💻 Web Development Essentials",
      "🧩 Frontend Frameworks",
      "🖥️ Backend Development",
      "☁️ DevOps & Deployment",
      "🛠️ Modern Dev Workflows",
      "🤖 AI Integration",
    ],
    price: "6,999 INR",
    original: "8999 INR",
    discount: "Save 22%",
    buynow:
      "https://courses.chaicode.com/learn/fast-checkout/214297?priceId=176851&cpst=1744718631127&bundleId=214297",
    learnmore: "https://courses.chaicode.com/learn/batch/about?bundleId=214297",
  },
  {
    title: "DevOps for developers 1.0",
    video: "https://www.youtube.com/embed/oBLpqSHc3lA",
    outline: [
      "💻 Web Development Essentials",
      "🧩 Frontend Frameworks",
      "🖥️ Backend Development",
      "☁️ DevOps & Deployment",
      "🛠️ Modern Dev Workflows",
      "🤖 AI Integration",
    ],
    price: "4,999 INR",
    original: "7999 INR",
    discount: "Save 38%",
    buynow:
      "https://courses.chaicode.com/learn/fast-checkout/227963?priceId=192111&cpst=1744718722713&bundleId=227963",
    learnmore: "https://courses.chaicode.com/learn/batch/about?bundleId=227963",
  },
  {
    title: "Coding Hero 2025",
    video: "https://www.youtube.com/embed/Fw3FezexzV0",
    outline: [
      "💻 Web Development Essentials",
      "🧩 Frontend Frameworks",
      "🖥️ Backend Development",
      "☁️ DevOps & Deployment",
      "🛠️ Modern Dev Workflows",
      "🤖 AI Integration",
    ],
    price: "299 INR",
    original: "599 INR",
    discount: "Save 50%",
    buynow:
      "https://courses.chaicode.com/learn/fast-checkout/226894?priceId=190535&cpst=1744718748361&bundleId=226894",
    learnmore: "https://courses.chaicode.com/learn/batch/about?bundleId=226894",
  },
];

renderCourses(courses);

function renderCourses(courses) {
  const container = document.getElementById("swiper-wrapper");
  courses.forEach((course) => {
    container.innerHTML += `
      <div class="swiper-slide">
        <div class="flex flex-wrap justify-center items-start rounded-2xl border-white border-2 w-full">
          <div class="rounded-2xl max-w-xs w-full overflow-hidden shadow-md bg-background text-textColor">
            <div class="relative w-full pt-[56.25%] overflow-hidden shadow-lg">
              <iframe class="absolute top-0 left-0 w-full h-full"
                src="${course.video}" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>

            <div class="p-4">
              <h2 class="font-bold text-lg text-textColor">${course.title}</h2>

              <div class="mt-4">
                <p class="font-semibold text-sm text-textColor">Course Outline</p>
                <ul class="mt-2 space-y-2 text-sm text-gray-600">
                  ${course.outline
                    .map(
                      (item) =>
                        `<li class="flex items-center gap-2">${item}</li>`
                    )
                    .join("")}
                </ul>
              </div>

              <div class="mt-4">
                <span class="text-textColor font-bold text-2xl mt-4">${
                  course.price
                }</span>
                <span class="text-gray-500 text-sm line-through ml-2">${
                  course.original
                }</span>
                <p class="text-[13px] mt-2 text-textColor font-semibold">${
                  course.discount
                }</p>
              </div>

              <div class="mt-5 flex flex-col gap-2">
                <button
                  class="bg-orange-600 hover:bg-orange-700 text-white py-2 rounded font-semibold">
                  <a href="${course.buynow}" target="_blank">Buy Now</a>  
                </button>
                <button
                  class="border-2 border-orange-600 text-orange-600 py-2 rounded font-semibold hover:bg-blue-50"><a href="${
                    course.learnmore
                  }" target="_blank">Learn More</a> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function renderTweets(containerId, tweets) {
  const container = document.getElementById(containerId);
  tweets.forEach((tweet) => {
    container.innerHTML += `
  <div class="bg-background p-4 rounded-xl shadow border border-textColor">
    <div class="flex gap-3">
      <img src="${tweet.img}" class="w-10 h-10 rounded-full" />
      <div>
        <p class="font-bold">${tweet.name} <span class="text-sm text-textColor">${tweet.handle}</span></p>
        <p class="mt-1 text-textColor leading-relaxed">${tweet.text}</p>
      </div>
    </div>
  </div>
`;
  });
}

const col1Tweets = [
  {
    name: "Rahul Dev",
    handle: "@rahulbuilds",
    text: "Dark mode isn't a feature. It's a necessity. 🌑 #frontend Life saver at night!",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Sneha UI",
    handle: "@sneha_uiux",
    text: "Framer Motion + Tailwind = pure love ❤️🔥. Can't imagine animations without it now! Dark mode isn't a feature. It's a necessity. 🌑 #frontend Life saver at night!",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Chaicode",
    handle: "@chaicode",
    text: "Stop memorizing. Understand the flow. JavaScript becomes easier that way. 🧠 Trust me, it changes everything!",
    img: "https://avatars.githubusercontent.com/u/80145488?v=4",
  },
  {
    name: "Rajat Singh",
    handle: "@rajatdev",
    text: "useEffect is the new lifecycle boss. Respect it. #reactjs Beginners often miss its true power.",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    name: "Tanvi Patel",
    handle: "@tanvi_codes",
    text: "When in doubt, add a console.log and a cup of chai ☕😅 Works 90% of the time, every time! Dark mode isn't a feature. It's a necessity. 🌑 #frontend Life saver at night! Dark mode isn't a feature. It's a necessity. 🌑 #frontend Life saver at night!",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Ankit Dev",
    handle: "@ankitjs",
    text: "Switching from JS to TS was the best decision I made this year. 🚀 You feel like you have superpowers!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    handle: "@priyacodes",
    text: "CSS Grid > Flexbox in most layouts. Learn both, love both. ❤️ And yes, browser support is pretty solid now! Dark mode isn't a feature. It's a necessity. 🌑 #frontend Life saver at night!",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Devendra Singh",
    handle: "@dev_d_singh",
    text: "Just discovered Framer Motion + Tailwind = UI fire 🔥. Game changer for sleek projects!",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Isha Rawat",
    handle: "@ishacodes",
    text: "Just deployed my first full-stack app. The joy is real 🥹🚀 Can't wait to show the world!",
    img: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    name: "Yuvraj Khanna",
    handle: "@yuvi_dev",
    text: "AI will not replace developers. But devs using AI will replace those who don’t. 🤖 Stay updated or stay behind!",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Tarun Jain",
    handle: "@tarunjain_dev",
    text: "Don’t learn 10 frameworks. Learn core JS. Everything else will follow. 🔁 Trust me, you'll thank yourself later. Dark mode isn't a feature. It's a necessity. 🌑 #frontend Life saver at night!",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Megha",
    handle: "@meghapixels",
    text: "UI without UX is just decoration 🎨 #uxdesign. Always think from the user's perspective!",
    img: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Anjali Desai",
    handle: "@anjalidesign",
    text: "Want to become a frontend ninja? Learn Figma + Tailwind + React. ⚔️ Start today, thank yourself tomorrow. Dark mode isn't a feature. It's a necessity. 🌑 #frontend Life saver at night!",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

const col2Tweets = [
  {
    name: "Hitesh Choudhary",
    handle: "@hiteshdotcom",
    text: "You don't need a CS degree to build something amazing. Start building. Start today. 💻🔥 Consistency beats talent.",
    img: "https://pbs.twimg.com/profile_images/1618593285458692096/RHkK1hzE_400x400.jpg",
  },
  {
    name: "Ritik Patel",
    handle: "@ritik_codes",
    text: "Finally got my first open source PR merged! What a feeling 💙 Onwards and upwards!",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Aarohi",
    handle: "@aarohitech",
    text: "You only need 3 things: Google, Console, and StackOverflow 😂 And maybe a little bit of patience too! Dark mode isn't a feature. It's a necessity. 🌑 #frontend Life saver at night!",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Yash Mishra",
    handle: "@mishra_codes",
    text: "Tailwind CSS is not a framework, it’s a lifestyle 😆 Once you start, there's no going back!",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Neha UI",
    handle: "@neha_ui",
    text: "The moment your animation syncs perfectly... goosebumps 😍 It's an artist's moment! ",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    name: "Kunal Joshi",
    handle: "@kunal_js",
    text: "Deploying on Vercel feels like magic. ✨ #devlife Especially when that 'deployed successfully' message pops up!",
    img: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "Avni Patel",
    handle: "@avnifrontend",
    text: "Learn the box model. It fixes 80% of layout bugs. 📦 Understanding it saves so much debugging time! Tailwind CSS is not a framework, it’s a lifestyle 😆 Once you start, there's no going back!",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Rohit Deshmukh",
    handle: "@rohitcodes",
    text: "React Router v6 has spoiled me. So elegant. 🔄 Navigation never felt this smooth before!",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Shaurya",
    handle: "@shaureacts",
    text: "Open Source is the best way to grow as a dev. Start small, be consistent 💙 Community over competition always!",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Harshita Mehra",
    handle: "@harshita_m",
    text: "Shadcn UI just raised the bar. Every component feels premium ✨ Can't wait to use it in my next project!",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Akash Rana",
    handle: "@akashr_js",
    text: "Learning DSA is boring until you actually solve problems. Then it's addictive 🔁 Level up, one problem at a time! Tailwind CSS is not a framework, it’s a lifestyle 😆 Once you start, there's no going back! Tailwind CSS is not a framework, it’s a lifestyle 😆 Once you start, there's no going back!",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Irfan Ali",
    handle: "@irfan_js",
    text: "Dev tip: Use your console like Sherlock. Clues are everywhere 🕵️‍♂️ Debugging is half the job!",
    img: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    name: "Nitika",
    handle: "@niti_js",
    text: "If you're stuck, explain your bug out loud. Your brain finds the fix itself! 🧠 Rubber duck debugging FTW! Dev tip: Use your console like Sherlock. Clues are everywhere 🕵️‍♂️ Debugging is half the job!",
    img: "https://randomuser.me/api/portraits/women/11.jpg",
  },
];

const col3Tweets = [
  {
    name: "Ravi Jha",
    handle: "@ravijha",
    text: "React + Tailwind + Vite = 🔥 Fastest workflow ever. Try it and never look back! Build faster, ship faster.",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Meena Bhatt",
    handle: "@meena_ui",
    text: "Animations with Framer Motion made me fall in love with frontend 💖 Especially microinteractions! Dev tip: Use your console like Sherlock. Clues are everywhere 🕵️‍♂️ Debugging is half the job! Dev tip: Use your console like Sherlock. Clues are everywhere 🕵️‍♂️ Debugging is half the job!",
    img: "https://randomuser.me/api/portraits/women/80.jpg",
  },
  {
    name: "Anurag Verma",
    handle: "@anuragcodes",
    text: "Want to get better at coding? 1. Pick challenge 2. Build project 3. Repeat. Trust the process!",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Kritika",
    handle: "@kritika_css",
    text: "The best frontend framework is consistency. Choose one, and stick with it. 💡 Avoid shiny object syndrome!",
    img: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "Sanjay B",
    handle: "@sanjaydev",
    text: "Pro tip: Make your commit messages clear. 'Fixed stuff' isn't helping anyone 😂 Be descriptive, be proud! Want to get better at coding? 1. Pick challenge 2. Build project 3. Repeat. Trust the process!",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Neeraj Pathak",
    handle: "@neeraj_ui",
    text: "If your UI works but feels off, check line-height and padding. #UXmagic Sometimes small tweaks matter most!",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Sonal Singh",
    handle: "@sonalspeaksdev",
    text: "React context is great. But don’t overuse it. Keep it clean! Modular code always wins!",
    img: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    name: "Bhavik Sharma",
    handle: "@bhavik_js",
    text: "1: Learn Tailwind. 2: Master layouts. 3: Dominate UI work. Game on. 🎯 Level up your frontend game!",
    img: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Charu Bansal",
    handle: "@charu_b",
    text: "Great design isn’t what looks good, it’s what feels right to users. #UX Emotion > Decoration! Want to get better at coding? 1. Pick challenge 2. Build project 3. Repeat. Trust the process! Want to get better at coding? 1. Pick challenge 2. Build project 3. Repeat. Trust the process!",
    img: "https://randomuser.me/api/portraits/women/88.jpg",
  },
  {
    name: "Aditya Singh",
    handle: "@adi_devx",
    text: "React Query is a cheat code for data fetching. ✨ Once you use it, you can't go back to manual fetching!",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Komal",
    handle: "@komal_js",
    text: "If you're using Tailwind and not using variants, you're missing out! Variants = ultimate productivity hack. Want to get better at coding? 1. Pick challenge 2. Build project 3. Repeat. Trust the process!",
    img: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    name: "Harshit Khare",
    handle: "@harshitdev",
    text: "Next.js App Router is 🔥 Just give it a try and thank me later. Life becomes simpler!",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Zara Khan",
    handle: "@zarak_codes",
    text: "Want fast UI? Lazy load like a pro. Smoothness unlocked 💫 Especially critical for mobile users! Want to get better at coding? 1. Pick challenge 2. Build project 3. Repeat. Trust the process! Want to get better at coding? 1. Pick challenge 2. Build project 3. Repeat. Trust the process!",
    img: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

renderTweets("col1", col1Tweets);
renderTweets("col2", col2Tweets);
renderTweets("col3", col3Tweets);

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  let header = document.querySelector("nav");

  if (prevScrollpos > currentScrollPos) {
    header.classList.remove("hide");
  } else if (prevScrollpos < currentScrollPos) {
    header.classList.add("hide");
  }

  prevScrollpos = currentScrollPos;
});
